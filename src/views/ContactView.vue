<template>
    <div class="form-container">
       <p>Une nouvelle page de contact arriveras très prochainement</p>
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