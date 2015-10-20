// // Given a Huffman tree and a string, encode that string into a new string
// // consisting only of 1s and 0s, using the code given by the tree.
var encodeString = function(input, huffmanTree) {
  var result = "";

  function search(node, char) {
    // termination case
    if (node.val.length === 1) {
      return;
    }
    // if left exists, and right doesnt contain, search left
    if (node.left.val && node.right.val.indexOf(char) === -1) {
      path.push(0);
      return search(node.left.val, char);
      // if right exists, and left doesnt contain, search right
    } else if (node.right.val && node.left.val.indexOf(char) === -1) {
      path.push(1);
      return search(node.right.val, char);
    }
  }

  for (var i = 0; i < input.length; i++) {
    var path = [];
    search(huffmanTree, input[i]);
    result += path.join('');
  }

  return result;
};

// // Given a Huffman tree and a string of 1s and 0s, decode that string into
// // a new, human-readable string, using the code given by the tree.
var decodeString = function(input, huffmanTree) {
  return "";
};

// Given a corpus of text, return a Huffman tree that represents the
// frequencies of characters in the corpus.
//
// You should use the `PriorityQueue` class that is provided in the
// file `priorityQueue.js`.  The relevant methods are .insert(key, val),
// which inserts a value with the given key into the queue, and
// .extract(), which returns the {key: key, val: val} pair with the lowest
// key priority.
//
// You may also use the `Tree` class that is provided in the file `misc.js`
// Some corpuses are included as the variables `lorumIpsum` and `declaration`.
var makeHuffmanTree = function(corpus) {
  return new Tree();
};

