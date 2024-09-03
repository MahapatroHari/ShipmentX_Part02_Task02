
# Front-End Developer Coding Assessment Part-02 Task-05

## Live Link

- [Personal Library Management - Live Demo](https://mybookwish.netlify.app/)


## Introduction

This Personal Library Management application is built using React and Redux. It allows users to manage a personal library by adding, updating, and removing books. Users can filter books by their status (Read, Currently Reading, Want to Read) or by genre. The application uses Tailwind CSS for styling, providing a modern and responsive user interface.

## Features

- **Add New Books**: A form to add books with fields for the title, author, genre, and status.
- **Book List**: Displays all books in a table format with options to mark them as read, currently reading, or want to read, and to delete them.
- **Filtering Options**: Allows filtering books by status or genre.
- **State Management**: Utilizes Redux for managing the state of the books, including actions for adding, removing, and updating books.

## Requirements

- Node.js
- npm or yarn

## Getting Started

Follow these instructions to set up and run the application locally.

### 1. Clone the Repository

```bash
git clone https://github.com/MahapatroHari/ShipmentX_Part02_Task05.git
cd ShipmentX_Part02_Task05
```

### 2. Install Dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
# or
yarn install
```

### 3. Start the Development Server

To start the development server and view the application in your browser, use:

```bash
npm start
# or
yarn start
```

The application should now be running at `http://localhost:3000`.

## Code Structure

- **src/redux/booksSlice.js**: Contains the Redux slice for managing books state.
- **src/redux/store.js**: Configures the Redux store.
- **src/components/BookForm.js**: Component for adding new books.
- **src/components/BookList.js**: Component for displaying and managing the list of books.
- **src/App.js**: Main application component.
- **src/index.js**: Entry point of the application.

## Additional Notes

- **Styling**: The application uses Tailwind CSS for styling. The background is black, and the tables are styled with a white background and grey borders.
- **Redux Integration**: Redux is used to handle state management for adding, removing, and updating books in real-time.

