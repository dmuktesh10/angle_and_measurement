exports.printMsg = {
  test: function() {
        console.log("This is a message from the demo package");
        },
  toRedian: function (degrees){
    var redians = degrees * Math.PI/180;
    return redians
  },
  toDegrees: function(redians){
    var degrees_in_decimal = redians * 180/Math.PI;
    var degrees_in_integer = Math.floor(degrees_in_decimal);
    var minutes_in_decimal = (degrees_in_decimal - degrees_in_integer) * 60;
    var minutes_in_integer = Math.floor(minutes_in_decimal);
    var seconds_in_decimal = (minutes_in_decimal - minutes_in_integer) * 60;
    var seconds_in_integer = Math.round(seconds_in_decimal);
    degrees = degrees_in_integer.toString() + ' ' + minutes_in_integer.toString() + ' ' +seconds_in_integer.toString();
    return degrees    
  }
}

