const setup = () => {

    //creeëren van een object deze manier wordt niet vaak gebruikt
    let student = {}; // een leeg object
    student.firstName = "John";
    student.lastName = "Doe";
    student.age = new Date (2000,1,1);
    student.eyeColor = "blue";

    console.log (student.firstName);

    //2e en kortere manier om een object te maken
    let student1 = {
        firstName :"John",
        lastName : "Doe",
        age : new Date (2000,1,1),
        eyeColor : "blue"
    }

    console.log(student1.firstName);
    console.log(student1.age);

    //van javascript naar json - string
    let text = JSON.stringify(student1);
    console.log(text);


    let student2 = {
        firstName :"John",
        lastName : "Doe",
        age : new Date (2000,1,1),
        eyeColor : "blue",
        address : {
            zipcode:8500,
            city: "Kortrijk"
        }
    }

    let text2 = JSON.stringify(student2);
    console.log(text2);

    let students = [
        {
            firstName :"John",
            lastName : "Doe",
            age : new Date (2000,1,1),
            eyeColor : "blue"
        },        {
            firstName :"John",
            lastName : "Doe",
            age : new Date (2000,1,1),
            eyeColor : "blue"
        },  {
            firstName :"John",
            lastName : "Doe",
            age : new Date (2000,1,1),
            eyeColor : "blue"
        }, {
            firstName :"John",
            lastName : "Doe",
            age : new Date (2000,1,1),
            eyeColor : "blue"
        }];

    let text3 = JSON.stringify(students);
    console.log(text3);

    //omgekeerde van string naar javascript object
    let tekstJS = JSON.parse(text3);
    console.log("JsonParse", + tekstJS[0].firstName );
}
window.addEventListener("load", setup);