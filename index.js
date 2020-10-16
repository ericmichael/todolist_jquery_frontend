// Takes a task object as input with the following structure:
// {
//     title: "whatever"
//     completed: true
// }
// adds it to the todo list
function addToApp(taskObject){
    //2. clone the template to a variable, item
    //ex. let item = $("...").clone();

    //3. remove the class template from the cloned item

    //4. modify the clones text

    //5. modify whether the clone's checkbox is checked or not

    //6. modify whether or not the clone should have
    //   a class of complete or incomplete

    //7. add cloned item to the DOM

    //8. Binding: when the checkbox is clicked
    //   After a click, if it is now checked:
    //      - remove the css class 'incomplete'
    //      - add the css class 'complete'
    //      - send a request to your API to mark the item as 'complete'
    //   After a click, if it is now unchecked:
    //      - remove the css class 'complete'
    //      - add the css class 'incomplete'
    //      - send a request to your API to mark the item as 'incomplete'

    //9. Binding: when delete button is clicked
    //      - remove the item from the DOM
    //      - send a request to your API to delete the item
        
}


$(function () {

    // 1. Done for you - Fetch the todo items from your own server
    $.ajax("http://localhost:5000/tasks").done(function(tasks){
        tasks.forEach(function(task){
            addToApp(task);
        })
    })
    .fail(function(){
        $("#errorMsg").show();
    });

    //Support adding a task via the textbox
    //   - when "add"  is pressed it adds an item to the list
    //   - with all of the same capabilities as the other items
    //   - send a POST request to your API to add an item
    $("#add-button").click(function(){
        // make an object from the textbox data
        let task = {
            title: $("#textbox").val(),
            completed: false
        };

        // add it to the todo list
        addToApp(task);

        //10. send a POST request to your API to add the item
       
    });
});