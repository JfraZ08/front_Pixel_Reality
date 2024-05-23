<template>
  <section id="home">
      <div class="manuel">
          <h1>Chaque image raconte une histoire laissez-nous racontez la vôtre</h1>
      </div>
      <div class="photo">
        <div class="photo_sous">
          <div class="text_photo">
            <h2><span class="p_title">P</span>hotographie</h2>
            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perferendis ducimus hic, voluptate natus mollitia. Illum velit necessitatibus enim maiores voluptate natus modi amet doloribus aperiam mollitia facere, culpa quaerat! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet eum veniam consequatur cum vero tempore nisi aliquam repellat totam incidunt! Voluptates omnis aut non tempora in necessitatibus quis inventore dignissimos!</p>
            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perferendis ducimus hic, voluptate natus mollitia. Illum velit necessitatibus enim maiores voluptate natus modi amet doloribus aperiam mollitia facere, culpa quaerat! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet eum veniam consequatur cum vero tempore nisi aliquam repellat totam incidunt! Voluptates omnis aut non tempora in necessitatibus quis inventore dignissimos!</p> 
            <div class="button">
              <button class="button_photo"><RouterLink to="/photographie">Voir Plus</RouterLink></button>
            </div>
          </div>
          <div class="second_photo"></div>
        </div>
      </div>
      <div class="paysage">
        <div class="paysage_sous">
          <div class="text_paysage">
            <h2><span class="ia">I</span>llustration IA</h2>
            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perferendis ducimus hic, voluptate natus mollitia. Illum velit necessitatibus enim maiores voluptate natus modi amet doloribus aperiam mollitia facere, culpa quaerat! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet eum veniam consequatur cum vero tempore nisi aliquam repellat totam incidunt! Voluptates omnis aut non tempora in necessitatibus quis inventore dignissimos!</p>
            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perferendis ducimus hic, voluptate natus mollitia. Illum velit necessitatibus enim maiores voluptate natus modi amet doloribus aperiam mollitia facere, culpa quaerat! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet eum veniam consequatur cum vero tempore nisi aliquam repellat totam incidunt! Voluptates omnis aut non tempora in necessitatibus quis inventore dignissimos!</p> 
            <div class="button_ia_parent">
              <button class="button_ia"><RouterLink to="/imagerieia">Voir Plus</RouterLink></button>
            </div>
          </div>  
          <div class="second_form"></div>
        </div>
      </div>
      <div class="logiciel">
        <div class="logiciel_sous">
          <div class="text_logiciel">
            <h2><span class="p_gramme">P</span>hotogrammétrie</h2>
            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perferendis ducimus hic, voluptate natus mollitia. Illum velit necessitatibus enim maiores voluptate natus modi amet doloribus aperiam mollitia facere, culpa quaerat! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet eum veniam consequatur cum vero tempore nisi aliquam repellat totam incidunt! Voluptates omnis aut non tempora in necessitatibus quis inventore dignissimos!</p>
            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perferendis ducimus hic, voluptate natus mollitia. Illum velit necessitatibus enim maiores voluptate natus modi amet doloribus aperiam mollitia facere, culpa quaerat! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet eum veniam consequatur cum vero tempore nisi aliquam repellat totam incidunt! Voluptates omnis aut non tempora in necessitatibus quis inventore dignissimos!</p> 
            <div class="button_logiciel_parent">
              <button class="button_logiciel"><RouterLink to="photogrammetrie">Voir Plus</RouterLink></button>
            </div>
          </div>
          <div class="second_logiciel"></div>
        </div>
      </div>
      <div class="qrcode">
        <div class="qrcode_sous">
          <div class="text_qrcode">
            <h2><span class="qr_title">Q</span>R Codes</h2>
            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perferendis ducimus hic, voluptate natus mollitia. Illum velit necessitatibus enim maiores voluptate natus modi amet doloribus aperiam mollitia facere, culpa quaerat! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet eum veniam consequatur cum vero tempore nisi aliquam repellat totam incidunt! Voluptates omnis aut non tempora in necessitatibus quis inventore dignissimos!</p>
            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perferendis ducimus hic, voluptate natus mollitia. Illum velit necessitatibus enim maiores voluptate natus modi amet doloribus aperiam mollitia facere, culpa quaerat! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet eum veniam consequatur cum vero tempore nisi aliquam repellat totam incidunt! Voluptates omnis aut non tempora in necessitatibus quis inventore dignissimos!</p> 
            <div class="button_qrcode_parent">
              <button class="button_qrcode"><RouterLink to="/qrcode">Voir Plus</RouterLink></button>
            </div>
          </div>
          <div class="second_qrcode"></div>
        </div>
      </div>
    </section>  
</template>



