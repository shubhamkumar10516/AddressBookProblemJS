{
 /* uc1 Ability to create a Address Book
Contact with first and last names,
address, city, state, zip, phone number
and email*/

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
  let contact1 = new Contact("Ram", "Kumar", "Secotr 11", "Delhi", "Del", 123456, 4567463212, "ram@gmail.com");
  console.log(contact1.getDetails());
}