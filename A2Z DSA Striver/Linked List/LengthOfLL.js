class Node {
  constructor(data, next = null) {
      this.data = data;
      this.next = next;
  }
}

// Function to calculate the length of a linked list
function lengthOfLinkedList(head) {
  let cnt = 0;
  let temp = head;
  
  // Traverse the linked list and count nodes
  while (temp !== null) {
      temp = temp.next;
      cnt++;
  }
  
  return cnt;
}

// Main function
function main() {
  const arr = [2, 5, 8, 7];
  
  // Create a linked list
  const head = new Node(arr[0]);
  head.next = new Node(arr[1]);
  head.next.next = new Node(arr[2]);
  head.next.next.next = new Node(arr[3]);
  
  // Print the length of the linked list
  console.log(lengthOfLinkedList(head));
}
main();