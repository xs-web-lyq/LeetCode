# -*- codeing = utf-8 -*-
# @Time : 2023-9-9 15:35
# @Author : 刘永奇
# @File : 堆.py
# @Software : PyCharm

class  dui:
    def __init__(self,k):
        self.queue = [-1]*k
        self.cnt = 0
        self.count = 0
    def pop(self):
        if self.size() == 0:
            return
        self.queue[0],self.queue[self.cnt-1] = self.queue[self.cnt-1],self.queue[0]
        self.cnt -= 1
        self.down(0)
        return
    def down(self,ind):
        n = self.cnt - 1
        while ind * 2 + 1 <= n:
            temp = ind
            if self.queue[temp] < self.queue[ind * 2 + 1]:
                temp = ind * 2 + 1
            if ind * 2 + 2 <= n and self.queue[temp] < self.queue[ind * 2 + 2]:
                temp = ind * 2 + 2
            if temp == ind: break
            self.queue[temp],self.queue[ind] = self.queue[ind],self.queue[temp]
            ind = temp
    def up(self,ind):
        while ind and self.queue[(ind - 1) // 2] < self.queue[ind]:
            self.queue[(ind - 1) // 2], self.queue[ind] = self.queue[ind],self.queue[(ind - 1) // 2]
            ind = (ind - 1)//2
        self.count += 1
    def push(self,val):
        self.queue[self.cnt] = val
        self.cnt += 1
        self.up(self.cnt - 1)
        return
    def top(self):
        return self.queue[0]
    def size(self):
        return self.cnt
    def output(self):
        print("heap:")
        for i in range(self.count):
            print(self.queue[i],'')
k = int(input())
queue = dui(k)
n = int(input())
while n:
    queue.push(n)
    queue.output()
    n = int(input())
queue.pop()
queue.pop()
queue.output()


