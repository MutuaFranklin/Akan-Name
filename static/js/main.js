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

// Trim the first two numbers of the year to get the century digits
    var str_cc = year.toString();
    var cc = Number(str_cc.slice(0, 2));


// Trim the last two numbers of the year to get the year digits
    var str_yy = year.toString();
    var yy = Number(str_yy.slice(2, 4));


    var mm = month;
    var dd = date;


    var day = ( ( ( (cc/4) -2 * cc-1) + ((5* yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7).toFixed();

// Day name and Akan name
// sex 1 = male. sex 2 = female

    if (day == 0){
        dayName = "Sunday";
        if (sex == 1){
            akanName = "Kwasi";
        }
        else{
            akanName = "Akosua";
        }
    }
    else if (day == 1){
        dayName = "Monday";
        if (sex == 1){
            akanName = "Kwadwo";
        }
        else{
            akanName = "Adwoa";
        }
    }
    else if (day == 2){
        dayName = "Tuesday";
        if (sex == 1){
            akanName = "Kwabena";
        }
        else{
            akanName = "Abena";
        }
    }
    else if (day == 3){
        dayName = "Wednesday";
        if (sex == 1){
            akanName = "Kwaku";
        }
        else{
            akanName = "Akua";
        }
    }
    else if (day == 4){
        dayName = "Thursday";
        if (sex == 1){
            akanName = "Yaw";
        }
        else{
            akanName = "Yaa";
        }
    }
    else if (day == 5){
        dayName = "Friday";
        if (sex == 1){
            akanName = "Kofi";
        }
        else{
            akanName = "Afua";
        }
    }
    else if (day == 6){
        dayName = "Saturday";
        if (sex == 1){
            akanName = "Kwame";
        }
        else{
            akanName = "Ama";
        }
    }


        




    


};

