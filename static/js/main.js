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


//Month name

    if (mm==1){
        monthName = "January";
    }
    else if(mm==2){
        monthName = "February";

    }
    else if(mm==3   ){
        monthName = "March";

    }
    else if(mm==4){
        monthName = "April";

    }
    else if(mm==5){
        monthName = "May";

    }
    else if(mm==6){
        monthName = "June";

    }
    else if(mm==7){
        monthName = "July";

    }
    else if(mm==8){
        monthName = "August";

    }
    else if(mm==9){
        monthName = "September";

    }
    else if(mm==10){
        monthName = "October";

    }
    else if(mm==11){
        monthName = "November";

    }
    else if(mm==12){
        monthName = "December";

    }

//Age
     var dob_f =  (dd+ "/" + mm  + "/" +year);

     var dob_n = new Date(dob_f);  

     //calculate month difference from current date in time  
     var month_diff = Date.now() - dob_n.getTime();  
       
     //convert the calculated difference in date format  
     var age_dt = new Date(month_diff);   
       
     //extract year from date      
     var year_ag = age_dt.getUTCFullYear();  
       
     //now calculate the age of the user  
     var age = Math.abs(year_ag - 1970);  

     if (age>1){
         y = "Years"
     }
     else{
         y = "Year"
     }
       
 
