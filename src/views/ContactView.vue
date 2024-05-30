<script>
export default {
    data() {
        return {
            formData: {
                firstname: '',
                email: '',
                subject: '',
                message: ''
            }
        };
    },
    methods: {
        async submitForm() {
            try {
                const response = await fetch('http://localhost:3000/api/mail', {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify(this.formData)
                });
                const result = await response.text();
                if (result === 'success') {
                    console.log('Email sent : ', response.data)
                    this.formData.firstname = '';
                    this.formData.email = '';
                    this.formData.subject = '';
                    this.formData.message = '';
                } else {
                    console.log('Something went wrong')
                } 
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }
}
</script>

<template>
    <div class="form-container">
        <form class="contact-form" @submit.prevent="submitForm">
            <h2>CONTACT</h2>
            <input type="text" id="firstname" v-model="formData.firstname" placeholder="Votre nom"><br>
            <input type="email" id="email" v-model="formData.email" placeholder="Votre adresse mail"><br>
            <input type="test" id="subject" v-model="formData.subject" placeholder="Sujet"><br>
            <textarea id="message" v-model="formData.message" placeholder="Message" cols="30" rows="10"></textarea><br>
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