var nameValue;
var wins=0;

var tracker=[];

function myFunction(userChoice, initials){

    var choices = ["Rock","Paper","Scissors"];
    var cpuChoice = choices[Math.floor(Math.random()*3)];



   
    if (userChoice=='Rock'){
        if(cpuChoice=="Rock"){
            var ini = $("#name").val(); 
            $("body").append("<h2>"+ini+":"+userChoice+"</h2>"); 
            $("body").append("<h2>CPU:"+cpuChoice+"</h2>"); 
            $("body").append("<h2>Tie!</h2>"); 
            


        }
        else if(cpuChoice=="Paper"){
            var ini = $("#name").val(); 
            $("body").append("<h2>"+ini+":"+userChoice+"</h2>"); 
            $("body").append("<h2>CPU:"+cpuChoice+"</h2>"); 
            $("body").append("<h2>CPU Wins!</h2>"); 
            // var user = new trackerInfo(ini, wins+1);
            // $("body").append("<h1>"+user[0]+" Wins="+user[1]); 
        }
        else if(cpuChoice=="Scissors"){
            var ini = $("#name").val(); 
            $("body").append("<h2>"+ini+":"+userChoice+"</h2>"); 
            $("body").append("<h2>CPU:"+cpuChoice+"</h2>"); 
            $("body").append("<h2>"+ini+" Wins!</h2>");
            wins+=1; 
        }
    }


    else if(userChoice=='Paper'){
        if(cpuChoice=="Rock"){
            var ini = $("#name").val(); 
            $("body").append("<h2>"+ini+":"+userChoice+"</h2>"); 
            $("body").append("<h2>CPU:"+cpuChoice+"</h2>"); 
            $("body").append("<h2>"+ini+" Wins!</h2>"); 
            wins+=1; 


        }
        else if(cpuChoice=="Paper"){
            var ini = $("#name").val(); 
            $("body").append("<h2>"+ini+":"+userChoice+"</h2>"); 
            $("body").append("<h2>CPU:"+cpuChoice+"</h2>"); 
            $("body").append("<h2>Tie!</h2>"); 
        }
        else if(cpuChoice=="Scissors"){
            var ini = $("#name").val(); 
            $("body").append("<h2>"+ini+":"+userChoice+"</h2>"); 
            $("body").append("<h2>CPU:"+cpuChoice+"</h2>"); 
            $("body").append("<h2>CPU Wins</h2>");
        } 
    }
    else if(userChoice=='Scissors'){
         if(cpuChoice=="Rock"){
            var ini = $("#name").val(); 
            $("body").append("<h2>"+ini+":"+userChoice+"</h2>"); 
            $("body").append("<h2>CPU:"+cpuChoice+"</h2>"); 
            $("body").append("<h2>CPU Wins</h2>"); 


        }
        else if(cpuChoice=="Paper"){
            var ini = $("#name").val(); 
            $("body").append("<h2>"+ini+":"+userChoice+"</h2>"); 
            $("body").append("<h2>CPU:"+cpuChoice+"</h2>"); 
            $("body").append("<h2>"+ini+" Wins!</h2>");  
            wins+=1; 
        }
        else if(cpuChoice=="Scissors"){
            var ini = $("#name").val(); 
            $("body").append("<h2>"+ini+":"+userChoice+"</h2>"); 
            $("body").append("<h2>CPU:"+cpuChoice+"</h2>"); 
            $("body").append("<h2>Tie!</h2>");
        }
    }
}

//Class for the object
function TrackerInfo(name, wins){
    this.name = name,
    this.wins = wins
}

//Object Array

function objectSave(){

    nameValue = $("#name").val();
    
    use = new TrackerInfo(nameValue, wins); 
    console.log(use);
    
    for(i=0; i<tracker.length; i++){
        if(nameValue==tracker[i].name){
            tracker[i].wins+=wins; 
        }
        else{
           var use=new TrackerInfo(nameValue, wins);
           tracker.push(use); 
        }
    }

}


// $(document).ready(function(){
//     $("button").click(function(){
//         console.log("button is clicked"); 
//         console.log($(this).html()); 
//     });
// });


