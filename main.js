
console.log("Starting program");
var numOfUsers = 10
main();

/*add a user*/
function GetUsersInformation(user)
{
  return user = ["Jason", "Bourn", 45];
}

/*Creating two dimensional array*/
function createMultArray(sizeOfArray,sizeOfSecondArray)
{
  var array = [];

  for (var i=0;i< sizeOfArray;i++)
  {
      array[i] = new Array(sizeOfSecondArray);
  }

  return array;
}

/*Add more users to the array*/
function addingNewUsers(users)
{
  var newArray = [[ "Timika", "Lewter", 45 ],
  ["Kyoko", "Cremer", 56],  
  ["Everette", "Valerio", 14],  
  ["Jeremiah", "Rall", 19]];  

  for(var i =1; i<5;i++)
  {
    users[i] = newArray[i-1];
  }

}

function main()
{
  console.log("in main");
  var age = 0;
  var user = ["FirstName", "LastName", age];
  var SizeOfUser = 3;


  user = GetUsersInformation(user);
  console.log(user);

  /*create array of new users */
  var users = createMultArray(numOfUsers,3);
  /*Add jason to the list*/
  users[0] = user;
  console.log(users);

  addingNewUsers(users);
  console.log(users);




}









