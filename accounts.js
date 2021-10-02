function findAccountById(accounts, id) {
  // declares a variable accessing accounts array using .find() method and arrow function
  const matchingId = accounts.find((account) =>
  // Targeting the ids of accounts array to equal to id  
  account.id === id);
  // returns all of the accounts id
  return matchingId;
}

function sortAccountsByLastName(accounts) {
  // declares a variable equal to accounts array with .sort() method takes two arguments for the sort method to operate correctly
  const lastNameAtoZ = accounts.sort((accountA, accountB) =>
  // first argument greater than the second argument creating a positive integer thats ordered
  // if the number is negative it will sort from A to Z. Z to A if positive.
  accountA.name.last > accountB.name.last ? 1 : -1);
  // returns the following variable in alphabetical order
  return lastNameAtoZ;
}

function getTotalNumberOfBorrows(account, books) {
  // we'll use the result to add against the length of the borrowed books
  let result = 0;

  // use a for in with id as the variable name and loop on books objects
  for (let id in books) {
  // a variable that loops through the borrows objects and filter
  // method takes in an argument of book that matches the book id
  // to the account id. If the condition is met the ids that pass
  // will be the result.
  borrowedBooks = books[id].borrows.filter(book => book.id === account.id);
  // take the result variable and add it up to the books length
  result += borrowedBooks.length
  }
return result;
}

function getBooksPossessedByAccount(account, books, authors) {
  //returns an array of books ( filter() method creates a new array) if pass test, if not returned false
  //filter() in order to go through the array and find matches by using some method here
  const results = books.filter((book) => 
  book.borrows.some(acc => acc.id === account.id && acc.returned === false))

  //map() method creates a new array populated with the results of calling a provided function
  .map(book => { 

  //find() method returns the id of the first element in the provided authors array that satisfies that given id matches auhtors id.
  let author = authors.find(author => author.id === book.authorId) 
  book.author = author; 
  return book;
  });   

  //Finally you have to return results
  return results;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
