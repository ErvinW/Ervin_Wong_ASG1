function myFunction(event){
    var feedback_name = document.getElementById("name").value;
    var feedback_email = document.getElementById("email").value;
    var feedback_message = document.getElementById("message").value;

    localStorage.setItem("feedback_name", feedback_name);
    localStorage.setItem("feedback_email", feedback_email);
    localStorage.setItem("feedback_message", feedback_message);
}