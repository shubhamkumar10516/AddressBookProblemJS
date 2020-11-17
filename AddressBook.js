{
// functions to check the correct pattern
let name;
let phzip;
let arr;
let namePattern = RegExp('^[A-Z]{1}[A-Za-z]{2,}$'); 
let addPattern = RegExp('^[A-Za-z0-9]{4,}$');
let zipPattern = RegExp('^[1-9]{3}[ ]*[0-9]{3}$');
let phonePattern = RegExp('^[1-9]{1}[ ][0-9]{9,}$');
let emailPattern = RegExp('^([a-zA-Z]+[a-zA-Z._0-9]*[a-zA-Z0-9]+)[@]([a-zA-Z]{2,}[.][a-zA-Z]{2,}[.][a-zA-Z]{2,})$');


let firstNameCheck = (name) =>  name.test(namePattern);
let lastNameCheck = (name) => name.test(namePattern);
let addressOrCityOrStateCheck = (name) => name.test(addPattern);
let phoneCheck = (phzip) => phzip.test(phonePattern);
let zipCheck = (phzip) => phzip.test(zipPattern);
let emailCheck = (name) => name.test(emailPattern);
//Function to delete name in addressBook
function deleteName(arr, name) {
    let indx = contactArr.map(item => item.firstName).indexOf(name);
    contactArray.splice(indx, 1);
}
// count no of contacts
let countContacts =  (arr) => {
    let count = arr.reduce((ac, cV) => ac.concat(cV), []).length;
    console.log("total number of contacts in array is: " + count);
};

//Checking duplicate name and then  adding
let addName = (arr, contact) => {
    for (contacts in arr) {
        if (contacts.firstName == contact.firstName) {
            throw 'Contact with Name already exist';
          }
    }
    arr.push(contact);
};

let searchByNameAndEdit = (contact, name , updatedName) => {
    contact.filter(person => person.firstName == name).forEach(person => person.firstName = updatedName);
};
class Contact{
    constructor(firstName, lastName, address, city , state, zip, phoneNumber, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    // method to return details
    getDetails(){
        return " Contact details: "+this.firstName+" "+this.lastName+" , "+this.address
        +" , "+ this.email;
    }
  }

  // taking input 
  
  let firstName = prompt("Enter first name");
  while(!firstNameCheck(firstName)){
    firstName = prompt("Enter first name");
  }

  let lastName = prompt("Enter first name");
  while(!lastNameCheck(lastName)){
    lastName = prompt("Enter last name");
  }
 
  let address = prompt("Enter address");
  while(!addressOrCityOrStateCheck(address)){
    address = prompt("Enter first name");
  }

  let city = prompt("Enter city");
  while(!addressOrCityOrStateCheck(city)){
    city = prompt("Enter first name");
  }

  let state = prompt("Enter state");
  while(!addressOrCityOrStateCheck(state)){
    state = prompt("Enter state");
  }

  let phone = prompt("Enter phone");
  while(!phoneCheck(phone)){
    phone = prompt("Enter phone");
  }

  let zip = prompt("Enter zip");
  while(!phoneCheck(zip)){
    zip = prompt("Enter zip");
  }


  let email = prompt("Enter email");
  while(!emailCheck(email)){
    email = prompt("Enter email");
  }
 let contact1 = new Contact(firstName, lastName, address, city, state, zip, phone, email);

 let contact1 = new Contact("Rahul", "Bose", "sector 13", "Kolkata", "Wb", 234567, 098757, "rahul@gmail.com");
 let contact2 = new Contact("Rohit", "Bose", "sector 12", "Kolkata", "Wb", 234567, 098757, "rohul@gmail.com");
 let contact3 = new Contact("Ram", "Bose", "sector 13", "Kolkata", "Wb", 234567, 098757, "ram@gmail.com");
 let contact4 = new Contact("Ramesh", "Bose", "sector 13", "Kolkata", "Wb", 234567, 098757, "rahul@gmail.com");
 let addressBook = new Array();
 addName(addressBook, contact1);
 addName(addressBook, contact2);
 addName(addressBook, contact3);
 addName(addressBook, contact4);
 searchByNameAndEdit(addressBook, "Rohit", "Nakul");
 deleteName(addressBook, "Ram");
 countContacts(addressBook);
}

