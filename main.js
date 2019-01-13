

console.log("starting test...");

var numberOfUsers = 15;
var maxAdditionOfUsers = 10;
var AverageAge = 27;

/*if statements*/
if(numberOfUsers < 100)
{
	console.log("The numberOfUsers is too low")
}

/*Add some additional users*/
for(i=0; i < maxAdditionOfUsers; i++)
{
	numberOfUsers += 1;
}
console.log( "The additional users + base : ", numberOfUsers);


if(numberOfUsers >= 20 && AverageAge < 30)
{
	console.log("We have a large younge user base!");
}

var day;
switch(new Date().getDay()) {
  	case 0:
    	text = "Sunday";
    	break;
  	case 1:
    	text = "Monday";
    	break;
  	case 2:
    	text = "Tuesday";
    	break;  
  	case 3:
    	text = "Wednsday";
    	break;
    case 4:
    	text = "Thursday";
    	break;
	case 5:
    	text = "Friday";
    	break;
	case 6:
    	text = "Saturday";
    	break;
}
console.log("Today is",text);

var clicks =0;

do{
	console.log("Hit q for exit. ")
	clicks++;

}
while(clicks < 13);

console.log("Number of clicks" , clicks, "\n\n");

console.log("end of program");











