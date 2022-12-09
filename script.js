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

btnDeposit.addEventListener("click", function (eve) {
  eve.preventDefault();
  console.log(expenses);
  expenses.push(Number(inputDeposit.value));
  balance = expenses.reduce((acc, mov) => acc + mov, 0);
  console.log(balance);
  balance_text.textContent = `₹ ${balance}`;
  if(inputDeposit.value <= 0){
    alert("Please enter a proper value");
  }
  
  const html = `
      <div class="transaction_row">
      <div class="transaction_type" style="color:green;">Deposit</div>
        <div class="transaction_value">${Number(inputDeposit.value)}₹</div>
      </div>
    `;
    if(inputDeposit.value > 0){
     
      trxn_box.insertAdjacentHTML("beforeend", html);
    }
  inputDeposit.value = "";
});
btnWithdraw.addEventListener("click", function (eve) {
  eve.preventDefault();
  if(inputWithdraw.value <= 0){
    alert("Invalid Entry");
  }
  withdrew = balance - Number(inputWithdraw.value);
  balance = withdrew;
  console.log(withdrew);
  balance_text.textContent = `₹ ${withdrew} `;
  if (withdrew <= 0) {
    // balance_text.textContent = `₹ u broke `;
    alert("Check your expenditures")
  }
  const html = `
  <div class="transaction_row">
  <div class="transaction_type" style="color:red;">Withdrawal</div>
    <div class="transaction_value">-${Number(inputWithdraw.value)}₹</div>
  </div>
`;
if(inputWithdraw.value > 0 && withdrew>0){
  trxn_box.insertAdjacentHTML("beforeend", html);
}
  inputWithdraw.value = "";
});
// var form = document.querySelector(".deposit-bos");
// form.reset();

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
