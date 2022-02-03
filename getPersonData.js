// Method prompts user and returns the chosen gender of user
function personGender(){
    loop = true;
    let gender;
    do {
        // Prompt user
        numberPick = parseInt(window.prompt("Enter\n1 -> Male\n2 -> Female"))
        // Check user input
        switch (numberPick){
            case 1:
                gender = "male";
                loop = false;
                break;
            case 2:
                gender = "female";
                loop = false;
                break;
            default:
                alert("Invalid Input");
                break;
        }
    } while (loop);
    return gender;
}

// Method prompts user and returns age of user
function personAge(){
    loop = true;
    let age;
    do {
        // Prompt user
        age = window.prompt("Age:");
        // Check input
        age == parseInt(age) ?
        loop = false : alert("Input not an age!");
    } while (loop);
    return age;
}

// Method checks name input by user for validation
function checkName(name){
    let rightInput = true;
    // Loop through each character in the string 'name'
    for (let count = 0; count < name.length; count++){
        // Check each character
        if (name[count] == parseInt(name[count])){
            alert("Name cannot be a number");
            rightInput = false;
            break;
        }
        else{
            if (name[count] == " "){
                alert("Name cannot contain a space");
                rightInput = false;
                break;
            }
        }
    }
    return rightInput;
}

/* Method receives argument to determine whether
name is either first name or last name,
prompts user and returns name of user
*/
function personName(postion){
    let loop = true;
    let name;
    do {
        // Prompt user
        name = window.prompt(postion + " Name:");
        // Check input using ternary operator 
        name == "" ? 
        alert("Fill in your name"): name == parseInt(name) ?
        alert("Name cannot be a number") : checkName(name) === false ?
        alert("Invalid Input") : loop = false;
    } while (loop);
    return name;
}

let MyStudent = {}

let firstName = personName("First");
let lastName = personName("Last")
MyStudent.fullname = `${firstName} ${lastName}`;
MyStudent.age = personAge();
MyStudent.gender = personGender();

let personData = `My name is ${MyStudent.fullname}.
I am a ${MyStudent.gender} and ${MyStudent.age}yrs old.`;

alert(personData);
document.write(personData);
