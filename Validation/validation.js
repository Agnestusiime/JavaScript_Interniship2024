const log_user_details = (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const phone_number = document.getElementById("phone_number").value;
    const date_of_birth = document.getElementById("date_of_birth").value;
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm_password").value;
    const email = document.getElementById("email").value;

    let user_data = [];

    if (username) {
        error_message = document.getElementById("error_message");

        if (username.length >= 3 && username.length <= 15) {
            alert("Username is valid");
            user_data = {
                username,
            }
        } else {
            error_message.innerHTML = "Invalid Username";
        error_message.style.color = "red";
        }

    } else {   error_message.innerHTML = "Username is required";
        error_message.style.color = "red"; }

}







console.log({
    username,
    phone_number,
    date_of_birth,
    password,
    confirm_password,
    email
})
