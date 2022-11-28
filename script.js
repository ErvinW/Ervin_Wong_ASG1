function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "ervintestemail@gmail.com",
        Password : "12N887322n05",
        To : 'ervinwongyongqi@gmail.com',
        From : document.getElementById("name").value,
        Subject : "Feedback",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

