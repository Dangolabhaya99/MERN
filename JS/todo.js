document.addEventListener('DOMContentLoaded', function() {
    const TodoList = document.getElementById('todo-list');
    const addtodoButton = document.getElementById('addtaskButton');
    const newtodoTitle = document.getElementById('todotitle');
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');

    function addTodo() {
        const title = newtodoTitle.value.trim();
        if (title) {
            const newtodoItem = document.createElement('li');
            const TodoContent = document.createElement('span');
            TodoContent.textContent = `${title}`;

            const DoneButton = document.createElement('button');
            DoneButton.textContent = 'DONE';
            DoneButton.addEventListener('click', toggleFavorite);

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                if (confirm("Are you sure you want to remove this Task?")) {
                    TodoList.removeChild(newtodoItem);
                }
            });

            newtodoItem.appendChild(TodoContent);
            newtodoItem.appendChild(DoneButton);
            newtodoItem.appendChild(removeButton);
            TodoList.appendChild(newtodoItem);

            newtodoTitle.value = '';
        } else {
            alert('Please provide a title');
        }
    }

    function SearchTask() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const todoItems = TodoList.querySelectorAll('li span');
        todoItems.forEach(item => {
            if (item.textContent.toLowerCase().includes(searchTerm)) {
                item.parentElement.style.backgroundColor = 'yellow';    
            } else {
                item.parentElement.style.backgroundColor = '';
            }
        });
    }

    function toggleFavorite(event) {
        const todoItem = event.target.parentElement;
        todoItem.classList.toggle('favorite');
    }

    addtodoButton.addEventListener('click', addTodo);
    searchButton.addEventListener('click', SearchTask);
});
