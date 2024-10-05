document.addEventListener('DOMContentLoaded', function() {
    const noteField = document.getElementById('note');
    const saveButton = document.getElementById('save');
    const clearButton = document.getElementById('clear');
    const statusMessage = document.getElementById('status');
    const notesList = document.getElementById('notes-list');

    // Загрузка заметок из localStorage
    let notes = JSON.parse(localStorage.getItem('notes')) || [];

    // Функция для отображения заметок на странице
    function displayNotes() {
        notesList.innerHTML = '';
        notes.forEach((note, index) => {
            const noteItem = document.createElement('div');
            noteItem.classList.add('note-item');
            noteItem.textContent = note;
            notesList.appendChild(noteItem);
        });
    }

    // Отображаем заметки при загрузке страницы
    displayNotes();

    // Добавление новой заметки
    saveButton.addEventListener('click', function() {
        const noteContent = noteField.value.trim();

        if (noteContent !== '') {
            notes.push(noteContent);
            localStorage.setItem('notes', JSON.stringify(notes));
            displayNotes();
            noteField.value = ''; // Очищаем поле ввода
            statusMessage.textContent = 'Заметка добавлена!';
        } else {
            statusMessage.textContent = 'Введите текст заметки!';
        }

        setTimeout(() => statusMessage.textContent = '', 2000);
    });

    // Очистка всех заметок
    clearButton.addEventListener('click', function() {
        notes = [];
        localStorage.removeItem('notes');
        displayNotes();
        statusMessage.textContent = 'Все заметки очищены!';
        setTimeout(() => statusMessage.textContent = '', 2000);
    });
});
