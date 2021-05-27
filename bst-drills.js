const BinarySearchTree = require("./index");

function main() {
  const BST = new BinarySearchTree();

  BST.insert("E");
  BST.insert("A");
  BST.insert("S");
  BST.insert("Y");
  BST.insert("Q");
  BST.insert("U");
  BST.insert("E");
  BST.insert("S");
  BST.insert("T");
  BST.insert("I");
  BST.insert("O");
  BST.insert("N");

  return BST;
}

main();
