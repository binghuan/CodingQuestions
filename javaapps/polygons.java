package javaapps;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 *
 * @author binghuan
 */
public class polygons {

/*
## Polygons.

Identify whether four sides (given by four integres) can form a square, a rectangle or neither.

### Input: 
You will receive an list of strings, each containing four space-separated integers, which represent the length of the sides of a polygon. The input lines will follow the "A B C D" order as in the following representation:

|-------A--------|
|                |
|                |
D                B
|                |
|                |
|-------C--------|

### Output: 
A single line which contains 3 space-separated integers, representing the number of squares, number of rectangles and number of other polygons wit 4 sides. 
Note that squares shouldn't be cunted as rectangles. Invalid polygons should also be counted as 'other polygons'. 

### Constraints:
The four integers representing the sides will be such that: -2000 <= X <= 2000. 
(Where X representx the integer)

### Sample Input: 
    36 30 36 30
    15 15 15 15
    46 96 90 100
    86 86 86 86
    100 200 100 200
    -100 200 -100 200
    
### Sample Output
2 2 2

*/
    
    /**
     * @param args the command line arguments
     */
    
    private final static boolean DBG = true;
    
    public static List<Integer> distinctArray(Integer[] arr){
         
        List<Integer> retList = new ArrayList<>();

        boolean isDistinct = false;
        for(int i=0;i<arr.length;i++){
            isDistinct = false;
            for(int j=0;j<retList.size();j++){
                System.out.println("" + i + "Compare: " + arr[i] + " and " + retList.get(j));
                if(Objects.equals(retList.get(j), arr[i])){
                    isDistinct = true;
                    break;
                }
            }
            if(!isDistinct){
                retList.add(arr[i]);
                System.out.println(i + "Add " + arr[i]);
            }
        }
        
        return retList;
    }

    public static void main(String[] args) {
        
        Integer[][] inputs = {{36, 30, 36, 30},{15, 15, 15, 15},{46,96,90,100},
            {86, 86, 86, 86}, {100,200,100, 200},{-100,200,-100,200}};
        
        if(DBG)System.out.println("Input: " + inputs.length);    
        
        // 1. check if square. 
        
        int squareCount = 0;
        int rectangleCount = 0;
        int others = 0;
        
        for(int i =0; i< inputs.length; i++) {
            
            Integer[] temp = inputs[i];
            if( temp[0] == temp[1] && 
                temp[1] == temp[2] && 
                temp[2]== temp[3] && 
                temp[3]== temp[0]) {
                
                if(DBG)System.out.println("It's square: " + temp[0] + " " + temp[1]+ " " + temp[2]+ " " + temp[3]);    
                squareCount += 1;
                
            } else {
             
                List<Integer> temp2 = distinctArray(temp);
                if(DBG)System.out.println("size: "+ temp2.size() + " - " +  temp[0] + " " + temp[1]+ " " + temp[2]+ " " + temp[3]);    
                
                    if(temp2.size() == 2
                            && temp[0] > 0 && temp[1] > 0 && temp[2] > 0 && temp[3] > 0 ) {
                        rectangleCount += 1;
                        if(DBG)System.out.println("It's rectangle: " + temp[0] + " " + temp[1]+ " " + temp[2]+ " " + temp[3]);    
                    } else {
                        if(DBG)System.out.println("It's other: " + temp[0] + " " + temp[1]+ " " + temp[2]+ " " + temp[3]);    
                        others +=1;
                    }
            }
            
            
        }
        
        System.out.println("Output: ==========>");
        System.out.println(squareCount + " " + rectangleCount + " " + others);
    }

}

