function testNoteListHasAnArrayToStoreNotes() {
  var noteList = new NoteList;
  assert.isTrue(noteList.notes.length === 0);
}

function testNoteListCreatesNotes() {
  var noteList = new NoteList;
  noteList.addNewNote("test1");
  assert.isTrue(noteList.notes.length === 1);
}

function testNoteListReturnsTheArrayOfNotes() {
  var noteList = new NoteList;
  noteList.addNewNote("test1");
  noteList.addNewNote("test2");
  assert.isTrue(noteList.displayNotes().length === 2);
}

testNoteListHasAnArrayToStoreNotes();
testNoteListCreatesNotes();
testNoteListReturnsTheArrayOfNotes();
