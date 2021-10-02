function findAuthorById(authors, id) {
  // declare the find method to search for the authors id in the 
  // authors array with a single argument of author
  const authorId = authors.find((author) =>
  // create a filtered match for the author id 
  author.id === id);
  // return that match
  return authorId;
}

function findBookById(books, id) {
  // declare the find method on books array with an argument of book
  const bookId = books.find((book) =>
  // creates a filtered match for the book id 
  book.id === id);
  // returns that match
  return bookId;
}

function partitionBooksByBorrowedStatus(books) {
  // create two variables filter through the books array of objects
  // one is false and one is true
  let borrowed = books.filter((book) => book.borrows[0].returned === false)
  let returned = books.filter((book) => book.borrows[0].returned === true)
  // returns both variables
  return [borrowed, returned];
}

// just a little helper function to retrieve an account's data from
// its id
function findBorrowerHelper(accountId, accounts) {
  // find the account associated with the accountId
  const foundBorrower = accounts.find((account) => account.id === accountId);
  return foundBorrower;
}

function getBorrowersForBook(book, accounts) {
  /*// It should return an array of all the transactions from the book's `borrows` key.
  However, each transaction should include the related account information and the `returned` key.
  */
  // initialize our array to hold all the borrowers
  const borrowers = [];

  // loop through the book.borrows array
   book.borrows.forEach((borrow) => {

  // use object destructuring and rename field for readability
  const { id: accountId } = borrow;

  // use our helper function to get the borrowing account
  const account = findBorrowerHelper(accountId, accounts);

  // use the spread operator to combine the borrow and account objects
  // and push the combined data into the borrowers array
  borrowers.push({ ...borrow, ...account });
  });
  // finally return the borrowers array with the slice method 
  return borrowers.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
