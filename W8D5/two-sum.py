def twoSum(nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        for i in range(len(nums)): #n
            for j in range(i+1, len(nums)): #n
                if nums[i] + nums[j] == target:
                    return [i, j] # n*n O(n^2)

print(twoSum([2,7,11,15], 9))