// Mendapatkan elemen input, tombol, dan list
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Fungsi untuk menambahkan tugas ke dalam list
function addTodo() {
    const taskText = todoInput.value;

    // Jika input kosong, tidak menambahkan apa pun
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Membuat elemen list baru
    const listItem = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    
    // Membuat tombol hapus untuk setiap item
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    // Menambahkan event listener untuk tombol hapus
    deleteBtn.addEventListener('click', function() {
        todoList.removeChild(listItem);
    });

    // Menambahkan elemen span dan tombol ke dalam list item
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteBtn);

    // Menambahkan item ke dalam list
    todoList.appendChild(listItem);

    // Mengosongkan input setelah menambahkan tugas
    todoInput.value = '';
}

// Event listener untuk tombol tambah
addBtn.addEventListener('click', addTodo);

// Event listener untuk menambahkan tugas dengan menekan Enter
todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});
