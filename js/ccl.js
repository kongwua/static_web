// 获取显示屏元素
const display = document.getElementById('display');

// 清空显示屏
function clearDisplay() {
    display.innerText = '0';
}

// 删除最后一个字符
function deleteLast() {
    display.innerText = display.innerText.slice(0, -1) || '0';
}

// 向显示屏添加字符
function appendToDisplay(char) {
    if (display.innerText === '0') {
        display.innerText = char;
    } else {
        display.innerText += char;
    }
}

// 计算并显示结果
function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = '错误';
    }
}
