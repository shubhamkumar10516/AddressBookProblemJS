{
// functions to check the correct pattern
let name;
let phzip;
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

}

