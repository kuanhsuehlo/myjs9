
// ex1
function printMany() {

    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}
// printMany();

// ex2
function printEvery3() {
    for (i = 1; i <= 88; i += 3) {
        console.log(i);
    }
}

// printEvery3();

//ex3

function stars(s) {
    let str = "";
    for (let i = 1; i <= s; i++) {
        str = str + "*";
    }
    console.log(str);
}

// 只做到第三題，以下為老師的解答


// stars(3);
// stars(10);


//ex4
function isUpperCase(str) {
    if (str.trim().length == 0) {
        return false;
    }
    // if (str[0] === str[0].toUpperCase()) {
    //     return true;
    // } else {
    //     return false;
    // }
    // 簡化寫法
    return str[0] === str[0].toUpperCase();
}

// console.log(isUpperCase("ABCD")); 		// returns true
// console.log(isUpperCase("")); 			// returns false
// console.log(isUpperCase("aBCD"));		// returns false


//ex5
function isAllUpperCase(str) {
    // 檢查是否有資料前，先去除多餘的空白
    if (str.trim().length == 0) {
        return false;
    }

    // 簡化
    return str === str.toUpperCase();


    // 方法1
    // if(str !== str.toUpperCase()){
    //     return false;
    // }
    // return true;

    // 方法2 (被刪了)
    // 逐一檢查是否所有字母為大寫
    // for(let i=0;i<str.length;i==){
    //     if(str[i]!== str[i].toUpperCase()){
    //         // 小寫 =>結束
    //         return false;
    //     }
    // }
    // return true
}
// console.log(isAllUpperCase("ABCD"));
// console.log(isAllUpperCase(""));
// console.log(isAllUpperCase("ABCDEFGHIJKLm"));

// ex6
function position(str) {
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            return str[i] + "" + i;
        }
    }
    return -1;
}

//    console.log(position("abcd")); 	// prints -1
//    console.log(position("AbcD"));		// prints A 0
//    console.log(position("abCD")); 	// prints C 2



function findSmallCount() {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        // 陣列中的值若小於n，次數+1
        if (arr[i] < n) {
            counter++;
        }
    }

    return counter;
}

// console.log(findSmallCount([1, 2, 3], 2)); 		// returns 1
// console.log(findSmallCount([1, 2, 3, 4, 5], 0)); 	// returns 0


function findSmallerTotal(arr, n) {
    let tot = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < n) {
            tot += arr[i];
        }
    }
    return tot;
}

// console.log(findSmallerTotal([1, 2, 3], 3)); 			// returns 3
// console.log(findSmallerTotal([1, 2, 3], 1)); 			// returns 0
// console.log(findSmallerTotal([3, 2, 5, 8, 7], 999)); 	// returns 25
// console.log(findSmallerTotal([3, 2, 5, 8, 7], 0)); 		// returns 0

// ex9
function findAllSmall(arr, n) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < n) {
            newArr.push(arr[i]);
        }
    }
    return newArr
}

console.log(findAllSmall([1, 2, 3], 10)); 		// returns [1, 2, 3]
console.log(findAllSmall([1, 2, 3], 2)); 		// returns [1]
console.log(findAllSmall([1, 3, 5, 4, 2], 4)); 	// returns [1, 3, 2]

function sum(arr) {
    let tot =0;
    for (let i = 0;i<arr.length;i++){
        tot = tot+arr[i];
    }
    return tot;
}

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 	// returns 55
console.log(sum([])); 							// return 0
console.log(sum([-10, -20, -30])); 				// return -60




