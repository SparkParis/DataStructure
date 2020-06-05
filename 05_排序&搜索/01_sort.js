function ArrayList() {
  // 封装属性
  this.array = [];

  // 封装方法
  // 插入
  ArrayList.prototype.insert = function (item) {
    this.array.push(item);
  }
  // toString
  ArrayList.prototype.toString = function () {
    return this.array.join('-');
  }
  // 1.冒泡排序
  ArrayList.prototype.bubbleSort = function () {
    for (var i = this.array.length - 1; i >= 0; i--) {
      // 根据i的次数比较循环到i位
      for (var j = 0; j < i; j++) {
        if (this.array[j] > this.array[j + 1]) {
          // 交换元素
          this.swap(j, j + 1);
        }
      }
    }
  }
  // 2.选择排序
  ArrayList.prototype.selectSort = function () {
    /*
    寻找最小元素的下标,和当前最小的元素放置的位置进行交换,把最小的元素始终放在最左侧
    */
    for (var i = 0; i < this.array.length - 1; i++) {
      var min = i;
      // 查找最小元素的下标值
      for (var j = min + 1; j < this.array.length; j++) {
        if (this.array[min] > this.array[j]) {
          min = j;
        }
      }
      // 将最小的元素依次放在最左侧
      this.swap(min, j);
    }
  }
  // 3.插入排序
  ArrayList.prototype.insertSort = function () {
    // 外层循环获取待插入节点
    for (var i = 1; i < this.array.length; i++) {
      var temp = this.array[i];
      //内层循环插入局部有序列表中( 不确定循环的次数,采用while循环)
      var j = i;
      while (temp < this.array[j - 1] && j > 0) {
        // 元素向后移动操作
        this.array[j] = this.array[j - 1];
        j--;
      }
      this.array[j] = temp;
    }
  }
  ArrayList.prototype.swap = function (m, n) {
    var temp = this.array[m];
    this.array[m] = this.array[n];
    this.array[n] = temp;
  }
  ArrayList.prototype.shellSort = function () {
    //根据长度计算增量
    var gap = Math.floor(this.array.length / 2);
    // 增量不断减小,大于0就继续排序
    while (gap > 0) {
      for (var i = gap; i < this.array.length; i++) {
        // 保存临时变量
        var j = i;
        temp = this.array[i];
        // 插入排序内部循环(不确定循环的次数采用while)
        while (temp < this.array[j - gap] && j > gap - 1) {
          this.array[j] = this.array[j - gap];
          j -= gap;
        }
        // 将选出的j位置值设置为temp
        this.array[j] = temp;
      }
      // 重新计算gap的值
      gap = Math.floor(gap / 2);
    }
  }
  // 快排,选择枢纽并放在倒数第二的位置
  /*
  left:第一个元素的下标
  right:最后一个元素的下标
  - 取出中间下标位置的元素
  - 将三个元素进行比较并交换位置
  - 将中间位置的元素放在right-1的位置
  */
  ArrayList.prototype.midpiovt = function (left, right) {
    //取出中间元素的位置
    var mid = Math.floor((left + right) / 2)

    // 比较三者的大小并交换位置
    if (this.array
    [left] > this.array[mid]) {
      this.swap(left, mid);
    }
    if (this.array[mid] > this.array[right]) {
      this.swap(mid, right);
    }
    if (this.array[left] > this.array[right]) {
      // 交换完成之后最大的元素已经放在最后面
      this.swap(left, right);
    }
    // 将中间的值放在倒数第二的为
    this.swap(right - 1, mid);
    // 返回枢纽
    return this.array[right - 1];
  }
  // 通过递归的方式实现快排
  ArrayList.prototype.quickSort = function () {
    this.quick(0, this.array.length - 1);
  }
  // 递归调用实现
  ArrayList.prototype.quick = function (left, right) {
    // 结束条件
    if (left >= right) {
      return;
    }
    // 获取枢纽
    var pivot = this.midpiovt(left, right);
    //设置变量保存移动的指针
    var i = left;
    var j = right - 1;
    // 移动位置并进行交换,这里设置死循环
    while (true) {
      while (this.array[++i] < pivot) { }
      while (this.array[--j] > pivot) { }
      // i<j则交换
      if (i < j) {
        this.swap(i, j);
      } else {
        break;//跳出循环,此时i指向的位置就是需要和枢纽交换的位置
      }
    }
    // 交换位置
    this.swap(i, right - 1);
    // 分而治之
    this.quick(left, i - 1);
    this.quick(i + 1, right);
  }


}
// 测试代码
var array = new ArrayList();
array.insert(39)
array.insert(1)
array.insert(5)
array.insert(34)
array.insert(38)

console.log(array.toString());
// array.bubbleSort();
// console.log('冒泡排序:' + array.toString());
// array.bubbleSort();
// console.log('选择排序:' + array.toString());
// array.insertSort();
// console.log('插入排序:' + array.toString());
// array.shellSort();
// console.log('希尔排序:' + array.toString());
array.quickSort();
console.log('快速排序:' + array.toString());


