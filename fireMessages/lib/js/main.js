//Set database object
var database=firebase.database().ref(); 

//button executes this function
function updateDB(){
    var name = $("#name").val();
    var message = $("#message").val();
    console.log(name + " : " + message);

    //Update database here
    var newmessage={
        NAME:name, 
        MESSAGE:message
    }
    database.push(newmessage); 

}

database.on("child_added",function(rowData){
    var row=rowData.val(); 
    var name=row.NAME; 
    var message=row.MESSAGE; 
    var fulltext="<p>"+name+" : "+message+"</p>"; 
    $(".allMessages").append(fulltext); 

}); 