function getTotalBooksCount(books) {
  // grab all the data from eeach book
  let totalBooks = books.length;
  // returns the number of books
  return totalBooks;
}

function getTotalAccountsCount(accounts) {
  // grab the number of accounts data
  let totalAccounts = accounts.length;
  // return the number of accounts
  return totalAccounts;
}

function getBooksBorrowedCount(books) {
  // variable of books array of objects with filter method 
  // targeting the borrows key 
  const curBurrowed = books.filter((book) => {
  const [borrow] = book.borrows
  // if the returned key is not yet checked out or false 
  return !borrow.returned }); 
  // returned the number of filtered results
  return curBurrowed.length;
}

function getMostCommonGenres(books) {
  // reduce seems like a good choice for the array function to use, because we are
  // building a new array, but not one where each element maps directly to an 
  // element of books
  return books.reduce((acc, book) => {
    // grab the genre for readability
    const { genre } = book;

    // first we need to check if we already have an entry for this genre in the accumulator
    const genreIndex = acc.findIndex(g => g.name === genre);
    if(genreIndex === -1) {
      // if we get here, then we do NOT have an entry for the genre in the accumulator
      // so we need to add it with count initialized to 1
      const genreEntry = {
        name: genre,
        count: 1
      };
      acc.push(genreEntry)
    } else {
      // if we get here, then we FOUND an entry for the genre in the accumulator
      // and we just need to increment its count
      acc[genreIndex].count += 1;
    }
    
    // finally, like we always do when using reduce, we return the accumulator
    return acc;
  }, [])
  .sort((a, b) => b.count - a.count) // need to sort by count in descending order
  .slice(0, 5); // we only want the top 5
}

function getMostPopularBooks(books) {
  // the logic works like this:
  // first: use .map to take the books array and get an array of objects
  // with the book name and borrow count
  // second: use .sort to sort the objects by count in descending order
  // finally: just slice off the first five
  return books
    .map(book => {
        // grab the name
        const {title: name} = book;
        // grab the number of borrows
        const count = book.borrows.length;

        // we want an array of objects with name and count properties
        // REMEMBER: when using .map, we need to return something from the arrow function
        return {
          name,
          count
        };
      })
    .sort((a, b) => b.count - a.count) // sort in descending order
    .slice(0, 5); // take the first 5
}

function getMostPopularAuthors(books, authors) {
  // call for authors array
  const result = authors.map((author) => {
  // grab the authors name and wrap it in template liberals
  const name = `${author.name.first} ${author.name.last}`
  let count = 0;
  // for of loop through the books array
  for (let book of books) {
    if(book.authorId === author.id) {
      count += book.borrows.length;  
    }
  }
  // return the array with the two variables plugged in the form of an object
  return { name, count };
  })
  // sort in descending order
  result.sort((authorA, authorB) => authorB.count - authorA.count)
  // takes first 5 results
  return result.slice(0, 5);
}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
