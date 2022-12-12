const inputWithdraw = document.querySelector(".input_withdraw");
const inputDeposit = document.querySelector(".input_deposit");
const withdraw_box = document.querySelector(".withdraw-box");
const btnWithdraw = document.querySelector(".btn_withdraw");
const deposit_box = document.querySelector(".deposit-box");
const btnDeposit = document.querySelector(".btn_deposit");
const trxn_box = document.querySelector(".transaction_box");
const balance_text = document.querySelector(".balance");
const expenses = [300, 500];
const calcDisplayBalance = function (acc) {
  balance = expenses.reduce((acc, mov) => acc + mov, 0);
  balance_text.textContent = `₹ ${balance}`;
  return balance;
};
calcDisplayBalance();

const dep = function () {
  if (inputDeposit.value > 0) {
    expenses.push(Number(inputDeposit.value));
    console.log(expenses);
    balance = expenses.reduce((acc, mov) => acc + mov, 0);
    console.log(balance);
  }
  if (inputDeposit.value < 0) {
    alert("Invalid Input");
  }
};

const wid = function () {
  if (inputWithdraw.value > 0 && inputWithdraw.value <= balance) {
    expenses.push(Number(-inputWithdraw.value));
    console.log(expenses);
    balance = expenses.reduce((acc, mov) => acc + mov, 0);
    console.log(balance);
  }
  
  if (inputWithdraw.value < 0) {
    alert("Invalid Input");
  }
};

btnDeposit.addEventListener("click", function (eve) {
  eve.preventDefault();
  dep();
  balance_text.textContent = `₹ ${balance}`;
if(inputDeposit.value > 0){
  const html = `
  
  <div class="transaction_row">
  <div class="transaction_type" style="color:green;">Deposit</div>
    <div class="transaction_value">${Number(inputDeposit.value)}₹</div>
  </div>
`;
trxn_box.insertAdjacentHTML("afterbegin", html);
}
  if (inputDeposit.value > 0) {
  }
  inputDeposit.value = " ";
});

btnWithdraw.addEventListener("click", function (eve) {
  eve.preventDefault();
  if (inputWithdraw.value > balance) {
    alert("Check your expenditures");
  }
  wid();
  balance_text.textContent = `₹ ${balance}`;
  if (inputWithdraw.value <= balance && inputWithdraw.value > 0) {
    const html = `
  <div class="transaction_row">
  <div class="transaction_type" style="color:red;">Withdrawal</div>
    <div class="transaction_value">-${Number(inputWithdraw.value)}₹</div>
  </div>
`;
console.log(inputWithdraw.value)
    trxn_box.insertAdjacentHTML("afterbegin", html);
  }
  inputWithdraw.value = " ";
});

function showDeposit() {
  if (deposit_box.style.display === "none") {
    deposit_box.style.display = "block";
    withdraw_box.style.display = "none";
  } else {
    deposit_box.style.display = "none";
  }
}
function showWithdraw() {
  if (withdraw_box.style.display === "none") {
    withdraw_box.style.display = "block";
    deposit_box.style.display = "none";
  } else {
    withdraw_box.style.display = "none";
  }
}
