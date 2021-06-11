//Display description and not form
function description(){
    document.getElementById("description").style.display = " block";
    document.getElementById("pform").style.display = "none";
}

//Display form and not description
function entryForm(){
    document.getElementById("pform").style.display = " block";
    document.getElementById("description").style.display = "none";
}

function getBirthDetails(){
    var date = document.getElementById("dob").value; 
    var month = document.getElementById("mob").value; 
    var year = document.getElementById("yob").value; 
    var sex = document.getElementById("gender").value; 


    if  (date<=0 || date>31){
        alert ("Invalid day");
    }

    if (month<= 0 || month > 12) {
        alert ("Invalid month");

    }

    if (year<= 1899) {
        alert ("Invalid year");

    }




        




    


};

