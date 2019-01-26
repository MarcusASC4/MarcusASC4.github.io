$.ajax({
  url: 'https://randomuser.me/api/?results=1',

  success: function(data) {
 myfunction(data); 
    }
});

function myfunction(data){
   var userFirstName=data.results[0].name.first; 
    var userLast=data.results[0].name.last; 
    var pic=data.results[0].picture.large;  
    var state=data.results[0].location.state; 
    var two=data.results[0].nat;
    

    

    

        $("#p").append("<p>"+userFirstName+" " + userLast+"</p>"); 
        $("#header").append("<img src ="+pic+">"); 
        $("#p2").append("<p>State: "+state+"</p>"); 

    $.ajax({
        url: "https://restcountries.eu/rest/v2/alpha?codes="+two, 
        
        
        success: function(data){
            
            var nameC= data[0].name;  


            $("#p2").append("<p> Country: "+nameC+"</p>"); 
        },       

    }); 
        
}


   