heap = [6, 5, 10, 4, 3, 7, 8]
#idx  =  0  1  2   3  4  5  6

def heapify(i):
    global heap
    left_idx = 2*i + 1
    right_idx = 2*i + 2
    # checking for the lead nodes, don't have to do the heapify for these
    if left_idx >= len(heap) and right_idx >= len(heap):
        return

    # Finding out the max index out of three elements, i, left_idx, right_idx
    max_idx = i
    if heap[left_idx]>heap[i]:
        max_idx = left_idx
    if heap[right_idx] > heap[max_idx]:
        max_idx = right_idx

    # swapping with the max element and calling the heapify for max_idx
    if max_idx != i:
        heap[max_idx], heap[i] = heap[i], heap[max_idx]
        heapify(max_idx)

# Running the heapify for all the nodes starting from leaf nodes
print(heap)
n = len(heap)
for i in range(n-1, -1, -1):
    heapify(i)

print(heap)