function hasCircle(head) {
  // fast slow pointer
  let fast = head
  let slow = head

  while (fast && slow) {
    fast = fast.next?.next
    slow = slow.next

    if (fast === slow) {
      return true
    }
  }

  return false
}


// using a set 
function hasCircle(head) {
  // kepp track of the visited node
  const visited = new Set()

  let p = head

  while (p) {
    if (visited.has(p)) {
      return true
    }

    visited.add(p)
    p = p.next
  }

  return false
}


/* store visited property with nodes*/
function hasCircle(head) {
  let hasCircle = false;
  while(head !== null) {
    head.visited = true;
    if(head.next && head.next.visited) {
      hasCircle = true;
      break;
    }
    head = head.next;
  }
  return hasCircle;
}
