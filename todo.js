console.log("Javascript connected");

// Array declaration with 3 values
var todos = ["todo1", "todo2", "todo3"];

// Issue the prompt
var input = prompt("What would you like to do?");
while (input !== "quit") {
    if (input === "list") {
        // Generate a list of Todo's by calling its function
        listTodos();
    } else if (input === "new") {
        // Add a new Todo by calling its function
        addTodo();
    } else if (input === "delete") {
        // delete a todo by its index
        deleteTodo();
    }
    // Issue the prompt again
    input = prompt("What would you like to do?");
}

// ****************************
// ** Helper methods go here **
// ****************************

// Function to list all the todos, enlosed in a header
function listTodos() {
    console.log("**************")
    todos.forEach(function(color) {
        console.log(todos.indexOf(color) + ": " + color)
    });
    console.log("**************")
}

// Function to add a todo
function addTodo() {
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log("Todo added");
}

// Function to delete a todo by its index
function deleteTodo() {
    var indexToDelete = prompt("What index would you like to delete?");
    todos.splice(indexToDelete, 1);
    console.log("Todo with id " + indexToDelete + " deleted");
}