const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.x = null;
  }

  root() {
    return this.x;
  }

  add(data) {
    this.x = addNode(this.x, data);
    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (node.data > data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }
  has(data) {
    return findInTree(this.x, data);
    function findInTree(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (node.data > data) {
        return findInTree(node.left, data);
      } else {
        return findInTree(node.right, data);
      }
    }
  }
  find(data) {
    return searchInTree(this.x, data);
    function searchInTree(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (node.data > data) {
        return searchInTree(node.left, data);
      } else {
        return searchInTree(node.right, data);
      }
    }
  }
  remove(data) {
    this.x = removeNode(this.x, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }
  min() {
    if (!this.x) {
      return null;
    }

    let node = this.x;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }
  max() {
    if (!this.x) {
      return null;
    }

    let node = this.x;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}
module.exports = {
  BinarySearchTree,
};