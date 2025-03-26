const inputEle = document.getElementById("numInput");
const btnEle = document.getElementById("checkBtn");
const resultMsgEle = document.getElementById("resultMsg");
const formEle = document.getElementById("formContainer");


btnEle.disabled = true;
inputEle.addEventListener("input", function () {
    const value = inputEle.value.trim();
    if (value === "" || parseInt(value) < 0 || !/^\d+$/.test(value)) {
        btnEle.disabled = true;
        resultMsgEle.textContent = "";
    } else {
        btnEle.disabled = false;
    }
});


formEle.addEventListener("submit", function (event) {
    event.preventDefault();
    checkSpy(inputEle.value.trim());
});


function checkSpy(inputValue) {
    if (inputValue === "" || parseInt(inputValue) < 0 || !/^\d+$/.test(inputValue)) {
        resultMsgEle.textContent = "Invalid input ❌";
        resultMsgEle.style.color = "red";
        return;
    }

    const strNum = inputValue.toString();
    let sum = 0, product = 1;

    for (let digit of strNum) {
        let num = parseInt(digit);
        sum += num;
        product *= num;
    }

    if (sum === product) {
        resultMsgEle.textContent = `${inputValue} is a Spy Number ✅`;
        resultMsgEle.style.color = "green";
    } else {
        resultMsgEle.textContent = `${inputValue} is NOT a Spy Number ❌`;
        resultMsgEle.style.color = "red";
    }
}
