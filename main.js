// Getting input from input field

var titleFld = $("#title");
var addButton = $("#addButton");
var todos = $("#todos");

addButton.click(addTodos);
//console.log(addButton);

// function todo implementation
function addTodos (){
   // console.log ("Hello @root()!");
        var title = titleFld.val();
        var note = $("<li>").append(title);
        note.addClass("list-group-item");
      var delBtn = $("<btn>")
      .addClass("btn btn-danger float-right")
      .click(deleteTodos);
      var delIcon = $("<i>").addClass ("fas fa-trash");
      delBtn.append(delIcon);
      note.append(delBtn);
      todos.append(note);

}

// Deleting selected To do
function deleteTodos (event) {
    var todo = $(event.currentTarget).parent();
    todo.remove();
}