<template>
  <div class = "EnterLocation">


    <div class = "EnterLocation__menu">
      <p class = "EnterLocation__name" >NAME OF USER</p>


      <div class = "EnterLocation__options">
        <a href="/AfterLogin/AfterLogin.html" class="EnterLocation__faqs">Covid-19 FAQ's</a>
        <a href="" class="EnterLocation__symptoms">Input Symptoms</a>
        <a href="/EnterLocation/EnterLocation.html" class="EnterLocation__location">Enter Location</a>
        <a href="https://www.worldometers.info/coronavirus/" class="EnterLocation__tracker">Covid-19 Tracker</a>
        <a href="/Login/Login.html" class="EnterLocation__logout">Log Out</a>
      </div>

    </div>


    <div class = "EnterLocation__content">

      <div class="EnterLocation__location__container">
        <h2 class="EnterLocation__location__ask">Enter your postal code:</h2>
        <input type="text" name = "" class="EnterLocation__location__input" placeholder="A1B 2C3">
        <a href="/DisplayHospital/DisplayHospital.html" class="EnterLocation__submit__btn">Submit</a>
      </div>

    </div>

  </div>
</template>

<script>
    export default {
        name: "EnterLocation"
    }
</script>

<style scoped>
  body {
    padding: 0;
    margin: 0;
  }

  .EnterLocation {
    padding: 0;
    margin: 0;
    position: relative;
    background-color:  #242323;
    width: 100vw;
    height: 100vh;
  }

  .EnterLocation__menu {
    position: absolute;
    width: 20%;
    height: 100%;
    left: 0px;
    top: 0px;

    background: linear-gradient(180deg, #75DBF0 0%, #4B87FE 100%), #C4C4C4;
  }

  .EnterLocation__name {
    position: absolute;
    width: 350px;
    height: 74px;
    left: 10%;
    top: -2%;

    font-family: DM Serif Display;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 41px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
  }

  .EnterLocation__options {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 10%;

    background: linear-gradient(180deg, #4B87FE 0%, #6FCFF2 100%), #4B87FE;
  }

  .EnterLocation__faqs {
    position: absolute;
    width: 80%;
    height: 7%;
    left: 10%;
    top: 10%;
    background: rgba(255, 255, 255, 0.31);
    border-radius: 30px;

    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    align-items: center;
    text-align: center;
    line-height: 60px;
    text-decoration: none;
    color: #000000;
  }

  .EnterLocation__symptoms {
    position: absolute;
    width: 80%;
    height: 7%;
    left: 10%;
    top: 25%;
    background: rgba(255, 255, 255, 0.31);
    border-radius: 30px;

    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    align-items: center;
    text-align: center;
    line-height: 60px;
    text-decoration: none;
    color: #000000;
  }

  .EnterLocation__location {
    position: absolute;
    width: 80%;
    height: 7%;
    left: 10%;
    top: 40%;
    background: rgba(255, 255, 255, 0.31);
    border-radius: 30px;

    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    align-items: center;
    text-align: center;
    line-height: 60px;
    text-decoration: none;
    color: #000000;
  }

  .EnterLocation__tracker {
    position: absolute;
    width: 80%;
    height: 7%;
    left: 10%;
    top: 55%;
    background: rgba(255, 255, 255, 0.31);
    border-radius: 30px;

    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    align-items: center;
    text-align: center;
    line-height: 60px;
    text-decoration: none;
    color: #000000;
  }

  .EnterLocation__logout {
    position: absolute;
    width: 80%;
    height: 7%;
    left: 10%;
    top: 70%;
    background: rgba(255, 255, 255, 0.31);
    border-radius: 30px;

    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    align-items: center;
    text-align: center;
    line-height: 60px;
    text-decoration: none;
    color: #000000;
  }

  .EnterLocation__right {
    position: absolute;
    left: 50%;
    top: 70%;
    color: white;
  }

  .EnterLocation__location__ask {
    position: absolute;
    width: 350px;
    height: 74px;
    left: 25%;
    top: 5%;

    font-family: DM Serif Display;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 41px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
  }

  .EnterLocation__location__input {
    position: absolute;
    width: 486px;
    height: 68px;
    left: 47.5%;
    top: 7.5%;

    border: 1px solid black;
    background: #75DBF0;
    border-radius: 90px;


    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    align-items: center;
    text-align: center;
    line-height: 75px;


    text-decoration: none;

    color: #000000;
  }

  .EnterLocation__submit__btn {
    position: absolute;
    width: 200px;
    height: 68px;
    left: 85%;
    top: 7.5%;

    border: 1px solid black;
    background: #4B87FE;
    border-radius: 90px;


    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    align-items: center;
    text-align: center;
    line-height: 75px;


    text-decoration: none;

    color: #000000;
  }



</style>
