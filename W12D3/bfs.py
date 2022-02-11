graph = dict()
#{
    # 1: [2],
    # 2: [3,4],
    # 3: [2],
    # 4: [1]
# }

def bfs(src):
    visited = [False for _ in range(1005)]
    queue = []

    queue.append(src)
    visited[src] = True

    while(len(queue)!=0):
        x = queue.pop()
        print(x)
        for neighbour, wt in graph[x]: # - list of adjacent elements of x
            if not visited[neighbour]:
                visited[neighbour] = True
                queue.append(neighbour)

def dfs(src, visited):
    print(src)
    visited[src] = True

    for neighbour, wt in graph[src]:
        if not visited[neighbour]:
            dfs(neighbour, visited)

def addEdge(u, v, weight, directed):
    if u not in graph:
        graph[u] = list()
    graph[u].append((v, weight))

    if not directed:
        if v not in graph:
            graph[v] = list()
        graph[v].append((u, weight))

addEdge(1, 2, 1, True)
addEdge(2, 3, 1, True)
addEdge(3, 2, 1, True)
addEdge(2, 4, 1, True)
addEdge(4, 1, 1, True)

visited = [False for _ in range(1005)]
print("bfs output")
bfs(1)

print("dfs traversal:")
dfs(1, visited)
