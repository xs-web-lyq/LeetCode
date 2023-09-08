# -*- codeing = utf-8 -*-
# @Time : 2023-9-8 11:00
# @Author : 刘永奇
# @File : 641. 设计循环双端队列.py
# @Software : PyCharm
class MyCircularDeque:

    def __init__(self, k: int):
        self.k = k
        self.queue = [-1]*k
        self.cnt = 0
        self.font = 0
        self.tail = 0


    def insertFront(self, value: int) -> bool:
        if self.isFull():return False
        self.font = (self.font - 1 + self.k) % self.k
        self.queue[self.font] = value
        self.cnt += 1
        return True

    def insertLast(self, value: int) -> bool:
        if self.isFull():return False
        self.queue[self.tail] = value
        self.tail = (self.tail + 1)%self.k
        self.cnt += 1
        return True

    def deleteFront(self) -> bool:
        if self.isEmpty():return False
        self.font = (self.font + 1)%self.k
        self.cnt -= 1
        return True

    def deleteLast(self) -> bool:
        if self.isEmpty():return False
        self.tail = (self.tail - 1 + self.k)%self.k
        self.cnt -= 1
        return True

    def getFront(self) -> int:
        if self.isEmpty():return -1
        return self.queue[self.font]


    def getRear(self) -> int:
        if self.isEmpty():return -1
        return self.queue[(self.tail - 1 + self.k) % self.k]



    def isEmpty(self) -> bool:
        return self.cnt == 0

    def isFull(self) -> bool:
        return self.cnt == self.k



# Your MyCircularDeque object will be instantiated and called as such:
# obj = MyCircularDeque(k)
# param_1 = obj.insertFront(value)
# param_2 = obj.insertLast(value)
# param_3 = obj.deleteFront()
# param_4 = obj.deleteLast()
# param_5 = obj.getFront()
# param_6 = obj.getRear()
# param_7 = obj.isEmpty()
# param_8 = obj.isFull()