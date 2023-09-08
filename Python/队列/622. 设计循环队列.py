# -*- codeing = utf-8 -*-
# @Time : 2023-9-6 16:14
# @Author : 刘永奇
# @File : 622. 设计循环队列.py
# @Software : PyCharm
class MyCircularQueue:

    def __init__(self, k: int):
        self.font = 0
        self.cnt = 0
        self.tail = 0
        self.k = k
        self.queue = [None]*k


    def enQueue(self, value: int) -> bool:
        if self.cnt == self.k:return False
        self.queue[self.tail] = value
        self.tail += 1
        self.cnt += 1
        if self.tail == self.k:
            self.tail = 0
        return True

    def deQueue(self) -> bool:
        if self.cnt == 0: return False
        self.font += 1
        self.cnt -= 1
        if self.font == self.k:
            self.font = 0
        return True

    def Front(self) -> int:
        if self.cnt == 0:return -1
        return self.queue[self.font]


    def Rear(self) -> int:
        if self.cnt == 0:return -1
        if self.tail == 0:
            return self.queue[self.k-1]
        return self.queue[self.tail - 1]


    def isEmpty(self) -> bool:
        return self.cnt == 0


    def isFull(self) -> bool:
        return self.cnt == self.k



# Your MyCircularQueue object will be instantiated and called as such:
# obj = MyCircularQueue(k)
# param_1 = obj.enQueue(value)
# param_2 = obj.deQueue()
# param_3 = obj.Front()
# param_4 = obj.Rear()
# param_5 = obj.isEmpty()
# param_6 = obj.isFull()