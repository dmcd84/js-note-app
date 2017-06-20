function testNoteListViewReturnsEmptyHtml(){
  var noteList = new NoteList;
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.generateHtml() === "");
}

function testNoteListViewReturnsListWithOneItem() {
  var noteList = new NoteList;
  noteList.addNewNote("any old text");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.generateHtml() === "<ul><li><div>any old text</div></li></ul>")
}

function testNoteListViewReturnsListWithManyItems() {
  var noteList = new NoteList;
  noteList.addNewNote("any oldest text");
  noteList.addNewNote("any older text");
  noteList.addNewNote("any old text");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.generateHtml() === "<ul><li><div>any oldest text</div></li><li><div>any older text</div></li><li><div>any old text</div></li></ul>")
}

testNoteListViewReturnsEmptyHtml();
testNoteListViewReturnsListWithOneItem();
testNoteListViewReturnsListWithManyItems();
