//helper.js
const flattenObjectValuesIntoArray = (arrOfObjs) => {
    let flattenedObj;
    const flattenedObjsArr = [];
    for (let obj = 0; obj < arrOfObjs.length; obj++) {
        const objValues = Object.values(arrOfObjs[obj]);
        flattenedObj = [...objValues.flat()]
        flattenedObjsArr.push(flattenedObj)
    }
    return flattenedObjsArr;
};

const structureBookAsHtml = (book) => {
    const bookDiv = document.createElement("div");
    bookDiv.setAttribute('class', 'bookDiv');

    const bookInfo = document.createElement("div");
    bookInfo.setAttribute('class', 'bookInfo');

    const bookTitle = document.createElement("h2");
    bookTitle.innerHTML = book.title;
    bookTitle.setAttribute('class', 'bookTitle');

    const bookAuthor = document.createElement("h3");
    bookAuthor.innerHTML = book.author;

    const bookTags = document.createElement("p");
    bookTags.innerHTML = book.tags.join(", ");

    bookInfo.append(bookTitle, bookAuthor, bookTags);

    const bookImage = document.createElement("img");
    bookImage.src = book.imageUrl;
    bookImage.setAttribute('class', 'bookImage');
    bookImage.style.width = '110px';
    bookImage.style.height = 'auto';
    bookImage.style.marginRight = '1rem';

    bookDiv.append(bookImage, bookInfo);

    // Some style
    const divProps = {
        backgroundColor: "#e5e5e5",
        color: 'black',
        width: '400px',
        height: '250px',
        borderRadius: '1.5rem',
        border: "1px solid #000000",
        padding: '0rem 1.5rem',
        margin: " 10px",
        display: 'flex',
        alignItems: 'center'
    }
    for (const property in divProps) {
        bookDiv.style[property] = divProps[property];
    }
    return bookDiv;
};

const renderBooksToDom = (elements) => {
    const bookListContainer = document.querySelector("#bookList");
    bookListContainer.innerHTML = "";

    bookListContainer.append(...elements);
};