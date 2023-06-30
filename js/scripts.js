

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "madikizelawill2@gmail.com",
        Password : "password",
        To : 'madikizelawill2@gmail.com',
        From : document.getElementById().value,
        Subject : "Contact from portfolio site",
        Body : "Name: " + document.getElementById().value
            + "<br> Email: " + document.getElementById().value
            + "<br> Phone Number: " + document.getElementById().value
            + "<br> Message: " + document.getElementById().value
    }).then(
      message => alert("Message sent successfully!")
    );
}