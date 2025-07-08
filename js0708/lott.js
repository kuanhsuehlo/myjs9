//排序前
let sortBefore = document.getElementById("sortBefore");
// 排序後
let sortAfter = document.getElementById("sortAfter");
// 第二區號碼
let secNo = document.getElementById("secNo");



// 威力彩
function lott1() {
    // 第一區:1-38取六個
    // 建立存放號碼的空陣列
    let lott = []; // 宣告一個空陣列

    // while迴圈

    while (1) {
        // 檢查已經有6個號碼
        if (lott.length == 6) { // .length 取的陣列的長度
            break; //中斷後跳出迴圈
        }

        // 亂數取號碼
        let lottNo = Math.floor(Math.random() * 38) + 1; // 宣告亂數
        // 檢查是反重複
        if (lott.includes(lottNo) == false) { // .includes()檢查是真是假(給布林值)
            lott.push(lottNo); // 增加號碼到陣列中(.push()把宣告的亂數名稱打在小括號)
        }
    }

    // 輸出
    // 未排序
    sortBefore.textContent = "排序前的號碼:" + lott; // 這裡是sortBefor是上面宣告的名稱
    // 排序
    lott.sort((a, b) => { //把數字排列由小到大(.sort()和箭頭函式，來排序陣列)
        return a - b;
    })
    sortAfter.textContent = "排序後的號碼:" + lott;
    // 第二區 : 1-8取1個(特別號)
    secNo.textContent = "第二區號碼:" + (Math.floor(Math.random() * 8) + 1); // 額外用一個亂數值

}


// 大樂透
function lott2() {
    // 第一區:1-49取六個
    // 建立存放號碼的空陣列
    let lott = []; // 宣告一個空陣列

    // while迴圈

    while (1) {
        // 檢查已經有7個號碼
        if (lott.length == 7) { // .length 取的陣列的長度
            break; //中斷後跳出迴圈
        }

        // 亂數取號碼
        let lottNo = Math.floor(Math.random() * 49) + 1; // 宣告亂數
        // 檢查是反重複
        if (lott.includes(lottNo) == false) {
            lott.push(lottNo);
        }
    }

    // 輸出

    // 去出陣列最後一個值後，並移除
    secNo.textContent = "特別號:" + lott.pop(); // .pop()移除最後一個陣列，再回傳(把特別號獨立)
    // 未排序
    sortBefore.textContent = "排序前的號碼:" + lott;
    // 排序
    lott.sort((a, b) => {
        return a - b;
    })
    sortAfter.textContent = "排序後的號碼:" + lott;

}

// 今彩539
function lott3() {
    // 第一區:1-38取六個
    // 建立存放號碼的空陣列
    let lott = []; // 宣告一個空陣列

    // while迴圈

    while (1) {
        // 檢查已經有6個號碼
        if (lott.length == 6) { // .length 取的陣列的長度
            break; //中斷後跳出迴圈
        }

        // 亂數取號碼
        let lottNo = Math.floor(Math.random() * 38) + 1; // 宣告亂數
        // 檢查是反重複
        if (lott.includes(lottNo) == false) {
            lott.push(lottNo);
        }
    }

    // 輸出
    // 未排序
    sortBefore.textContent = "排序前的號碼:" + lott; // 這裡是sortBefor是上面宣告的名稱
    // 排序
    lott.sort((a, b) => { //把數字排列由小到大(.sort()和箭頭函式，來排序陣列)
        return a - b;
    })
    sortAfter.textContent = "排序後的號碼:" + lott;
    // 今彩539沒有第二區，所以清除
    secNo.textContent = "";

}