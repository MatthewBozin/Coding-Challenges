// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const addTwo = (l1, l2) => {
    //in this variable, we track if a value needs to be carried over
    let carry = 0

    //create a variable to hold our previous linked list node
    let previousNode = new ListNode()

    //set a head node that will not be changed or reassigned
    const headNode = previousNode

    //this while loop traverses both linked lists while one of them isn't null
    //OR if carry is 1. this allows for the edge case where there is a carry value after both lists are done
    while(l1 || l2 || carry) {
        //by setting the vals to 0 as default, we handle the case where the lists are different length, aka l1 or l2 would be null
        let val1 = 0
        let val2 = 0
        //if l1 exists
        if (l1) {
            //set val1 to l1
            val1 = l1.val
            //move to next element of the linked list
            l1 = l1.next
        }
        if (l2) {
            val2 = l2.val
            l2 = l2.next
        }

        //adds in carry from last iteration
        const sum = val1 + val2 + carry

        //sets up carry for next iteration
        carry = sum > 9 ? 1 : 0

        //calculate digit
        const digit = sum % 10

        //create a new linked list node to hold our digit
        const currentNode = new ListNode(digit)

        //add currentNode as next value to linked list
        previousNode.next = currentNode

        //set currentNode to be previousNode of next iteration
        previousNode = currentNode
    }

    //our return is the newly created linked list, starting with headNode  
    return headNode.next
}