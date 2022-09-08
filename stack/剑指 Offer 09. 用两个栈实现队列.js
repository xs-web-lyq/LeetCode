var CQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stack2.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {

    if(this.stack1.length) return this.stack1.pop();
    else if(!this.stack2.length) return -1
    else {
        while(this.stack2.length){
            this.stack1.push(this.stack2.pop())
        }
        return this.stack1.pop()
    }
    
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */