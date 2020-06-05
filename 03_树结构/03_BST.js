
// 封装搜索二叉树
function BinarySearchTree() {
  // 定义节点
  function Node(key) {
    this.key = key;
    this.left = null;
    this.right - null;
  }
  // 定义属性
  this.root = null;
  // 定义方法
  // 1 insert(key):向外暴露的插入方法
  BinarySearchTree.prototype.insert = function (key) {
    // (1)根据key创建对应的方法
    var newNode = new Node(key);
    // (2)判断根节点是否存在
    if (this.root == null) {
      this.root = newNode;
    } else {
      //(3)递归调用查找
      this.insertNode(this.root, newNode);
    }
  }
  // 递归调用查找位置并插入节点
  /*
  - newNode:待插入的节点
  - node:需要比较的节点
  */
  BinarySearchTree.prototype.insertNode = function (node, newNode) {
    // 向左子树插入节点
    if (node.key > newNode.key) {
      // 判断是否为空
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      //向右子树插入节点
      // 判断是否为空
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // 2.获取最大值和最小值
  /*
  最小值:寻找二叉树中的最左边的节点,直到为null,返回上一个节点key
  最大值:寻找二叉树中最右边的节点,直到为null,返回上一个节点的key
  */
  BinarySearchTree.prototype.max = function () {
    var node = this.root;
    var key = null;
    while (node) {
      key = node.key;
      node = node.right;
    }
    // 找到返回key
    return key;
  }
  BinarySearchTree.prototype.min = function () {
    var node = this.root;
    var key = null;
    while (node) {
      key = node.key;
      node = node.left;
    }
    return key;
  }
  // 搜索特定的值
  BinarySearchTree.prototype.search = function (key) {
    // 这里采用非递归的方式实现
    var node = this.root;
    //判断条件,node不为null的时候
    while (node) {
      if (key < node.key) {
        node = node.left;
      } else if (key > node.key) {
        node = node.right;
      } else {
        // 相等返回true
        return true;
      }
    }
    // 找不到返回false
    return false;
  }

  // 3.删除操作
  // 寻找后继节点
  BinarySearchTree.prototype.getsuccessor = function (delNode) {
    // 1.使用变量保存临时的节点
    var successorParent = delNode
    var successor = delNode
    var current = delNode.right // 要从右子树开始找
    // 2.寻找节点
    while (current != null) {
      successorParent = successor
      successor = current
      current = current.left
    }
    // 3.如果是删除图中15的情况, 还需要如下代码
    if (successor != delNode.right) {
      successorParent.left = successorParent.right
      successor.right = delNode.right
    }
    return successor;
  }

  BinarySearchTree.prototype.remove = function (key) {
    // 1.定义临时保存的变量
    var current = this.root
    var parent = this.root
    var isLeftChild = true
    if (current === null) return false
    // 2.开始查找节点
    while (current.key != key) {
      parent = current;
      if (key < current.key) {
        isLeftChild = true;
        current = current.left;
      } else {
        isLeftChild = false;
        current = current.right;
      }
      // 如果发现current已经指向null, 那么说明没有找到要删除的数据
      if (current === null) {
        return false;
      }
    }

    // 3.删除的结点是叶结点
    if (current.left === null && current.right === null) {
      if (current == this.root) {
        this.root == null
      } else if (isLeftChild) {
        parent.left = null
      } else {
        parent.right = null
      }
    }
    // 4.删除有一个子节点的节点
    else if (current.right === null) {
      if (current == this.root) {
        this.root = current.left
      } else if (isLeftChild) {
        parent.left = current.left
      } else {
        parent.right = current.left
      }
    } else if (current.left === null) {
      if (current == this.root) {
        this.root = current.right
      } else if (isLeftChild) {
        parent.left = current.right
      } else {
        parent.right = current.right
      }
    }
    // 5.删除有两个节点的节点
    else {
      // 1.获取后继节点
      var successor = this.getsuccessor(current);
      // 2.判断是否是根节点
      if (current == this.root) {
        this.root = successor
      } else if (isLeftChild) {
        parent.left = successor
      } else {
        parent.right = successor
      }
      // 3.将删除节点的左子树赋值给successor
      successor.left = current.left
    }
    return true
  }
  // 

  // 4.遍历操作
  // 5.先序遍历
  /*
  这里的handle是一个句柄(回调函数),在调用方法的时候调用,这里通过该回调函数输出先序遍历的结果
  */
  BinarySearchTree.prototype.preorderTraverse = function (handle) {
    // 先序遍历,先访问根节点
    this.preorderTraverseNode(this.root, handle);
  }
  // 通过递归先序遍历节点
  BinarySearchTree.prototype.preorderTraverseNode = function (node, handle) {

    if (node) {
      handle(node.key);
      // 先序遍历左节点
      this.preorderTraverseNode(node.left, handle);
      // 先序遍历左节点
      this.preorderTraverseNode(node.right, handle);
    }
  }
  // 6.中序遍历
  BinarySearchTree.prototype.inOrdertraverse = function (handle) {
    this.inOrdertraverseNode(this.root, handle);
  }
  BinarySearchTree.prototype.inOrdertraverseNode = function (node, handle) {
    if (node) {
      this.inOrdertraverseNode(node.left, handle);
      handle(node.key);
      this.inOrdertraverseNode(node.right, handle);
    }
  }
  // 7.后序遍历
  BinarySearchTree.prototype.postOrdertraverse = function (handle) {
    this.postOrdertraverseNode(this.root, handle);
  }
  BinarySearchTree.prototype.postOrdertraverseNode = function (node, handle) {
    if (node) {
      this.postOrdertraverseNode(node.left, handle);
      this.postOrdertraverseNode(node.right, handle);
      handle(node.key);
    }
  }

}
// 测试
var bst = new BinarySearchTree();
bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(25);
bst.insert(6);
bst.insert(18);

var str = '';
// 先序遍历的结果
bst.preorderTraverse(function (key) {
  str += key + ' ';
})
console.log('先序遍历:' + str);

var str = '';
// 中序遍历的结果
bst.inOrdertraverse(function (key) {
  str += key + ' ';
})
console.log('中序遍历:' + str);
var str = '';
// 后序遍历的结果
bst.postOrdertraverse(function (key) {
  str += key + ' ';
})
console.log('后序遍历:' + str);

// 返回最值
console.log('最大值:' + bst.max());
console.log('最小值:' + bst.min());

// 查找特定的值
console.log(bst.search(18));


// 测试删除代码
bst.remove(7);
bst.remove(10);
bst.remove(10);
var str = '';
// 后序遍历的结果
bst.postOrdertraverse(function (key) {
  str += key + ' ';
})
console.log('后序遍历:' + str);
