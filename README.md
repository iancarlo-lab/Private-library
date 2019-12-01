# Privar Library

## This is an API with CRUD ops 

### Techs used in this project:

- HTML
- CSS/SASS/SCSS
- Javascript/JSX
- React.js
- Bootstrap
- Node.js
- Express
- MongoDB
- Helmet.js
- Chai/Mocha

### Basic user stories: 

- Nothing from my website will be cached in my client.

- The headers will say that the site is powered by 'PHP 4.2.0' even though it isn't (as a security measure).

- I can post a title to `/api/books` to add a book and returned will be the object with the title and a unique _id.

- I can get `/api/books` to retrieve an array of all books containing title, _id, and commentcount.

- I can get /api/books/{id} to retrieve a single object of a book containing _title, _id, & an array of comments (empty array if no comments present).

- I can post a comment to /api/books/{id} to add a comment to a book and returned will be the books object similar to get /api/books/{id} including the new comment.

- I can delete /api/books/{_id} to delete a book from the collection. Returned will be 'delete successful' if successful.

- If I try to request a book that doesn't exist I will be returned 'no book exists'.

- I can send a delete request to /api/books to delete all books in the database. Returned will be 'complete delete successful' if successful.

- All 6 functional tests required are complete and passing.
