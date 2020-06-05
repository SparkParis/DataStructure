var BinaryTree = function () {

  var Node = function (key) {//节点结构
    this.left = null
    this.right = null
    this.key = key
  }

  var root = null //根节点

  var insertNode = function (node, newNode) {
    if (node.key > newNode.key) {
      if (node.left === null) {
        node.left = newNode
        return
      } else {
        insertNode(node.left, newNode)
      }
    } else if (node.key <= newNode.key) {
      if (node.right === null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
  }

  this.insert = function (node) {
    var newNode = new Node(node)
    if (root === null) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }

  var inOrderTraverseNode = function (node, callback) {//中序遍历
    if (node !== null) {
      inOrderTraverseNode(node.left)
      callback(node.key);
      inOrderTraverseNode(node.right)
    }
  }



  var preOrderTraverseNode = function (node, callback) {//前序遍历
    if (node !== null) {
      callback(node.key);
      preOrderTraverseNode(node.left)
      preOrderTraverseNode(node.right)
    }
  }



  var afterOrderTraversNode = function (node, callback) {//后序遍历
    if (node !== null) {
      afterOrderTraversNode(node.left)
      afterOrderTraversNode(node.right)
      callback(node.key);
    }
  }

  var Max = function (node) {//最大值
    if (node.right !== null) {
      maxNum = Max(node.right)
    } else {
      return node.key
    }
    return maxNum
  }

  var Min = function (node) {//最小值
    if (node.left !== null) {
      minNum = Min(node.left)
    } else {
      return node.key
    }
    return minNum
  }

  var Search = function (node, key) {//寻找指定值

    if (node.key === key) {
      return true
    } else {
      if (key < node.key && node.left != null) {
        return Search(node.left, key)
      } else if (key > node.key && node.left != null) {
        return Search(node.right, key)
      } else {
        return false
      }
    }
  }
  var finMinNode = function (node) {
    while (node && node.left !== null) {
      node = node.left
    }
    return node
  }
  var Remove = function (node, key) {//删除指定的节点
    if (node.key === key) {
      if (node.left === null && node.right === null) {
        node = null
        return node
      } else if (node.left !== null && node.right === null) {
        node = node.left
        return node
      } else if (node.left === null && node.right !== null) {
        node = node.right
        return node
      } else if (node.left !== null && node.right !== null) {
        var minNode = finMinNode(node.right)
        node.key = minNode.key
        node.right = Remove(node.right, minNode.key)
        return node
      }
    } else {
      if (key > node.key) {
        node.right = Remove(node.right, key)
        return node
      } else if (key < node.key) {
        node.left = Remove(node.left, key)
        return node
      }
    }
  }

  this.inOrderTraverse = function (callback) {//中序遍历接口
    console.log(callback)
    inOrderTraverseNode(root, callback)
  }


  this.preOrderTraverse = function (callback) {//前序遍历接口
    preOrderTraverseNode(root, callback)
  }

  this.afterOrderTravers = function (callback) {//后续遍历接口
    afterOrderTraversNode(root, callback)
  }

  this.max = function () {//最大值接口
    return Max(root)
  }

  this.min = function () {//最小值接口
    return Min(root)
  }

  this.search = function (key) {//寻找指定值接口
    return Search(root, key)
  }

  this.remove = function (key) {//删除指点节点接口
    Remove(root, key)
  }
}

var nodes = [2, 13, 6, 10, 18, 12, 0, 12, 16, 89, 55, 66, 100]
// 
// var binaryTree = new BinaryTree()
// nodes.forEach((item) => {
//   binaryTree.insert(item)
// })
var str = '';
var callback = function (item) {
  str += item + ' ';
}
//binaryTree.inOrderTraverse(callback)//中序遍历

//binaryTree.preOrderTraverse(callback)//前序遍历

//binaryTree.afterOrderTravers(callback)//后序遍历

//console.log(binaryTree.max())//寻找最大值

//console.log(binaryTree.min())//寻找最小值

//console.log(binaryTree.search(100))//寻找指定值

binaryTree.remove(12)
binaryTree.inOrderTraverse(callback)