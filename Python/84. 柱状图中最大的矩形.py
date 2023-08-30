# -*- codeing = utf-8 -*-
# @Time : 2023-8-30 23:07
# @Author : 刘永奇
# @File : 84. 柱状图中最大的矩形.py
# @Software : PyCharm
class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        s = []
        l = [-1] * len(heights)
        r = [len(heights)] * len(heights)

        for i in range(len(heights)):
            while len(s) != 0 and heights[i] <= heights[s[-1]]:
                r[s[-1]] = i
                s.pop()
            if len(s) != 0:
                l[i] = s[-1]
            s.append(i)
        res = 0
        for i in range(len(heights)):
            res = max(res, (heights[i] * (r[i] - l[i] - 1)))
        return res
