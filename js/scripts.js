

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "madikizelawill2@gmail.com",
        Password : "B0B03A16EED4B8C21E8B521C829C6B618588",
        To : 'madikizelawill2@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Contact from portfolio site",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone Number: " + document.getElementById("phone").value
            + "<br> Message: " + document.getElementById("message").value,
    }).then(
      message => alert("Message sent successfully!")
    );
}