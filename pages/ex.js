let day = "monday" ;
switch (true) {
    case day == "sunday" || day== "saturday":
       console.log("wake up at 10am")
       break;
    case day == "monday":
        console.log("wake up at 8am");
        break;
    case day =="tuesday":
        console.log("wake up at 9am");
        break;
    case day == "wednesday":
        console.log("wake up at 9am");
        break;
    case day =="thursday":
        console.log("wake uo at 9:30am");
    case day == "friday":
        console.log("wake up at 8:30am")
    default:
        console.log("this is not weekday")

} 