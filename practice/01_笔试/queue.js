
function Queue() {
  // 定义属性
  this.items = [];
  // 定义方法
  Queue.prototype.PUSH = function (ele) {
    // 从队尾插入元素
    this.items.push(ele);
  }
  // 查看队头元素
  Queue.prototype.TOP = function () {
    if (this.items.length == 0) {
      return -1;
    }
    return this.items[0];
  }
  // 删除头元素
  Queue.prototype.POP = function () {
    if (this.items.length == 0) {
      return -1;
    }
    return this.items.shift();
  }
  // 返回队列包含的元素个数
  Queue.prototype.SIZE = function () {
    return this.items.length;
  }
  // 清空队列
  Queue.prototype.CLEAR = function () {
    this.items = [];
  }

  // toString()方法
  Queue.prototype.toString = function () {
    var str = '';
    for (var i = 0; i < this.items.length; i++) {
      str += this.items[i] + ' ';
    }
    return str;
  }
}

var queue = new Queue();
queue.PUSH(1);
queue.PUSH(2);
console.log(queue.toString());
console.log(queue.TOP())
console.log(queue.POP())
console.log(queue.TOP())
console.log(queue.POP())
console.log(queue.toString());
queue.CLEAR()
console.log(queue.SIZE())


