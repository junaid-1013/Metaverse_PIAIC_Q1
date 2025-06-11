
# Assignment 04
**Marks**: 15  
---

## Question: Marks 13

Develop a CUDA program that performs a conditional, row-wise reduction operation on a large square matrix using GPU parallelism with shared memory and warp-level efficiency. You will begin by initializing a matrix `M` of dimensions 512 × 512 on the host. The values inside the matrix must be generated using a personalized scalar `S`, which you will calculate based on your name and roll number. Specifically, each matrix element should be computed using the formula:

```
M[i][j] = ((i + j) * S) % 100
```

Once initialized, transfer the matrix to GPU memory and write a CUDA kernel that performs a **masked reduction** across each row. For each row `i`, include only those elements `M[i][j]` in the sum where the condition `(i * j) % S < 10` holds. Your kernel must store the result of this reduction in a one-dimensional result array `R`, such that `R[i]` contains the masked sum of the `i`-th row. The final output should include the values of `R[10]`, `R[100]`, and `R[200]` along with the **total sum** of the entire `R` array.

To meet performance standards, you are required to optimize your kernel using **shared memory** and avoid common pitfalls like bank conflicts and warp divergence. Measure the execution time of the GPU kernel using CUDA’s `clock64()` or CUDA events, and report the timing in your output.

---

## Instruction for Scalar `S`

Each student must calculate their own scalar `S` using this method:

```
S = (Sum of ASCII values of your *first name*) XOR (Sum of all digits in your *roll number*)
```

This scalar must be hardcoded in your CUDA code. Do **not** prompt for input or include your name or roll number in the output. The purpose of this personalization is to ensure unique output across submissions and discourage AI-generated plagiarism.

---

## Submission Requirements

1. **Google Colab Notebook (`.ipynb`)**
   - Properly commented code
   - Includes scalar `S` computation (in Python)
   - CUDA kernel for masked reduction
   - Output of required elements and timing

2. **Short Report (`PDF`, 2–3 pages)**
   - Your name and roll number
   - Calculation steps for scalar `S`
   - Screenshot of results
   - Description of your CUDA logic
   - Kernel timing results
   - Any encountered optimization issues

---

## Optional Bonus (2 Marks)

Extend your kernel to handle `N = 1024` using **grid-stride loop optimization**. Compare performance against the 512 × 512 version and briefly explain the differences in your report.

---
