<!-- <script>
const contactform = document.querySelector('.contact-form');
let firstname = document.getElementById('firstname');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

contactform.addEventListener('submit', (e)=>{
    e.preventDefault();

    let formData = {
        firstname: firstname.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }
    
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onload = function(){
        console.log(xhr.responseText)
        if (xhr.responseText == 'success') {
            alert('Email sent');
            firstname.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        } else {
            console.log('Something went wrong')
        }
    }

    xhr.send(JSON.stringify(formData))
})
</script> -->

<template>
    <div class="form-container">
        <form class="contact-form">
            <h2>CONTACT</h2>
            <input type="text" id="firstname" placeholder="Votre nom"><br>
            <input type="email" id="email" placeholder="Votre adresse mail"><br>
            <input type="test" id="subject" placeholder="Sujet"><br>
            <textarea id="message" placeholder="Message" cols="30" rows="10"></textarea><br>
            <input type="submit" class="submit" value="Envoyer">
        </form>
    </div>
</template>
<style>

.form-container {
    position: relative;
    left: 20%;
    width: 60%;
    height: 100vh;
    background-color: white;
}

.contact-form {
    position: absolute;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 600px;
}

input, textarea {
    width: 100%;
    margin-top: 2rem;
    border: none;
    border-bottom: 1px solid black;
}

.submit {
    border: 1px solid black;
    padding: 1rem;
    text-align: center;
    background-color: white;
    cursor: pointer;
}

.submit:hover {
    opacity: 0.6;
}</style>