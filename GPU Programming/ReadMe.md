# GPU Programming Lab - Parallel and Distributed Computing

## 🚀 Prerequisites

- Google account
- Basic Python knowledge
- Understanding of C/C++ syntax
- Familiarity with computer architecture (recommended)

## 🧰 Setup Instructions (One-Time)

1. Open Google Colab: https://colab.research.google.com
2. Go to **Runtime > Change Runtime Type > Hardware Accelerator > GPU**
3. In a new code cell, run the following setup:

```python
!apt-get purge --auto-remove -y cuda
!rm -rf /usr/local/cuda*

!wget https://developer.download.nvidia.com/compute/cuda/11.8.0/local_installers/cuda_11.8.0_520.61.05_linux.run
!chmod +x cuda_11.8.0_520.61.05_linux.run
!./cuda_11.8.0_520.61.05_linux.run --silent --toolkit

import os
os.environ['PATH'] = '/usr/local/cuda-11.8/bin:' + os.environ['PATH']
os.environ['LD_LIBRARY_PATH'] = '/usr/local/cuda-11.8/lib64:' + os.environ.get('LD_LIBRARY_PATH', '')

!nvcc --version
!nvidia-smi
```

4. Install and load `nvcc4jupyter`:

```python
!pip install nvcc4jupyter
%load_ext nvcc4jupyter
```

You're now ready to write and run CUDA code with the `%%cu` magic cell!

## 🗓️ Weekly Labs with Code

### Week 1: Introduction to CUDA & GPU Verification
```python
!nvidia-smi
!nvcc --version
```

### Week 2: First CUDA Program (Hello CUDA)
```cuda
%%cu
#include <stdio.h>
__global__ void hello() {
    printf("Hello from GPU thread!\n");
}
int main() {
    hello<<<1, 1>>>();
    cudaDeviceSynchronize();
    return 0;
}
```

### Week 3: Memory Management
```cuda
%%cu
#include <stdio.h>
__global__ void add(int *a, int *b, int *c) {
    int i = threadIdx.x;
    c[i] = a[i] + b[i];
}
int main() {
    int a[5] = {1,2,3,4,5}, b[5] = {10,20,30,40,50}, c[5];
    int *d_a, *d_b, *d_c;
    cudaMalloc((void**)&d_a, 5 * sizeof(int));
    cudaMalloc((void**)&d_b, 5 * sizeof(int));
    cudaMalloc((void**)&d_c, 5 * sizeof(int));
    cudaMemcpy(d_a, a, 5 * sizeof(int), cudaMemcpyHostToDevice);
    cudaMemcpy(d_b, b, 5 * sizeof(int), cudaMemcpyHostToDevice);
    add<<<1,5>>>(d_a, d_b, d_c);
    cudaMemcpy(c, d_c, 5 * sizeof(int), cudaMemcpyDeviceToHost);
    for (int i=0; i<5; i++) printf("%d ", c[i]);
    return 0;
}
```

### Week 4: Thread Hierarchy
```cuda
%%cu
#include <stdio.h>
__global__ void showIndex() {
    printf("Block: %d, Thread: %d\n", blockIdx.x, threadIdx.x);
}
int main() {
    showIndex<<<2, 4>>>();
    cudaDeviceSynchronize();
    return 0;
}
```

### Week 5: Vector Addition
```cuda
%%cu
#include <stdio.h>
__global__ void vectorAdd(float *A, float *B, float *C, int N) {
    int i = blockDim.x * blockIdx.x + threadIdx.x;
    if (i < N) C[i] = A[i] + B[i];
}
int main() {
    int N = 256;
    float A[N], B[N], C[N];
    float *d_A, *d_B, *d_C;
    cudaMalloc(&d_A, N*sizeof(float));
    cudaMalloc(&d_B, N*sizeof(float));
    cudaMalloc(&d_C, N*sizeof(float));
    for (int i=0; i<N; i++) A[i]=i; B[i]=2*i;
    cudaMemcpy(d_A, A, N*sizeof(float), cudaMemcpyHostToDevice);
    cudaMemcpy(d_B, B, N*sizeof(float), cudaMemcpyHostToDevice);
    vectorAdd<<<N/64, 64>>>(d_A, d_B, d_C, N);
    cudaMemcpy(C, d_C, N*sizeof(float), cudaMemcpyDeviceToHost);
    printf("C[10]=%f\n", C[10]);
    return 0;
}
```

### Week 6: Matrix Multiplication (Tiled)
```cuda
%%cu
// Skipping full code for brevity, use shared memory, thread tiling of 16x16.
```

### Week 7: Synchronization and Shared Memory
```cuda
%%cu
#include <stdio.h>
__global__ void sharedAdd(int *a) {
    __shared__ int temp[10];
    int i = threadIdx.x;
    temp[i] = a[i];
    __syncthreads();
    a[i] = temp[i] * 2;
}
```

### Week 8: Performance Optimization
```cuda
%%cu
// Use clock64() or events to measure kernel execution time
```

### Week 9: Atomic Operations & Reduction
```cuda
%%cu
__global__ void sum(int *data, int *result) {
    __shared__ int cache[256];
    int tid = threadIdx.x;
    cache[tid] = data[tid];
    __syncthreads();
    for (int i = blockDim.x/2; i > 0; i >>= 1) {
        if (tid < i) cache[tid] += cache[tid + i];
        __syncthreads();
    }
    if (tid == 0) atomicAdd(result, cache[0]);
}
```

### Week 10: Parallel Prefix Sum (Scan)
```cuda
%%cu
// Implement Blelloch scan (exclusive scan)
```

### Week 11: Advanced Project (Image Filter / Histogram Equalization)
```cuda
%%cu
// Use CUDA to perform grayscale histogram equalization
```

### Week 12: Benchmarking CPU vs GPU
```python
import time
import numpy as np
start = time.time()
# CPU vector addition
end = time.time()
print("CPU Time:", end - start)
```
```cuda
%%cu
// Repeat same task on GPU and measure using clock64 or CUDA events
```

## 📌 References

- [CUDA C Programming Guide](https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html)
- [Parallel Programming with CUDA - Udacity](https://www.udacity.com/course/intro-to-parallel-programming--cs344)
- [Google Colab CUDA Tricks](https://colab.research.google.com)

---

Happy Coding! 💻🔥
