
console.log("Starting program");
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


function addingNewUsers(users)
{
  
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
  var users = createMultArray(100,3);
  /*Add jason to the list*/
  users[0] = user;
  console.log(users);

  addingNewUsers(users);





}









