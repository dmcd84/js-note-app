function testNoteStoresText(){
  var note = new Note("test");
  assert.isTrue(note.text === "test");
};

testNoteStoresText();

function testNoteReturnsText(){
  var note = new Note("Test 2");
  assert.isTrue(note.getText() === "Test 2");
};

testNoteReturnsText();
