const leapYears = function(year) {
    
    if(year % 4 == 0){                      
        if(year % 100 == 0){                // if the year is divisible by 100
            if(year % 400 == 0){            // then it needs to be divisible by 400 to be a leap year
                return true;
            }
        }   else if (year % 100 != 0){      // if the year is divisible by 4 and not by 100, it's definetly a leap year
                return true;
        }
    }
    return false;                           // if none of the statements are true, then it returns false

};

// Do not edit below this line
module.exports = leapYears;
