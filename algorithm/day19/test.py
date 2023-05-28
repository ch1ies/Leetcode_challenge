
class Solution:
    def lengthOfLIS(self, nums) -> int:
        if not nums:
            return 0
        dp = []
        for i in range(len(nums)):
            dp.append(1)
            print('dp', dp)
            print('i', i)
            for j in range(i):
                if nums[i] > nums[j]:
                    dp[i] = max(dp[i], dp[j] + 1)
        print('dp1', dp)
        return max(dp)
    

l = Solution()

res = l.lengthOfLIS([10,9,2,5,3,7,101,18])
print(res)