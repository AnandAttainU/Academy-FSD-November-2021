# n = 4
# graph = [[0 for _ in range(n+1)] for _ in range(n+1)]

# def addEdge(u, v, weight, directed):
#     graph[u][v] = weight
#     if not directed:
#         graph[v][u] = weight

# addEdge(1, 2, 1, False)
# addEdge(2, 3, 1, False)
# addEdge(3, 2, 1, False)
# addEdge(2, 4, 1, False)
# addEdge(4, 1, 1, False)

# for i in range(n+1):
#     for j in range(n+1):
#         print(graph[i][j], end=" ")
#     print()


# Adjacency list:

graph = dict()

def addEdge(u, v, weight, directed):
    if u not in graph:
        graph[u] = list()
    graph[u].append((v, weight))

    if not directed:
        if v not in graph:
            graph[v] = list()
        graph[v].append((u, weight))

addEdge(1, 2, 1, False)
addEdge(2, 3, 1, False)
addEdge(3, 2, 1, False)
addEdge(2, 4, 1, False)
addEdge(4, 1, 1, False)

print(graph)
