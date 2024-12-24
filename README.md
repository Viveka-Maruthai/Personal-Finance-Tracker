# Personal Finance Tracker

A simple web-based application to track your personal finances. This app allows you to log income and expenses, view a summary of your balance, and manage your financial transactions in a clear and user-friendly interface.

## Features
- **Add Income/Expense**: Input transaction details (name, amount, and category).
- **Balance Overview**: See your total income, total expense, and remaining balance.
- **Transaction History**: View the list of your transactions with details (name, amount, category, and date).
- **Clear Transactions**: Clear all saved transactions.
- **LocalStorage**: Transactions are saved in LocalStorage to persist data even after refreshing the page.

## Technologies Used
- **HTML**: Structure of the web page.
- **CSS**: Styling and layout of the app.
- **JavaScript**: Logic for adding transactions, updating balance, and managing data using LocalStorage.

## Getting Started

### Prerequisites
You only need a web browser to run this application.

### Installation
1. Clone or download this repository.
2. Open the `index.html` file in your web browser.

### How to Use
1. **Add a Transaction**:
   - Enter the transaction name (e.g., "Salary", "Groceries").
   - Enter the amount (e.g., "500", "50").
   - Select the category ("Income" or "Expense").
   - Click on the **Add Transaction** button to save it.

2. **View the Balance Overview**:
   - The app will display:
     - Total Income
     - Total Expense
     - Remaining Balance (Income - Expense)

3. **View Transaction History**:
   - All your transactions are displayed with details such as name, amount, category, and date.

4. **Clear All Transactions**:
   - Clicking the **Clear All Transactions** button will remove all saved transactions.

### Example Usage:
- Add a transaction:
  - Transaction Name: "Salary"
  - Amount: "1000"
  - Category: "Income"
  
- Add another transaction:
  - Transaction Name: "Groceries"
  - Amount: "100"
  - Category: "Expense"

### LocalStorage:
All transactions are saved in your browser's LocalStorage, so you don't lose your data even after closing and reopening the app.