<style>
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Century Gothic', sans-serif;
  margin: 0;
  padding: 0;
}
#home {
  width: 100%;
  margin:0;
  
}
.manuel {
  width: 100%;
  height: 600px;
  background-image: url('../../public/images/manuel.jpeg');
  background-size: cover;
  z-index: -10;
  display: flex;
  justify-content: center;
  align-items: center;
}
.manuel h1 {
  color: white;
  font-size: 40px;
  text-align: center;
}

.sous_manuel {
  display: flex;
  justify-content: center;
  z-index: 10;
}

.photo {
  width: 100%;
  height: 600px;
  background-image: url('../../public/images/photo.jpeg');
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  z-index: -2;
}

.photo_sous {
  position: relative; 
  width: 400px;
  height: 600px;
  background-color: white;
  z-index: 10;
}

.second_photo{
  position: absolute;
  top: 0;
  right: -220px;
  bottom: 0;
  width: 260px;
  background-color: white;
  transform: skewX(-20deg);
  transform-origin: top right;
  z-index: -2;
}


.paysage {
  width: 100%;
  height: 600px;
  background-image: url('../../public/images/paysage.jpeg');
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  z-index: -2;
}

.paysage_sous {
  position: relative;
  width: 400px;
  height: 600px;
  background-color: white;
  padding-left: 80px;
  z-index: 10;
}

.second_form {
  content: '';
  position: absolute;
  top: 0;
  left: -120px;
  bottom: 0;
  width: 290px;
  height: 600px;
  background-color: white;
  transform: skewX(20deg);
  z-index: -1;  
}

.logiciel {
  background-image: url('../../public/images/3D.jpeg');
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: flex-start; /* alignement à gauche */
  z-index: -2;
}

.logiciel_sous {
  position: relative;
  width: 400px;
  height: 600px;
  background-color: white;
  z-index: 10;
}

.second_logiciel {
  position: absolute;
  top: 0;
  left: 400px; /* dépassement vers la gauche */
  bottom: 0;
  width: 250px; /* largeur ajustée */
  background-color: white;
  transform: skewX(-20deg);
  transform-origin: top left;
  z-index: -1;
}


.qrcode {
  width: 100%;
  height: 600px;
  background-image: url('../../public/images/qrcode.jpeg');
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  z-index: -2;
}

.qrcode_sous {
  width: 400px;
  height: 600px;
  background-color: white;
  position: relative;
  z-index: 10;
}

.second_qrcode {
  position: absolute;
  top: 0;
  left: -180px;
  bottom: 0;
  width: 290px;
  height: 600px;
  background-color:white;
  transform: skewX(20deg);
  z-index: -1;  
}


.photo_sous h2{
  color: black;
}

.paysage_sous h2{
  color: black;
  text-align: center;
  font-size: 27px;
}

.paysage_sous p {
  width: 300px;
  float: right;
  margin-right: 30px;
  margin-top: 20px;
  line-height: 20px;
  font-size: 12px;  
}

.ia {
  background-color: #00CC00;
  padding-left: 20px;
}

.text_photo {
  width: 300px;
  margin-left: 30px;
  margin-top: 10px;
}

.text_photo p {
  margin-right: 40px;
  margin-top: 20px;
  line-height: 20px;
  font-size: 12px; 
}

.text_paysage {
  margin-top:  10px;
  padding-left: 10px;
}

.p_title {
  background-color: #FFD400;
  padding-left: 20px;
}

.text_logiciel {
  width: 300px;
  margin-left: 30px;
  margin-top: 10px;
}

.text_logiciel p {
  margin-right: 40px;
  margin-top: 20px;
  line-height: 20px;
  font-size: 12px; 
}

.p_gramme {
  background-color: #0099FF;
  padding-left: 20px;
}

.text_qrcode {
  width: 300px;
  margin-left: 50px;
  margin-top: 20px;
}

.text_qrcode p {
  margin-right: 40px;
  margin-top: 20px;
  line-height: 20px;
  font-size: 12px;
  z-index: 10;  
}

.qr_title {
  background-color: #CC0000;
  padding-left: 20px;
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 60px;
}
.button_photo {
  background-color: #FFD400;
  width: 45px;
  height: 45px;
  text-transform: uppercase;
  font-size: 12px;
  text-align: center;
  border: none;
}
.button_ia_parent {
  width: 380px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button_ia {
  background-color: #00CC00;
  width: 45px;
  height: 45px;
  text-transform: uppercase;
  font-size: 12px;
  text-align: center;
  border: none;
  margin-left:30px;
}

.button_logiciel_parent {
  width: 260px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button_logiciel {
  width: 45px;
  height: 45px;
  text-transform: uppercase;
  font-size: 12px;
  text-align: center;
  border: none;
  margin-left:30px;
  background-color: #0099FF;
}

.button_qrcode_parent {
  width: 260px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button_qrcode {
  width: 45px;
  height: 45px;
  text-transform: uppercase;
  font-size: 12px;
  text-align: center;
  border: none;
  margin-left:30px;
  background-color: #CC0000;
}

button a{
  text-decoration: none;
  color: black;
}

</style>
