# MPI Course

Welcome to the **MPI (Message Passing Interface)** course designed to take you from the basics of distributed programming to advanced MPI features using hands-on coding examples.

---

## 📦 Prerequisites

* OS: Ubuntu, WSL (Windows), or macOS
* Compiler: GCC (`gcc`) and MPI compiler (`mpicc`)
* Terminal and code editor (e.g., VS Code)

---

## 🛠 Installation

### Ubuntu / WSL

```bash
sudo apt update
sudo apt install openmpi-bin openmpi-common libopenmpi-dev
```

### macOS

```bash
brew install open-mpi
```

### Check Installation

```bash
mpicc --version
mpirun --version
```

---

## 🚀 Run Your First MPI Program

### hello\_world.c

```c
#include <mpi.h>
#include <stdio.h>

int main(int argc, char** argv) {
    MPI_Init(&argc, &argv);

    int rank, size;
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);

    printf("Hello from process %d out of %d\n", rank, size);

    MPI_Finalize();
    return 0;
}
```

### Compile & Run

```bash
mpicc hello_world.c -o hello_world
mpirun -np 4 ./hello_world
```

**Explanation:**

* `MPI_Init`: Initializes MPI environment
* `MPI_Comm_size`: Total number of processes
* `MPI_Comm_rank`: ID of current process
* `MPI_Finalize`: Terminates the MPI environment

---

## 📚 Course Structure with Code Examples

### 🔰 SECTION 1: Introduction

* **What is MPI?** MPI is a standardized and portable message-passing system to allow processes to communicate with one another.
* **SPMD Model:** Each process runs the same program independently.
* **Process Communication:** Uses messages to send data between distributed memory.

### 💻 SECTION 2: Basics of MPI Programming

* **MPI Initialization and Finalization**
* **Program:** `hello_world.c`
* **Task:** Print rank and total processes

### 📦 SECTION 3: Point-to-Point Communication

#### 1. send\_recv.c

```c
#include <mpi.h>
#include <stdio.h>

int main(int argc, char** argv) {
    MPI_Init(&argc, &argv);
    int rank;
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);

    if (rank == 0) {
        int data = 99;
        MPI_Send(&data, 1, MPI_INT, 1, 0, MPI_COMM_WORLD);
    } else if (rank == 1) {
        int received;
        MPI_Recv(&received, 1, MPI_INT, 0, 0, MPI_COMM_WORLD, MPI_STATUS_IGNORE);
        printf("Process 1 received %d\n", received);
    }

    MPI_Finalize();
    return 0;
}
```

### 🔄 SECTION 4: Collective Communication

#### broadcast.c

```c
#include <mpi.h>
#include <stdio.h>

int main(int argc, char** argv) {
    MPI_Init(&argc, &argv);
    int rank;
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    int value = (rank == 0) ? 42 : 0;

    MPI_Bcast(&value, 1, MPI_INT, 0, MPI_COMM_WORLD);
    printf("Process %d got %d\n", rank, value);

    MPI_Finalize();
    return 0;
}
```

#### reduce.c

```c
#include <mpi.h>
#include <stdio.h>

int main(int argc, char** argv) {
    MPI_Init(&argc, &argv);
    int rank, size;
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);

    int local_val = rank + 1;
    int global_sum;

    MPI_Reduce(&local_val, &global_sum, 1, MPI_INT, MPI_SUM, 0, MPI_COMM_WORLD);

    if (rank == 0) {
        printf("Sum of all ranks = %d\n", global_sum);
    }

    MPI_Finalize();
    return 0;
}
```

### ⚙️ SECTION 5: Advanced Topics

🧠 Why Non-blocking Communication?

In blocking communication (e.g., MPI_Send, MPI_Recv), a process waits until the communication completes before proceeding. This can lead to idle CPU time if the matching send/recv isn't ready.

Non-blocking communication (MPI_Isend, MPI_Irecv) allows a process to initiate communication and continue working without waiting. This improves performance by overlapping computation and communication.

Pros:

Reduces CPU idle time

Enables communication-computation overlap

Improves performance in compute-heavy programs

#### nonblocking\_send.c

```c
#include <mpi.h>
#include <stdio.h>

int main(int argc, char** argv) {
    MPI_Init(&argc, &argv);
    int rank;
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);

    MPI_Request request;
    if (rank == 0) {
        int value = 10;
        MPI_Isend(&value, 1, MPI_INT, 1, 0, MPI_COMM_WORLD, &request);
    } else if (rank == 1) {
        int value;
        MPI_Irecv(&value, 1, MPI_INT, 0, 0, MPI_COMM_WORLD, &request);
        MPI_Wait(&request, MPI_STATUS_IGNORE);
        printf("Non-blocking received %d\n", value);
    }

    MPI_Finalize();
    return 0;
}
```

---

## 🧪 Sample MPI Run Commands

```bash
mpicc filename.c -o outputname
mpirun -np 4 ./outputname
```

---

## 📊 Debugging & Profiling

* Debugging: `gdb`, `valgrind`
* Profiling: `mpiP`, `gprof`, `Tau`

---

## 📁 Source File Structure

```
mpi-course/
├── README.md
├── section1_intro/
│   └── hello_world.c
├── section2_point_to_point/
│   └── send_recv.c
├── section3_collectives/
│   ├── broadcast.c
│   └── reduce.c
├── section4_advanced/
│   └── nonblocking_send.c
```
### 🧪 SECTION 7: Mini Projects

#### 🧩 Game of Life (Parallelized with MPI)

**Overview:**

* Conway's Game of Life is a cellular automaton where cells evolve based on neighboring cells.
* In MPI, we can divide the 2D grid among processes (each gets a horizontal slice).
* Border rows must be exchanged between neighboring processes at each generation.

**MPI Concepts Used:**

* `MPI_Sendrecv` for boundary exchange
* Collective synchronization with `MPI_Barrier`

**Key Features:**

* Dynamic grid update
* Communication between neighbors
* Use of ghost rows (top/bottom)

**Code File:** `projects/game_of_life.c`

**Compile & Run:**

```bash
mpicc game_of_life.c -o game_of_life
mpirun -np 4 ./game_of_life 20 20 100
```

Where `20 20 100` are: rows, columns, generations

**Assignment:**

* Add functionality to output each generation to a file.
* Implement periodic boundary conditions.
* Measure execution time using `MPI_Wtime`.


---
