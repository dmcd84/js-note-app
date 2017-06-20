'use-strict';

(function(exports) {

  function NoteList() {
    this.notes = [];
  };

  NoteList.prototype.addNewNote = function(text) {
    this.notes.push(new Note(text));
  };

  NoteList.prototype.displayNotes = function() {
    return this.notes;
  };

  exports.NoteList = NoteList;
})(this);
