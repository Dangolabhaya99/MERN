document.addEventListener('DOMContentLoaded', function() {
    const bookList = document.getElementById('bookList');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const addBookButton = document.getElementById('addBookButton');
    const newBookTitle = document.getElementById('newBookTitle');
    const newBookAuthor = document.getElementById('newBookAuthor');

    let books = [
        { title: 'To Kill a Mockingbird', author: 'Harper Lee', favorite: false },
        { title: '1984', author: 'George Orwell', favorite: false },
        { title: 'Moby Dick', author: 'Herman Melville', favorite: false },
    ];

    function renderBooks(filter = '') {
        bookList.innerHTML = '';
        const filteredBooks = books.filter(book => 
            book.title.toLowerCase().includes(filter.toLowerCase())
        );

        filteredBooks.forEach((book, index) => {
            const bookItem = document.createElement('li');
            bookItem.classList.add('book-item');

            const bookTitle = document.createElement('span');
            bookTitle.classList.add('title');
            bookTitle.textContent = book.title;

            const bookAuthor = document.createElement('span');
            bookAuthor.classList.add('author');
            bookAuthor.textContent = `by ${book.author}`;

            const bookActions = document.createElement('div');
            bookActions.classList.add('actions');

            const removeButton = document.createElement('button');
            removeButton.classList.add('remove-button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => removeBook(index));

            const favoriteButton = document.createElement('button');
            favoriteButton.classList.add('favorite-button');
            favoriteButton.textContent = book.favorite ? 'Unfavorite' : 'Favorite';
            favoriteButton.addEventListener('click', () => toggleFavorite(index));

            bookActions.appendChild(removeButton);
            bookActions.appendChild(favoriteButton);

            bookItem.appendChild(bookTitle);
            bookItem.appendChild(bookAuthor);
            bookItem.appendChild(bookActions);

            bookList.appendChild(bookItem);
        });
    }

    function addBook() {
        const title = newBookTitle.value.trim();
        const author = newBookAuthor.value.trim();
        if (title && author) {
            books.push({ title, author, favorite: false });
            newBookTitle.value = '';
            newBookAuthor.value = '';
            renderBooks();
        } else {
            alert('Please provide both title and author');
        }
    }

    function removeBook(index) {
        books.splice(index, 1);
        renderBooks();
    }

    function toggleFavorite(index) {
        books[index].favorite = !books[index].favorite;
        renderBooks();
    }

    searchButton.addEventListener('click', () => {
        const filter = searchInput.value.trim();
        renderBooks(filter);
    });

    addBookButton.addEventListener('click', addBook);

    renderBooks();
});
