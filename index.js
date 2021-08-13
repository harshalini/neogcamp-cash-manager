const billAmount = document.querySelector("#bill-amount");
const nextButton = document.querySelector("#next-button");
const checkButton = document.querySelector("#check-button");
const cashGiven = document.querySelector("#cash-given");
const notesRequired = document.querySelector("#notesRequired");
const message = document.querySelector("#error-message");
const displayTable = document.querySelector(".change-table");
const typeNoOfNotes = document.querySelectorAll(".typeNo-Of-Notes");
const cashDiv = document.querySelector("#cash-div");

cashDiv.style.display = "none";
displayTable.style.display = "none";

var numberOfNotes;

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];



nextButton.addEventListener("click", checkBillAmount);
checkButton.addEventListener("click", changeCalculater);

function checkBillAmount() {

    if (billAmount.value > 0) {
        cashDiv.style.display = "flex";
    } else {
        showMessage("Please enter bill amount greater than 0.");
    }

}

function changeCalculater() {

    if (Number(cashGiven.value) >= Number(billAmount.value)) {
        displayTable.style.display = "block";
        hideMessage();
        const amountToBeReturned = cashGiven.value - billAmount.value;
        returnChange(amountToBeReturned);
    } else {

        showMessage("You are short on cash!");
    }
}

function showMessage(msg) {

    message.style.display = "block";
    message.innerHTML = msg;
}

function returnChange(amountToBeReturned) {

    for (let i = 0; i < availableNotes.length; i++) {
        const noOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        typeNoOfNotes[i].innerText = noOfNotes;
    }

}

function hideMessage() {

    message.style.display = "none";
}