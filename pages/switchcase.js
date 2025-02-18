let trafficLight = "green";
let message ="";
switch(trafficLight) {
    case "green":
        message = "procced or continue driving";
        break; //use break to eliminate code from execution further
    case "yellow":
        message = "prepare to stop";
        break;
    case "red":
        message = "stop immediately";
        break;  // you can add more cases here for other traffic light colors as well.
    default:
        message = "unknown traffic light color";
}
//console.log(message);
let percentage=90;
let grade = "";
switch(true) { // it match exact match boolean value
    case percentage>=90: // this will return boolean value
        grade = "your grade is A";
        break;
    case percentage>=80:
        grade ="your grade is B"
        break;
    case percentage>=70:
        grade ="your grade is C"
        break;
    case percentage>=60:
        grade ="your grade is D"
        break;
    case percentage>=50:
        grade ="your grade is E"
        break;
    default:
        grade ="your grade is F"
}
console.log(grade)