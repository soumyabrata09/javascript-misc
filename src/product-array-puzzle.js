/**
 * The Product Array Puzzle requires constructing an output array such that each element at index i is the product of all elements in the input array except the one at i. The challenge is to do this efficiently, ideally without using division, and in linear time.
 *
 * Example:
 *
 * Input: [10, 3, 5,[6][2]
 * Output: `[180, 600, 360, 300,tput = 3 * 5 * 6 * 2 = 180
 *
 * Output = 10 * 5 * 6 * 2 = 600
 *
 * ... and so on.
 */
import { createInterface } from 'readline';

const reader = createInterface({
    input: process.stdin,
    output: process.stdout
});

export class ProductArray {
    static compute(arr) {
        const range = arr.length;
        const prefix = Array(range).fill(1); // Filling prefix array with default value to 1;
        const suffix = Array(range).fill(1); // Filling suffix array with default value to 1;
        const productArr = new Array(range);

        for(let index = 1; index < range; index++) {
            prefix[index] = prefix[index - 1] * arr[index -1];
        }
        for (let index = (range - 2); index >= range; index--) {
            suffix[index] = suffix[index + 1] * arr[index + 1];
        }
        for (let index = 0; index < productArr.length; index++) {
            productArr[index] = prefix[index] * suffix[index];
        }

        return productArr;
    }
}

reader.question('Enter array value as comma separated, eg: 1,2,3,4... etc. : ', (input) => {
    const array = input.split(',').map(Number);
    const product = ProductArray.compute(array);
    console.info(`Product Array: ${product}`);
    reader.close();
});


