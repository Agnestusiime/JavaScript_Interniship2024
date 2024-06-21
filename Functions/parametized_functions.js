// Parametized functions
function add_two_numbers(a, b) {
    const sum =  a + b;
    console.log(sum);
}
add_two_numbers(4, 6)

// returning functions

function calculate_age() {
    const year_of_birth = 2010;
    const age = 2024 - year_of_birth;
    return{
        year_of_birth, age
    }
}

console.log(calculate_age());

// Return function that receives parameters
function calculate_student_grade(stduent_name, student_class, marks){
    let student_grade = "";
    if (marks >= 90) {
        student_grade = "D1";
    }else if (marks > 80 && marks < 90) {
        student_grade = "D2";
    }else{
        student_grade = "Not a distinction";
    }
    return `${stduent_name} in class ${student_class} scored ${marks} and got a grade of ${student_grade}`
}
console.log(calculate_student_grade("John", "SS3", 90));