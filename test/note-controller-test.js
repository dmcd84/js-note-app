function testNoteControllerCanBeInstantiated() {
  var noteController = new NoteController("fakeNoteList");
  assert.isTrue(noteController.noteList === "fakeNoteList");
}

function testNoteControllerUpdatesInnerHTML() {

  function appDouble() {
    this.innerHTML = null
  }

  var noteList = new NoteList();
  noteList.addNewNote("Favourite drink: seltzer")
  var noteController = new NoteController(noteList);
  noteController.updateHtml(appDouble);
  assert.isTrue(appDouble.innerHTML === "Favourite drink: seltzer")
}

testNoteControllerCanBeInstantiated();
testNoteControllerUpdatesInnerHTML();
