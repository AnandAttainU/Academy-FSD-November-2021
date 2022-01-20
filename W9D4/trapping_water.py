# Trapping water problem
def trap(height):
        n = len(height)
        total_water_trapped = 0
        
        for idx in range(n):
            max_left = float("-inf")
            for j in range(idx-1, -1, -1):
                if height[j] > max_left:
                    max_left = height[j]
            print("max_left: ", idx, max_left)
            
            max_right = float("-inf")
            for j in range(idx+1, n):
                if height[j] > max_right:
                    max_right = height[j]
            # print("max_right: ", idx, max_right)  

            water_trapped = min(max_left, max_right) - height[idx]
            if water_trapped > 0:
                total_water_trapped += water_trapped
                
        return total_water_trapped

print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))

# max_left = [-inf, 1]