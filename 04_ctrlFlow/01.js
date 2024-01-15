const usrLoggedIn = true
const upiId = false
const debitCard = false

if (usrLoggedIn && upiId || debitCard) {   
    console.log('Welcome')
}
else {
    console.log('Please login and enter eirther debit card or upi id')
}

const month = 4
switch (month) {
    case 1:
        console.log("Jan");
        break;                              // if break is not used then all under code would have been printed other than default
    case 2:
        console.log("Feb");
        break;                                  // break is used to break the flow
    case 3:
        console.log("march");
        break;
    default:
        console.log("Month not avialable");
        break;
}

