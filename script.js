// Get references to DOM elements
const transactionNameInput = document.getElementById("transaction-name");
const amountInput = document.getElementById("amount");
const categorySelect = document.getElementById("category");
const addTransactionButton = document.getElementById("add-transaction");
const clearAllButton = document.getElementById("clear-all");
const transactionList = document.getElementById("transaction-list");
const totalIncomeDisplay = document.getElementById("total-income");
const totalExpenseDisplay = document.getElementById("total-expense");
const balanceDisplay = document.getElementById("balance");

// Load transactions from LocalStorage on page load
window.onload = () => {
    loadTransactions();
};

// Function to add a new transaction
addTransactionButton.addEventListener("click", () => {
    const name = transactionNameInput.value.trim();
    const amount = parseFloat(amountInput.value.trim());
    const category = categorySelect.value;

    if (name && !isNaN(amount)) {
        const transaction = {
            name,
            amount,
            category,
            date: new Date().toLocaleString()
        };
        saveTransaction(transaction);
        clearForm();
        loadTransactions();
    }
});

// Function to save a transaction to LocalStorage
function saveTransaction(transaction) {
    const transactions = getTransactionsFromStorage();
    transactions.push(transaction);
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

// Function to load all transactions from LocalStorage
function loadTransactions() {
    const transactions = getTransactionsFromStorage();
    renderTransactionList(transactions);
    updateBalance(transactions);
}

// Function to get transactions from LocalStorage
function getTransactionsFromStorage() {
    return JSON.parse(localStorage.getItem("transactions")) || [];
}

// Function to render the transaction list
function renderTransactionList(transactions) {
    transactionList.innerHTML = "";
    transactions.forEach(transaction => {
        const li = document.createElement("li");
        li.innerHTML = `${transaction.name} - $${transaction.amount} - ${transaction.category} - ${transaction.date}`;
        transactionList.appendChild(li);
    });
}

// Function to update total income, expense, and balance
function updateBalance(transactions) {
    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach(transaction => {
        if (transaction.category === "income") {
            totalIncome += transaction.amount;
        } else {
            totalExpense += transaction.amount;
        }
    });

    const balance = totalIncome - totalExpense;

    totalIncomeDisplay.textContent = totalIncome.toFixed(2);
    totalExpenseDisplay.textContent = totalExpense.toFixed(2);
    balanceDisplay.textContent = balance.toFixed(2);
}

// Function to clear the form inputs
function clearForm() {
    transactionNameInput.value = "";
    amountInput.value = "";
}

// Function to clear all transactions
clearAllButton.addEventListener("click", () => {
    localStorage.removeItem("transactions");
    loadTransactions();
});
