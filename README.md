
# Project Gutenberg

## Overview

This React application is a showcase of books from the project Gutenberg, thats is good source of free eBooks. 

Here you can search books and get details of them

The application was built using TypeScript and Vite, React Query, CSS-in-JS (emotion similar to styled components) and Cypress for E2E testing.

## Features

- **Book ShowCase**: Displays a collection of eBooks from Project Gutenberg. 
- **Search Functionality**: Allows users to search for books by title or author.
- **Pagination Functionality**: An infinite scroll concept has been implemented for pagination.
- **Book Details**: Shows more information about the book.

## Setup

It is recommended to use the LTS version of node 20.10

Steps to run the project locally:

1. Clone the repository on Github.

2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build the app for production:
   ```bash
   npm run build
   ```
4. Run the E2E tests:
   ```bash
   npx cypress open
   ```

## Folder Structure

- `src`: Contains the source code of the application.
  - `App.tsx`: The main component that includes the routing logic and layout structure.
  - `components`: Reusable components such as book cards and detail views.
  - `apis`: Defines the integration with the Project Gutenberg API.
  - `assets`: Static assets such as images and icons.
  - `functions`: Utility functions to support component logic.
  - `hooks`: Custom hooks for shared logic across components.
  - `styles`: CSS files for styling the application.
- `public`: Publicly accessible assets like the favicon and manifest. 
## API Integration

- The `apis` directory contains the endpoints for fetching data from Project Gutenberg. This includes functions to retrieve the book collection, search results, and book details.





---
