let monthNumberForSeaconCheck = 13;

switch(monthNumberForSeaconCheck){
    case 2:
    case 3: console.log("Spring");
            break;
    case 4:
    case 5:
    case 6: console.log("Summer");
            break;
    case 7:
    case 8: 
    case 9: console.log("Monsoon");
            break;
    case 10:
    case 11: console.log("Post Monsoon");
            break;
    case 12:
    case 1: console.log("Winter");
            break;
    
    default: console.log("No Month number is found to decribe the season");
    
}