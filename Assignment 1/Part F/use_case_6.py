import threading
import time

def cpu_bound_task(n):
    total = 0
    for i in range(n):
        total += i
    print(f'Total: {total}')

if __name__ == '__main__':
    thread1 = threading.Thread(target=cpu_bound_task, args=(10000000,))
    thread2 = threading.Thread(target=cpu_bound_task, args=(10000000,))
    start_time = time.time()
    thread1.start()
    thread2.start()
    thread1.join()
    thread2.join()
    end_time = time.time()
    print(f'Execution Time: {end_time - start_time})