var app = document.getElementById("app")

var noteList = new NoteList();

noteList.addNewNote("You're awesome!")

var noteController = new NoteController(noteList);

noteController.updateHtml(app);
