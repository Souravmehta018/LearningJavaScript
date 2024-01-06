// this is how API usually look
{
    "name": "name",
    "type": "type",
    "description": "description",
    "required": "required",
    "default": "default",
    "example": "example"
}       //this is just for uderstanding, API are usually in form of Objects
// exapmle url: https://api.github.com/users/souravmehta

// but sometimes API also in form of Array
// exapmle url: randomuser.me/api
//for better understanding paste it in jsonformatter.org
// Here in tree structure it is easier to understand that the result consists of an object
// and inside that object there is an array called Result, and another object called info
// thus we can easily acces info accordingly