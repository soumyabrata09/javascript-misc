/**
 * Given an integer array arr[] of size N. Let P is the product of all elements in the array. Return 1 if P is positive, 0 if P is equal to 0, and -1 if P is negative.
 *
 * Examples:
 * 
 * Input: arr[] = [-1, -2, -3, -4, 3, 2, 1]
 * Output: 1
 * Explanation: The product of all elements in the array is 144 which is positive.
 * 
 * 
 * 
 * Input: arr[] = [1, 9, 0, 5, -7]
 * Output: 0
 * Explanation: The product of all elements in the array is 0.
 */

import { createInterface } from "readline";

const reader = createInterface({
    input: process.stdin,
    output: process.stdout
});

export class SignProductArray {
    static getSign(arr) {
        let flag = 1;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) {
                return 0;
            }
            if (arr[i] < 0) {
                flag = -flag;
            }
        }

        return flag;
    }
}

reader.question('Enter comma separated array values: ', (input) => {
    const arr = input.split(',').map(Number);
    const sign = SignProductArray.getSign(arr);

    if (sign > 0) {
        console.info(`Sign of the product is +ve: ${sign}`);
    } else if (sign < 0) {
        console.info(`Sign ofthe product is -ve: ${sign}`);
    } else {
        console.info(`No Sign: ${sign}`);
    }

    reader.close();
});