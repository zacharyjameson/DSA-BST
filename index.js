class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    // If the tree is empty then this key being inserted is the root node of the tree
    if (this.key === null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      /* If the tree already exists, then start at the root, 
    and compare it to the key you want to insert.
    If the new key is less than the node's key 
    then the new node needs to live in the left-hand branch */
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        /* If the node has an existing left child, 
               then we recursively call the `insert` method 
               so the node is added further down the tree */
        this.left.insert(key, value);
      }
    } else {
      /* Similarly, if the new key is greater than the node's key 
           then you do the same thing, but on the right-hand side */
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    // If the item is found at the root then return that value
    if (this.ke == key) {
      return this.value;
    } 
    /* If the item you are looking for is less than the root 
           then follow the left child.
           If there is an existing left child, 
           then recursively check its left and/or right child
           until you find the item */
    else if (key < this.key && this.left) {
      return this.left.find(key);
    } 
    /* If the item you are looking for is greater than the root 
           then follow the right child.
           If there is an existing right child, 
           then recursively check its left and/or right child
           until you find the item */
    else if (key > this.key && this.right) {
      return this.right.find(key);
    }

    else {
        throw new Error('Key Error');
    }
  }

  remove(key){
      if(this.key == key) {
          if (this.left && this.right) {
              const successor = this.right._findMin();
              this.key = successor.key;
              this.value = successor.value;
              successor.remove(successor.key);
          }
          else if (this.left) {
              this._replaceWith(this.left);
          }
          else if(this.right){
              this._replaceWith(this.right);
          }
          else {
              this._replaceWith(null);
          }
      }
      else if (key < this.key && this.left) {
          this.left.remove(key);
      }
      else if (key > this.key && this.right) {
          this.right.remove(key);
      }
      else {
          throw new Error('Key Error');
      }
  }
}