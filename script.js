class Note {
    constructor(content) {
        this.content = content;
    }
}

class NoteManager {
    constructor() {
        this.notes = [];
    }

    addNote(note) {
        this.notes.push(note);
    }

    removeNote(content) {
        this.notes = this.notes.filter(note => note.content !== content);
    }

    getNotes() {
        return this.notes;
    }
}

const noteManager = new NoteManager();

document.getElementById('note-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const content = document.getElementById('note-content').value;

    const note = new Note(content);
    noteManager.addNote(note);

    displayNotes();
    this.reset();
});

function displayNotes() {
    const noteList = document.getElementById('note-list');
    noteList.innerHTML = '';

    noteManager.getNotes().forEach(note => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            ${note.content}
            <button class="btn btn-danger btn-sm delete-note">Delete</button>
        `;

        li.querySelector('.delete-note').addEventListener('click', () => {
            noteManager.removeNote(note.content);
            displayNotes();
        });

        noteList.appendChild(li);
    });
}

displayNotes();
