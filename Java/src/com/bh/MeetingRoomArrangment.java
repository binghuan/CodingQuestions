package com.bh;

import java.util.ArrayList;
import java.util.List;


/**
 *
 * @author Dixen
 */

/*

	Question2 - Meeting room arrangement:
	We are thinking to arrange meeting room.
	Meeting room is always noisy, and you are thinking to separate each room users as possible as you can so that they dont feel uncomfortable.
	If they are facing each other, we will add unhappy point as 1.

	Input:
		What we can do here is based on given rooms and users, arrange room separately so people dont feel unconfortable.
		[row, column, users] -> unhappy point

		Ex 1: [2, 3, 6]				Ex 2: [3, 3, 8]
		user1	user3	user5		user1	user2	user3
		user2	user4	user6		user4		user5
		*2 Rows, 3 Colujmns, 6 users				user6	user7	user8
						*3 Rows, 3 Colujmns, 8 users

	Output:
		Ex 1: [2, 3, 6] -> 7				Ex 2: [3, 3, 8] -> 8

		user1	user3	user5		user1	user2	user3
		user2	user4	user6		user4		user5
						user6	user7	user8
		*2 Rows, 3 Colujmns, 6 users
						*3 Rows, 3 Colujmns, 8 users

	Input Data:
		you can use this data as input to show output
		https://drive.google.com/open?id=1qWN57M46rUuik6mLy4Pf8XaBcOjrG6Q7

		Your program in repl.it has to show output right away once we press the 'run' button
		so either putting given data into code or using stdin in repl are fine


	*Reference* Expected result:
		Here is expected answer from above data: Please resolve this with your program
		[5,2,8]-> 7 [3,5,14]-> 18 [1,16,1]-> 0 [3,5,1]-> 0 [8,2,12]-> 10 [16,1,1]-> 0 [3,3,6]-> 3 [2,6,12]-> 16 [15,1,0]-> 0 [5,3,7]-> 0 [4,3,5]-> 0 [3,5,11]-> 8 [7,2,13]-> 16 [15,1,6]-> 0 [15,1,15]-> 14 [4,4,9]-> 2 [5,3,8]-> 0 [3,5,6]-> 0 [16,1,7]-> 0 [1,15,7]-> 0 [4,3,12]-> 17 [5,3,13]-> 14 [2,4,5]-> 2 [5,3,5]-> 0 [16,1,16]-> 15 [2,5,8]-> 7 [5,3,4]-> 0 [5,3,10]-> 6 [4,4,7]-> 0 [3,5,9]-> 3 [4,2,2]-> 0 [4,4,15]-> 20 [2,2,4]-> 4 [5,3,11]-> 8 [4,4,8]-> 0 [1,16,9]-> 1 [4,4,16]-> 24 [1,15,6]-> 0 [15,1,8]-> 0 [5,3,6]-> 0 [16,1,9]-> 1 [3,5,15]-> 22 [1,15,1]-> 0 [1,15,0]-> 0 [2,5,9]-> 10 [3,5,10]-> 6 [1,15,15]-> 14 [3,2,0]-> 0 [5,3,2]-> 0 [5,3,1]-> 0 [5,2,4]-> 0 [3,5,4]-> 0 [2,7,13]-> 16 [3,3,0]-> 0 [7,2,11]-> 10 [4,4,0]-> 0 [1,1,0]-> 0 [2,6,9]-> 7 [3,5,3]-> 0 [5,3,15]-> 22 [5,2,6]-> 2 [3,4,12]-> 17 [2,3,6]-> 7 [1,1,1]-> 0 [15,1,1]-> 0 [1,16,16]-> 15 [2,2,2]-> 0 [3,3,9]-> 12 [16,1,8]-> 0 [9,1,6]-> 2 [5,3,12]-> 11 [2,2,3]-> 2 [3,5,7]-> 0 [7,2,0]-> 0 [4,3,6]-> 0 [2,3,4]-> 2 [1,15,8]-> 0 [16,1,0]-> 0 [5,3,9]-> 3 [15,1,7]-> 0 [2,4,6]-> 4 [1,16,7]-> 0 [3,5,12]-> 11 [1,16,8]-> 0 [4,4,1]-> 0 [3,5,0]-> 0 [3,5,8]-> 0 [1,16,0]-> 0 [5,3,3]-> 0 [5,3,0]-> 0 [1,13,9]-> 4 [3,5,2]-> 0 [1,9,6]-> 2 [6,2,12]-> 16 [4,3,8]-> 4 [3,5,5]-> 0 [5,3,14]-> 18 [4,3,7]-> 2 [6,2,4]-> 0 [3,5,1]-> 0

 */


public class MeetingRoomArrangment {

    //## HOW TO RUN
    // javac com/bh/Test.java ; java com.bh.Test

    // ## Test



    /**
     * @param args the command line arguments
     */

    private final static boolean DBG = true;

