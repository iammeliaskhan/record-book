# Record Book

Record Book is a web application built with React.js that allows users to record and manage their expenses. It uses Create React App as the starter kit and implements several features such as adding new expenses, viewing expense details both in a list and in a graphical chart, deleting expenses, searching for expenses, and sorting expenses.

## Table of Contents

- <ins>Installation</ins>
- <ins>Usage</ins>
- <ins>Features</ins>
- <ins>Technologies Used</ins>
- <ins>File Structure</ins>

## Installation

To run this app locally, you need to have `Node.js` and `npm` installed. Then, follow these steps:

1. Clone the repository:
   ```bash
       git clone https://github.com/iammeliaskhan/record-book.git
   ```
2. Install the dependencies:
   ```bash
       cd record-book
       npm install
   ```

## Usage

To start the app, run the following command:

```bash
    unset HOST
    npm start
```

The app will open in your default browser at http://localhost:3000.

## Features

Record Book has the following features:

- **Add new expenses:** Users can add new expenses to the record book by filling out a form with expense details (description, amount, date).

- **View expense details:** Users can view a list of all the expenses in the record book with their details, including the expense description, amount, and date in both a list and in a graphical chart.

- **Delete expenses:** Users can delete an expense from the record book by clicking on the delete button next to the expense. A confirmation dialog will appear before the expense is deleted. [This function is still under development]

- **Search for expenses:** Users can search for an expense by the year using the drop down option at the top of the page. The search results will update as the user types.

- **Sort expenses:** Users can sort the expense list by date or amount by clicking on the sort button next to the search bar. [This function is still under development]

## Technologies Used

Record Book React App was built using the following technologies:

- **React.js:** A JavaScript library for building user interfaces.
- **Create React App:** A tool to set up a modern web app by running one command.

## File Structure

The project file structure is as follows:

```bash
    record-book/
        README.md
        package.json
        public/
            index.html
            favicon.ico
        src/
            components/
            Chart/
                Chart.css
                Chart.js
                ChartBar.js
                ChartBar.css
            Expenses/
                ExpenseDate.js
                ExpenseDate.css
                ExpenseItem.js
                ExpenseItem.css
                Expenses.js
                Expenses.css
                ExpensesChart.js
                ExpensesFilter.js
                ExpensesFilter.css
                ExpensesList.js
                ExpensesList.css
            NewExpense/
                ExpenseForm.js
                ExpenseForm.css
                NewExpense.js
                NewExpense.css
            UI/
                Card.js
                Card.js
            App.js
            index.css
            index.js
```

## Contributing

Contributions are always welcome! If you want to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Submit a pull request.
