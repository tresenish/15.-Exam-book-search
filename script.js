//script.js
const captureSearchValue = () => {
  const searchValue = document.getElementById('search-bar').value;
  return searchValue.trim();
};

const filterBooks = (searchValue, booklist) => {
  let retList = [];
  let newList = flattenObjectValuesIntoArray(booklist);
  for (let i = 0; i < newList.length; i++) {
    if (newList[i].includes(searchValue)) {
      retList.push(booklist[i]);
    }
  }
  return retList;
};

const structureBooksAsHtml = (bookList) => {
  const formattedBookElements = bookList.map(structureBookAsHtml);
  return formattedBookElements;
};

const searchBtnClickHandler = (bookList) => {
  const searchValue = captureSearchValue();
  const filteredBooks = filterBooks(searchValue, bookList);
  const formattedBookElements = structureBooksAsHtml(filteredBooks);
  renderBooksToDom(formattedBookElements);
};

const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });