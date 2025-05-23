# Lab: Parallel and Distributed Computing - OpenCilk
---

## What is OpenCilk?

OpenCilk is an open-source platform for programming parallel applications in C/C++. It is the open successor to Intel Cilk Plus and MIT Cilk. OpenCilk simplifies parallel programming by allowing developers to annotate code with simple keywords.

### OpenCilk vs OpenMP

| Feature           | OpenCilk                                               | OpenMP                                            |
| ----------------- | ------------------------------------------------------ | ------------------------------------------------- |
| Programming Model | Task-based                                             | Primarily loop and directive-based                |
| Parallelism Type  | Fine-grained task parallelism                          | Data parallelism and coarse-grained tasks         |
| Scheduling        | Work-stealing                                          | Fork-join, static and dynamic scheduling options  |
| Ease of Use       | Simple task-based keywords (`cilk_spawn`, `cilk_sync`) | Rich directive-based syntax (e.g., `#pragma omp`) |
| Compiler Support  | Requires OpenCilk-enabled Clang                        | Supported by most C/C++ compilers                 |

OpenMP is widely used for loop parallelism and offers more control with pragmas, while OpenCilk excels in recursive and irregular task-based computations.

---

## Theoretical Background

### Key Concepts

* **Task Parallelism**: Break computation into tasks that can be executed concurrently.
* **Cilk Keywords**:

  * `cilk_spawn`: Forks a function to run in parallel.
  * `cilk_sync`: Waits for all spawned tasks to finish.
  * `cilk_for`: Parallel for loop.

### Work-Stealing Scheduler

OpenCilk uses a work-stealing scheduler, which dynamically balances load across processors by letting idle threads steal work from busy ones.

### Reducers and Hyperobjects

* **Reducers** help avoid data races by providing a way to safely accumulate values in parallel computations.
* **Hyperobjects** are generalizations of reducers that provide thread-local views of variables.

---

## Installing OpenCilk

### Linux (Ubuntu/Debian)

Goto this link: 
```bash
https://www.opencilk.org/doc/users-guide/install/#next-steps
```
and download the .sh file and run these commands

```bash
mkdir -p /opt/opencilk
sudo sh downloadedFile.sh --prefix=/opt/opencilk --exclude-subdi
```

## Practical Implementation

### 1. Simple Fibonacci (Demonstrate `cilk_spawn`, `cilk_sync`)

```cpp
#include <stdio.h>
#include <cilk/cilk.h>

int fib(int n) {
    if (n < 2)
        return n;
    int x = cilk_spawn fib(n - 1);
    int y = fib(n - 2);
    cilk_sync;
    return x + y;
}

int main() {
    int result = fib(10);
    printf("Fibonacci result: %d\n", result);
    return 0;
}
```

For Run:

```bash
/opt/opencilk/bin/clang -fopencilk -O3 fib.c -o fib
./fib
```

### 2. Parallel Loop (Demonstrate `cilk_for`)

```cpp
#include <cilk/cilk.h>
#include <stdio.h>

int main() {
    cilk_for (int i = 0; i < 10; i++) {
        printf("Index: %d\n", i);
    }
    return 0;
}
```

### 3. Using Reducers

```cpp
#include <cilk/cilk.h>
#include <cilk/reducer_opadd.h>
#include <stdio.h>

int main() {
    cilk::reducer<cilk::op_add<int>> sum;
    cilk_for (int i = 0; i < 100; i++) {
        *sum += i;
    }
    printf("Sum: %d\n", sum.get_value());
    return 0;
}
```

### 4. Parallel Merge Sort

```cpp
#include <cilk/cilk.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void merge(int* A, int* B, int left, int mid, int right) {
    int i = left, j = mid, k = left;
    while (i < mid && j < right) {
        if (A[i] < A[j]) B[k++] = A[i++];
        else B[k++] = A[j++];
    }
    while (i < mid) B[k++] = A[i++];
    while (j < right) B[k++] = A[j++];
    for (i = left; i < right; i++) A[i] = B[i];
}

void parallel_merge_sort(int* A, int* B, int left, int right) {
    if (right - left <= 1) return;
    int mid = (left + right) / 2;
    cilk_spawn parallel_merge_sort(A, B, left, mid);
    parallel_merge_sort(A, B, mid, right);
    cilk_sync;
    merge(A, B, left, mid, right);
}

int main() {
    int A[] = {10, 3, 15, 7, 8, 23, 98, 29};
    int B[8];
    int n = 8;
    parallel_merge_sort(A, B, 0, n);
    for (int i = 0; i < n; i++) printf("%d ", A[i]);
    printf("\n");
    return 0;
}
```

---

## Sample Questions

### Theoretical

1. Explain the purpose of each of the OpenCilk keywords: `cilk_spawn`, `cilk_sync`, `cilk_for`.
2. What is the role of a work-stealing scheduler in OpenCilk?
3. How do reducers help avoid race conditions?

### Practical

1. Modify the Fibonacci program to print intermediate steps.
2. Implement array sum with and without reducers and compare outputs.
3. Create a benchmark comparing serial and parallel merge sort.

---

## References

* [OpenCilk GitHub](https://github.com/OpenCilk/opencilk-project)
* [MIT Cilk Project](https://supertech.csail.mit.edu/cilk/)
* [OpenCilk Documentation](https://opencilk.org/)