    public static void main(String[] args) {

        String testCaseString = "[5,2,8]-> 7 [3,5,14]-> 18 [1,16,1]-> 0 [3,5,1]-> 0 [8,2,12]-> 10 [16,1,1]-> 0 [3,3,6]-> 3 [2,6,12]-> 16 [15,1,0]-> 0 [5,3,7]-> 0 [4,3,5]-> 0 [3,5,11]-> 8 [7,2,13]-> 16 [15,1,6]-> 0 [15,1,15]-> 14 [4,4,9]-> 2 [5,3,8]-> 0 [3,5,6]-> 0 [16,1,7]-> 0 [1,15,7]-> 0 [4,3,12]-> 17 [5,3,13]-> 14 [2,4,5]-> 2 [5,3,5]-> 0 [16,1,16]-> 15 [2,5,8]-> 7 [5,3,4]-> 0 [5,3,10]-> 6 [4,4,7]-> 0 [3,5,9]-> 3 [4,2,2]-> 0 [4,4,15]-> 20 [2,2,4]-> 4 [5,3,11]-> 8 [4,4,8]-> 0 [1,16,9]-> 1 [4,4,16]-> 24 [1,15,6]-> 0 [15,1,8]-> 0 [5,3,6]-> 0 [16,1,9]-> 1 [3,5,15]-> 22 [1,15,1]-> 0 [1,15,0]-> 0 [2,5,9]-> 10 [3,5,10]-> 6 [1,15,15]-> 14 [3,2,0]-> 0 [5,3,2]-> 0 [5,3,1]-> 0 [5,2,4]-> 0 [3,5,4]-> 0 [2,7,13]-> 16 [3,3,0]-> 0 [7,2,11]-> 10 [4,4,0]-> 0 [1,1,0]-> 0 [2,6,9]-> 7 [3,5,3]-> 0 [5,3,15]-> 22 [5,2,6]-> 2 [3,4,12]-> 17 [2,3,6]-> 7 [1,1,1]-> 0 [15,1,1]-> 0 [1,16,16]-> 15 [2,2,2]-> 0 [3,3,9]-> 12 [16,1,8]-> 0 [9,1,6]-> 2 [5,3,12]-> 11 [2,2,3]-> 2 [3,5,7]-> 0 [7,2,0]-> 0 [4,3,6]-> 0 [2,3,4]-> 2 [1,15,8]-> 0 [16,1,0]-> 0 [5,3,9]-> 3 [15,1,7]-> 0 [2,4,6]-> 4 [1,16,7]-> 0 [3,5,12]-> 11 [1,16,8]-> 0 [4,4,1]-> 0 [3,5,0]-> 0 [3,5,8]-> 0 [1,16,0]-> 0 [5,3,3]-> 0 [5,3,0]-> 0 [1,13,9]-> 4 [3,5,2]-> 0 [1,9,6]-> 2 [6,2,12]-> 16 [4,3,8]-> 4 [3,5,5]-> 0 [5,3,14]-> 18 [4,3,7]-> 2 [6,2,4]-> 0 [3,5,1]-> 0";
        String[] testItems = testCaseString.split(" ");
        int totalTestCases = testItems.length / 2;
        int counter = 1;
        for(int i =0; i< testItems.length ; i++) {
            int expectedAnswer = Integer.parseInt(testItems[i + 1]);

            System.out.println("<!-- RUN TEST CASE #" + counter + "/" + totalTestCases + "--------------------------->");
            System.out.println("@@@@@ Data for Testing: " + testItems[i] + testItems[i + 1]);
            String[] items = testItems[i].replace("[", "").replace("]", "").split(",");
            int answer = getMinArrange(Integer.parseInt(items[0]),
                    Integer.parseInt(items[1]),
                    Integer.parseInt(items[2].replace("->", ""))
            );
            if (expectedAnswer != answer) {
                System.out.println("X_X Wrong Answer, expectedAnswer:" + expectedAnswer + ", But My Answer is: " + answer);
                break;
            } else {
                System.out.println("^_^b ! ~ OK");
            }
            ++i;

            counter += 1;

        }
    }

    public static int getMinArrange(int m, int n, int people) {
        int[][] seats = new int[m][n];
        List<Integer[]> so = new ArrayList<>();
        for (int i=0; i<m; i++) {
            for (int j=0; j<n; j++) {
                int total = 4;
                if (i-1 < 0) total--;
                if (i+1 >= m) total--;
                if (j-1 < 0) total--;
                if (j+1 >= n) total--;
                seats[i][j] = total;
                so.add(new Integer[]{total, i, j});
            }
        }
        for (int i=0; i<m*n-people; i++) { //要拿掉的部分
            int max = 0;
            int mX = 0;
            int mY = 0;
            for (int j=0; j<m; j++) {
                for (int k=0; k<n; k++) {
                    if (seats[j][k] > max) {
                        max = seats[j][k];
                        mX = j;
                        mY = k;
                    }
                }
            }
            seats[mX][mY] = 0;
            if (mX-1 >=0 && seats[mX-1][mY]>0) seats[mX-1][mY]--;
            if (mX+1 < m && seats[mX+1][mY]>0) seats[mX+1][mY]--;
            if (mY-1 >=0 && seats[mX][mY-1]>0) seats[mX][mY-1]--;
            if (mY+1 < n && seats[mX][mY+1]>0) seats[mX][mY+1]--;
        }
        int sum = 0;
        for (int i=0; i<m; i++) {
            for (int j=0; j<n; j++) {
                sum += seats[i][j];
            }
        }
        return sum/2;
    }

}