//Star Sign
    
    var zodiacSigns = {
        'one':'Capricorn',
        'two':'Aquarius',
        'three':'Pisces',
        'four':'Aries',
        'five':'Taurus',
        'six': 'Gemini',
        'seven':'Cancer',
        'eight':'Leo',
        'nine': 'Virgo',
        'ten':'Libra',
        'eleven':'Scorpio',
        'twelve':'Sagittarius'
      }
    
      if((mm == 1 && dd <= 20) || (mm == 12 && dd >=22)) {
        star = zodiacSigns.one;
        meaning = "TIf you want someone who's perpetually motivated to achieve on your team, you're going to want to tap someone whose chart includes the cardinal earth sign Capricorn. People born with Cap are on a lifelong climb up a series of increasingly steep mountains, as they're driven to put their noses to the grindstone, succeed, and earn recognition for their diligent, no-nonsense work. In fact, it's for this reason that they have a rep for being workaholics. But they're also extremely loyal, often exhibit a gut-busting hilarious dry sense of humor, and ability to show you exactly what's possible when you commit to a pragmatic, steady, grounded approach. John Legend is a perfect example of an industrious double Cap."
      } else if ((mm == 1 && dd >= 21) || (mm == 2 && dd <= 18)) {
        star = zodiacSigns.two;
        meaning = "The fixed air sign is making plenty of headlines as we head into what's been coined the Age of Aquarius. Quirky, generally progressive, skeptical, and social (albeit in a cool, aloof, friends-with-everyone way), those with the Water Bearer's influence in their charts are wired to prioritize we over me, gravitating to causes and activities that hold the greater good of society as a whole in mind. (Look no further than Alicia Keys, who has a stellium, meaning three or more signs, in Aquarius: her sun, Mercury, and Mars.) They gravitate to more platonic relationships than deeply intimate entanglements and might even opt for non-traditional arrangements, as they love to strike out against convention whenever possible. And given electric Uranus' involvement, they're tech-savvy and science-minded."
      } else if((month == 2 && day >= 19) || (mm == 3 && dd  <= 20)) {
        star = zodiacSigns.three;
        meaning = "Imagine not only being super-tuned into your own feelings but being wired to pick up on and take on everyone else's emotions. Now you're in the headspace of a person who has the significant presence of mutable water sign Pisces in their chart. Incredibly sensitive and intuitive, they are the healers, the hopeless romantics, the artists, and the escapists of the zodiac. While they have an instinct to get swept up in otherworldly daydreams to get away from any emotional pain, the healthiest way for them to channel these deeply-felt emotions is through creative outlets like theater, music, or poetry. "
      } else if((month == 3 && day >= 21) || (mm == 4 && dd  <= 20)) {
        star = zodiacSigns.four;
        meaning = "The cardinal fire sign is known for being dynamic, athletic, and having an insatiable appetite for winning. For this reason, they take great pride in being early adopters of anything and everything from the hottest new sneaker drop to the latest iPhone. And they pretty much live to compete and argue. Ram people tend to have the makings of a pro athlete, trend-setting influencer, or lawyer (former prosecutor and now Vice President Kamala Harris was born with her moon in Aries."
      } else if((month == 4 && day >= 21) || (mm == 5 && dd  <= 20)) {
        star = zodiacSigns.five;
        meaning = "The fixed earth sign has quite a reputation for being the most stubborn one of the zodiac, but remember, there are fixed signs in each element! Thanks to their Venusian influence, Taureans are actually fairly chill. They're known for loving luxury and indulgence, being super-loyal, and enjoying art (whether they create or just appreciate it). (Sound a bit like Ariana Grande? Although her sun is in Cancer, her Venus is in sweet Taurus."
      } else if((month == 5 && day >= 21) || (mm == 6 && dd  <= 20)) {
        star = zodiacSigns.six;
        meaning = "The word mercurial might have very well been created for Gemini, the mutable air sign that lives for communication in all forms. They're lovers of sharing whatever is on their mind, whenever, however. (Amy Schumer's sun and Venus are in the loquacious air sign.) Although, don't assume they're always outgoing. They can be reserved and shy one minute and incredibly chatty the next. Given their innate mastery of language and social skills, they tend to have a wide, diverse circle of friends and gravitate to career paths that allow them to express themselves and utilize their super-buzzy brains (think: marketing/PR, politics, publishing."
      } else if((month == 6 && day >= 22) || (mm == 7 && dd  <= 22)) {
        star = zodiacSigns.seven;
        meaning = "The cardinal water sign, influenced by the shimmering maternal moon, is one of the greatest dreamers and do-ers of the zodiac. As the ruler of the Fourth House, which deals with family and home life, they're homebodies who were pretty much born for quarantine, prioritizing bolstering their connections with loved ones and achieving a lasting sense of security. But their crabbiness absolutely will come into play when they're frustrated, feel put upon, or are otherwise catapulted into a moody headspace. They'll go into their self-protective shells, requiring time away from others to take care of themselves before they can get back to taking care of everyone else. "
      } else if((month == 7 && day >= 23) || (mm == 8 && dd  <= 23)) {
        star = zodiacSigns.eight;
        meaning = "The fixed fire sign is ruled by the confident sun, which informs their positive, cheerful, gung-ho vibe. Driven and self-assured leaders, they tend to be oriented toward taking action in life, and they're born feeling like they can accomplish their wildest dreams thanks to a glimmery combo of magnetism, luck, and endlessly believing in themselves. (Former President Barack Obama's sun and Mercury are in the charismatic fire sign.)"
      } else if((month == 8 && day >= 24) || (mm == 9 && dd <= 23)) {
        star = zodiacSigns.nine;
        meaning = "The mutable earth sign might very well be mistaken as an air sign given the influence of Mercury, which means their minds are pretty much going nonstop. Lovers of lists, spreadsheets, and blank journals, Virgos are the go-to researchers, organizers, and pretty much A students of the zodiac. They're also perfectionists who adore working hard to make the end result of any pursuit just right — whether that's a recipe, a professional project, or search for a partner. (Or in the case of Beyonce, whose sun is in the earth sign, the entertainment and art we can't get enough of.)"
      } else if((month == 9 && day >= 24) || (mm == 10 && dd <= 23)) {
        star = zodiacSigns.ten;
        meaning = "The cardinal air sign was born to bring balance, harmony, and justice to their work and relationships. Given their Venusian influence, they're lovers of art and beauty who are known for being social butterflies and the ultimate hosts. And as the ruler of the Seventh House of Partnership, they prioritize one-on-one bonds, especially of the romantic variety. But although they tend to be interested in achieving serenity at all costs and connecting with a wide range of people, they're not sheep. They're go-getters (Serena Williams is one!) who will stand up for what they believe in, dreaming big and putting in the time and energy to ensure a fair result."
      } else if((month == 10 && day >= 24) || (mm == 11 && dd <= 22)) {
        star =zodiacSigns.eleven;
        meaning = "The fixed water sign is known for being one of — if not the — most private sign in the zodiac. Co-ruled by transformative Pluto and go-getter Mars, they're able to command people's attention with their intense, powerful presence and air of mystery. They're also very much in touch with their spirituality and sexuality, but they hold their cards close to their chest. (Fiercely private family man Ryan Gosling has his sun and Mercury in the water sign.)"
      } else if((mm == 11 && dd >= 23) || (mm == 12 && dd <= 21)) {
        star = zodiacSigns.twelve;
        meaning = "Ruled by fortunate Jupiter, which brings a magnifying effect to everything it touches, Sagittarians are big, life-loving personalities who adore globe-trotting, being at the heart of any party, and exploring as much as life has to offer. They're also born philosophers who are endlessly passionate about their beliefs and have a tendency to hop on a soapbox frequently in order to share their world view, often in a way that pulls no punches. President Biden has his ascendant in Sag, which is why he's known for his no-nonsense rhetoric. They're natural born comedians, entertainers, politicians, and/or generally"

      }
        


    


    //Date of Birth(dd/mm/yy)
    document.getElementById("dateBirth").innerHTML = "Your date of birth is: " + dd + " " + monthName + " "+ year;

    //Day of Birth(Mon, Tue, Wed....)
    document.getElementById("dayName").innerHTML = dayName;

    //Date of Age
    document.getElementById("age").innerHTML = age + " " + y;

    //Akan name()
    document.getElementById("akan").innerHTML = akanName;

     //Star sign
     document.getElementById("starSign").innerHTML =  "Your star sign is: " + star;


     document.getElementById("starMeaning").innerHTML =  "Your star sign is: " + meaning;





    return false;
    



        




    


};

