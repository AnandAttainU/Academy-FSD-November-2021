def generateSubSequence(arr, id, curr_subseq):

    if id == len(arr):
        print(curr_subseq)
        return
    # if we take element at id
    # arr = "568"
    # id = 3
    # curr_subseq = "5"
    curr_subseq.append(arr[id])
    generateSubSequence(arr, id+1, curr_subseq)

    # if we don't take the element at id
    # curr_subseq = ""
    curr_subseq.pop()
    generateSubSequence(arr, id+1, curr_subseq)




arr = [5, 8, 123, 100]
generateSubSequence(arr, 0, [])