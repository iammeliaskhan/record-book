# Record Book
Record Book is a web application built with React.js that allows users to record and manage their expenses. It uses Create React App as the starter kit and implements several features such as adding new expenses, viewing expenses in a list as well as in a graphical chart, and deleting expenses.

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
Usage
To start the app, run the following command:

bash
Copy code
npm start
The app will open in your default browser at http://localhost:3000.

Features
Record Book React App has the following features:

Add new books: Users can add new books to the reading list by filling out a form with book details (title, author, year, and image URL).

View book details: Users can view a list of all the books in the reading list with their details, including the book cover image, title, author, and year of publication.

Edit book details: Users can edit the details of an existing book by clicking on the edit button next to the book. They can change the book's title, author, year, and image URL.

Delete books: Users can delete a book from the reading list by clicking on the delete button next to the book. A confirmation dialog will appear before the book is deleted.

Search for books: Users can search for a book by title or author using the search bar at the top of the page. The search results will update as the user types.

Sort books: Users can sort the book list by title or author by clicking on the sort button next to the search bar.

Technologies Used
Record Book React App was built using the following technologies:

React.js: A JavaScript library for building user interfaces.
Redux.js: A predictable state container for JavaScript apps.
Create React App: A tool to set up a modern web app by running one command.
Bootstrap: A popular CSS framework for building responsive and mobile-first websites.
Font Awesome: A library of icons and social logos.
File Structure
The project file structure is as follows:

java
Copy code
record-book/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    actions/
      bookActions.js
    components/
      Book.js
      BookForm.js
      BookList.js
      EditBook.js
      Navbar.js
      SearchBar.js
    reducers/
      bookReducer.js
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
Contributing
Contributions are always welcome! If you want to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and commit them with descriptive messages.
Push your changes to your forked repository.
Submit a pull request.
License
This project is licensed under the MIT License - see the LICENSE file
