import heapq
graph = dict()
#{
    # 1: [2],
    # 2: [3,4],
    # 3: [2],
    # 4: [1]
# }

# def bfs(src):
#     visited = [False for _ in range(1005)]
#     queue = []

#     queue.append(src)
#     visited[src] = True

#     while(len(queue)!=0):
#         x = queue.pop()
#         print(x)
#         for neighbour, wt in graph[x]: # - list of adjacent elements of x
#             if not visited[neighbour]:
#                 visited[neighbour] = True
#                 queue.append(neighbour)

# def dfs(src, visited):
#     print(src)
#     visited[src] = True

#     for neighbour, wt in graph[src]:
#         if not visited[neighbour]:
#             dfs(neighbour, visited)

# V vertices and E edges
def singleSourceShortestPath(src, dest):
    n = 1005
    dist = [float("inf")]*n
    dist[src]=0
    visited = [False]*n

    heap = list()
    heapq.heappush(heap, (0,src))#O(1)

    while(len(heap)!=0):
        d, v = heapq.heappop(heap) #O(logE)
        visited[v] = True

        #Relaxation
        for neighbour, wt in graph[v]:#O(E)
            if not visited[neighbour] and dist[neighbour] > d+wt:
                dist[neighbour] = d+wt
                heapq.heappush(heap, (dist[neighbour], neighbour))#O(logE)
    return dist[dest]

    #O((E+V)logE)



def addEdge(u, v, weight, directed):
    if u not in graph:
        graph[u] = list()
    graph[u].append((v, weight))

    if not directed:
        if v not in graph:
            graph[v] = list()
        graph[v].append((u, weight))

addEdge(1, 2, 12, True)
addEdge(2, 3, 2, True)
addEdge(3, 2, 4, True)
addEdge(2, 4, 6, True)
addEdge(4, 1, 22, True)
addEdge(3, 4, 1, True)

print(singleSourceShortestPath(1, 4))

