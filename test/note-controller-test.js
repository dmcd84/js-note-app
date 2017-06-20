function testNoteControllerCanBeInstantiated() {
  var noteController = new NoteController("fakeNoteList");
  assert.isTrue(noteController.noteList === "fakeNoteList");
}

function testNoteControllerUpdatesInnerHTML() {

  function AppDouble() {
    this.innerHTML = null
  }

  var appDouble = new AppDouble();
  var noteList = new NoteList();
  noteList.addNewNote("Favourite drink: seltzer")
  var noteController = new NoteController(noteList);
  noteController.updateHtml(appDouble);
  assert.isTrue(appDouble.innerHTML === "<ul><li><div>Favourite drink: seltzer</div></li></ul>")
}

testNoteControllerCanBeInstantiated();
testNoteControllerUpdatesInnerHTML();
