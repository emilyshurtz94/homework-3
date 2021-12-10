# Password Generator Requirements
---

* When the button is clicked it will generate a password.
* The user will be presented with a series of prompts to fullfill password criteria.
+ The user will be able to choose a length between 8-128 characters.
* The user will have the option to include lowercase, uppercase, numeric, and special characters.
* After the user completes each prompt a password will meet the criteria the user chose.
* The password will generate and appear in an alert or will be written on the page.
---

## Screenshot of Password Generator


---

### Link to deployed application

---


var passwordLower= confirm("Would you like to add lowercase letters");
if (lowerCase===true){
  for(var i=0;i<passwordLength; i++){
    var possibleIndex=Math.floor(Math.random()* lowerCase.length);
    var userLowerCase = lowerCase[possibleIndex];

  }

  // window.alert("Password Criteria")

// window.prompt("include lowercase")

// window.prompt("include numbers")

// window.prompt("include special characters")


// do a for loop
// join method to join the arrays "firstsetsecondsetthirdsetfourthset"-no spaces
// push or shift the array
// result.join[ ]