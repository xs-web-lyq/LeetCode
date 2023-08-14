# -*- codeing = utf-8 -*-
# @Time : 2023-8-14 21:27
# @Author : 刘永奇
# @File : 150. 逆波兰表达式求值.py
# @Software : PyCharm
class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        l = len(tokens)
        h = {'+', '-', '*', '/'}
        s = []
        for i in range(l):
            if (tokens[i] not in h):
                stack.append(int(tokens[i]))
                s.append(tokens[i])
            else:
                match tokens[i]:
                    case '-':
                        b = stack.pop()
                        a = stack.pop()
                        c = a - b
                        stack.append(c)
                        continue
                    case '+':
                        b = stack.pop()
                        a = stack.pop()
                        c = a + b
                        stack.append(c)
                        continue
                    case '/':
                        b = stack.pop()
                        a = stack.pop()
                        c = int(a / float(b))
                        stack.append(c)
                        continue
                    case '*':
                        b = stack.pop()
                        a = stack.pop()
                        c = a * b
                        stack.append(c)
                        continue
        return stack[0]

