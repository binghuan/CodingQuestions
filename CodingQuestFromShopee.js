// Coding Question is from Shopee
/*
    Q1: What is the correct way of creating an arrow function

    option A:   a() => {}
    option B:   const a() => {}
    option C:   const a = () => {}
    option D:   ()a => {}

    Answer: C
*/

/*
    Q2: What is the expected output of the following program?
    option A:   L
    option B:   h
    option C:   o
    option D:   undefined

    Answer: C
*/

(function Q2() {
    console.log('------------------------------------------------------------');
    console.log('Q2: What is the expected output of the following program?');
    var x = 'Lorem ipsum dolor sit amet';
    x[1] = 'h';
    console.log(x[1]);
})();

/*
    Q3: What will be the output sequence after executing the following code
    option A:   1 4 3 2
    option B:   1 2 3 4
    option C:   1 3 4 2
    
    Answer: C
*/
(function Q3() {
    console.log('------------------------------------------------------------');
    console.log('Q3: What will be the output sequence after executing the following code');

    function foo() {
        console.log(1)
        setTimeout(() => {
            console.log(2)
        }, 0)
        new Promise(() => console.log(3))
        console.log(4)
    }

    foo()
})();

/*
    Q4: What is the length of array A after executing the code below
    option A:   1
    option B:   6
    option C:   10  
    option D:   11

    Answer: D
*/
(function Q4() {
    console.log('------------------------------------------------------------');
    console.log('Q4: What is the length of array A after executing the code below');
    const A = [];
    A.push('a');
    A[10] = 'b';
    A[10] = undefined;
    A[5] = 'c';
    console.log("length of array A: ", A.length);
})();

/*
    Q5: Which of the following storage options cannot synchronize data between different browser tabs?
    option A:   Local storage
    option B:   Cookie
    option C:   Session storage
    option D:   IndexedDB

    Answer: session storage.
*/

/* 
    Q6: What is the value of number, after executing the code below
    option A:   20
    option B:   6
    option C:   2
    option D:   100

    Answer: A
*/

(function Q6() {
    console.log('------------------------------------------------------------');
    console.log('Q6: What is the value of number, after executing the code below');
    var operation = 2;
    var number = 10;
    switch (operation) {
        case 1:
            number = number + 10;
            break;
        case 2:
            number = number - 4;
        case 3:
            number = number / 3;
        case 4:
            number = number * 10;
            break;
    }
    console.log("number = ", number);
})();

/*
    Q7: Generate a valid URL from input parameters
    A simplified URL looks something as follows:
    ```text
    schmem://domain/path?query_param1=value1&query_param2=value2
    ```

    We have parameters of the URL with us as follows:
    ```json
    {
        scheme: <string>,   // [required]
        domain: <string>,   // [required]
        path: <string>,     //
        queryParam: <object>//
    }
    ```
    *note: path and queryParam are optional

    Your Task
    Implement a function, toURL 
    which can take the raw parameters and convert them to a URL string
*/

/**
 * Return a string from this function, which represents the URL
 */
console.log('------------------------------------------------------------');
console.log('Q7: Generate a valid URL from input parameters');
function toURL(params) {
    // write code here..
    console.log("INPUT:", params);

    let url = new URL(params);
    let urlObj = {
        scheme: url.protocol,
        domain: url.hostname,
        path: url.pathname,
        queryParam: url.search
    }
    console.log("OUTPUT:", urlObj);
    return urlObj
}
toURL("http://abc.com/path?query_param1=value1&query_param2=value2");

/*
    Q8: Sum of non-leaf nodes in a binary tree
    Given the root node of a binary tree, return the sum of all non-leaf nodes
 
    ## INPUT
    The root of binary tree. The definition
    ```javascript
        function TreeNode(val, left, right) {
            this.val = (val == undefined? 0: val)
        }
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    ```
    ## OUTPUT
    A number 
 
    Example 1: 
    input: 
    8
    |-----------|
    27          19
    |---|       |---|
    10  17      8   null
 
    output: 
    54
*/

(function Q8() {
    console.log('------------------------------------------------------------');
    console.log('Q8: Sum of non-leaf nodes in a binary tree');

    let result = 0;
    const solution = root => {

        if (root.left != null || root.right != null) {
            console.log("+", root.val)
            result += root.val;
        }

        if (root.left != null) {
            solution(root.left);
        }

        if (root.right != null) {
            solution(root.right);
        }
    }

    let input = {
        val: 8,
        left: {
            val: 27,
            left: {
                val: 10
            },
            right: {
                val: 17
            }
        },
        right: {
            val: 19,
            left: {
                val: 8
            }
        }
    }

    console.log("INPUT:", input);
    solution(input)
    console.log("OUTPUT:", result);

})();