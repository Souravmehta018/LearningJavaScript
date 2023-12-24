// singletone
const tUser = new Object();     // singletone object
const tiUser = { }              // non singletone object

// there is no other difference between these two objects
tUser.id = "5467sd";
tUser.name = "Sourav";
tUser.isLoggedIn = false;

console.log(tUser);

const tinUser = {
    name: {
        fullname : {
            firstname: "Sourav",
            lastname: "Mehta"
        }
    }
} // creating nested objects

console.log(tinUser.name.fullname.firstname);