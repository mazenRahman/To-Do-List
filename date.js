
exports.date = function(){
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();

//console.log(today.toLocaleDateString("en-US")); // 9/17/2016
return today.toLocaleDateString("en-En", options); // Saturday, September 17, 2016


}

exports.day = function(){

    var options = { weekday: 'long' };
    var today  = new Date();
    
    //console.log(today.toLocaleDateString("en-US")); // 9/17/2016
    return today.toLocaleDateString("hi-In", options); // Saturday, September 17, 2016
    
    
    }
