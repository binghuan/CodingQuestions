/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {


    let node = l1;

    let newNodeValues = [];
    let valueToPlus = 0;
    while (node != null || valueToPlus != 0) {

        let num1 = null;
        let num2 = null;
        let sum = 0;
        if (l1 != null) {
            num1 = l1.val;
            sum += num1;
            l1 = l1.next;
        }
        if (l2 != null) {
            num2 = l2.val;
            sum += num2;
            l2 = l2.next;
        }

        sum += valueToPlus;
        valueToPlus = 0;

        console.log(num1, "+", num2, "=", sum);

        if (sum >= 10) {

            let a = sum / 10;
            console.log(">= 10 sum=", sum);
            if (a >= 1) {
                let b = parseInt(a.toString().split(".")[0]);
                console.log("b=", b);
                sum = sum - 10 * b;
                console.log("sum=", sum);
                valueToPlus += b;
            }
        }

        if (num1 != null || num2 != null || sum > 0) {
            newNodeValues.push(sum);
        }

        if (l1 != null) {
            node = l1;
        } else if (l2 != null) {
            node = l2;
        }

        if (num1 == null && num2 == null) {
            break;
        }
    }

    console.log("final valueToPlus:", valueToPlus);


    console.log("OUTPUT:", newNodeValues);
    newNodeValues = newNodeValues.reverse();

    function genNode() {
        let value = newNodeValues.pop();
        let node = null;
        if (value != null) {
            node = {
                val: value,
                next: genNode()
            }
        }

        return node;
    }

    let newNode = genNode();

    return newNode;

};