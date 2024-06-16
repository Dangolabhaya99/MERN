document.addEventListener('DOMContentLoaded', function() {
    const bookList = document.getElementById('book-list');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const addBookButton = document.getElementById('addBookButton');
    const newBookTitle = document.getElementById('newBookTitle');
    const newBookAuthor = document.getElementById('newBookAuthor');

    function addBook() {
        const title = newBookTitle.value.trim();
        const author = newBookAuthor.value.trim();
        if (title && author) {
            const newBookItem = document.createElement('li');
            const bookContent = document.createElement('span');
            bookContent.textContent = `${title} by ${author}`;

            const favoriteButton = document.createElement('button');
            favoriteButton.textContent = 'Favorite';
            favoriteButton.addEventListener('click', toggleFavorite);

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                if (confirm("Are you sure you want to remove this book?")) {
                    bookList.removeChild(newBookItem);
                }
            });

            newBookItem.appendChild(bookContent);
            newBookItem.appendChild(favoriteButton);
            newBookItem.appendChild(removeButton);
            bookList.appendChild(newBookItem);

            newBookTitle.value = '';
            newBookAuthor.value = '';
        } else {
            alert('Please provide both title and author');
        }
    }

    function searchBook() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const bookItems = bookList.querySelectorAll('li span');
        bookItems.forEach(item => {
            if (item.textContent.toLowerCase().includes(searchTerm)) {
                item.parentElement.style.backgroundColor = 'yellow';
            } else {
                item.parentElement.style.backgroundColor = '';
            }
        });
    }

    function toggleFavorite(event) {
        const bookItem = event.target.parentElement;
        bookItem.classList.toggle('favorite');
    }

    function clearSearchHighlights() {
        const bookItems = bookList.querySelectorAll('li');
        bookItems.forEach(item => {
            item.style.backgroundColor = '';
        });
    }

    addBookButton.addEventListener('click', addBook);
    searchButton.addEventListener('click', searchBook);
});
