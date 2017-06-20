'use-strict';

(function (exports) {

  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.generateHtml = function() {
    if (this.noteList.displayNotes().length === 0) return ""

    var list = "<ul>"
    this.noteList.displayNotes().forEach(function(note){
       list += ("<li><div>" + note.getText() + "</div></li>");
    });
    list += "</ul>"
    return list
  };

  exports.NoteListView = NoteListView;
})(this)
