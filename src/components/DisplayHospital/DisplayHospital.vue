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

    <div class = "DisplayHospital__1">
      <a href="#openModal1" class="DisplayHospital__btn1">Victoria Hospital</a>
      <p class="DisplayHospital__address1">800 Commissioners Rd E, London, ON N6A 5W9</p>
      <p class="DisplayHospital__distance1">11.5km</p>

      <div id = "openModal1" class = "modalDialog">
        <div>
          <a href = '#close' title = "Close" class = "Close">X</a>
          <h1 class = "DisplayHospital__available">Number of Available:</h1>
          <img src = "doctors.png" class = "DisplayHospital__doctors" alt = "" />
          <img src = "gloves.png" class = "DisplayHospital__gloves" alt = "" />
          <img src = "masks.png" class = "DisplayHospital__masks" alt = "" />
          <img src = "medications.png" class = "DisplayHospital__medications" alt = "" />
          <img src = "nurses.png" class = "DisplayHospital__nurses" alt = "" />
          <img src = "ventilatedbeds.png" class = "DisplayHospital__ventilatedbeds" alt = "" />
          <p class = "DisplayHospital__doctors1num">Doctors : 55</p>
          <p class = "DisplayHospital__gloves1num">Gloves : 55</p>
          <p class = "DisplayHospital__masks1num">Masks : 55</p>
          <p class = "DisplayHospital__medications1num">Medications : 55</p>
          <p class = "DisplayHospital__nurses1num">Nurses : 55</p>
          <p class = "DisplayHospital__ventilatedbeds1num">Ventilated Beds : 55</p>
        </div>
      </div>

    </div>

    <div class = "DisplayHospital__2">
      <a href="#openModal2" class="DisplayHospital__btn2">University Hospital</a>
      <p class="DisplayHospital__address1">339 Windermere Rd, London, ON N6A 5A</p>
      <p class="DisplayHospital__distance1">5.6km</p>

      <div id = "openModal2" class = "modalDialog">
        <div>
          <a href = '#close' title = "Close" class = "Close">X</a>
          <h1 class = "DisplayHospital__available">Number of Available:</h1>
          <img src = "doctors.png" class = "DisplayHospital__doctors" alt = "" />
          <img src = "gloves.png" class = "DisplayHospital__gloves" alt = "" />
          <img src = "masks.png" class = "DisplayHospital__masks" alt = "" />
          <img src = "medications.png" class = "DisplayHospital__medications" alt = "" />
          <img src = "nurses.png" class = "DisplayHospital__nurses" alt = "" />
          <img src = "ventilatedbeds.png" class = "DisplayHospital__ventilatedbeds" alt = "" />
          <p class = "DisplayHospital__doctors2num">Doctors : 66</p>
          <p class = "DisplayHospital__gloves2num">Gloves : 66</p>
          <p class = "DisplayHospital__masks2num">Masks : 66</p>
          <p class = "DisplayHospital__medications2num">Medications : 66</p>
          <p class = "DisplayHospital__nurses2num">Nurses : 66</p>
          <p class = "DisplayHospital__ventilatedbeds2num">Ventilated Beds : 66</p>
        </div>
      </div>

    </div>

    <div class = "DisplayHospital__3">
      <a href="#openModal3" class="DisplayHospital__btn3">St. Joseph's Hospital</a>
      <p class="DisplayHospital__address1">268 Grosvenor St, London, ON N6A 4V2</p>
      <p class="DisplayHospital__distance1">6.7km</p>

      <div id = "openModal3" class = "modalDialog">
        <div>
          <a href = '#close' title = "Close" class = "Close">X</a>
          <h1 class = "DisplayHospital__available">Number of Available:</h1>
          <img src = "doctors.png" class = "DisplayHospital__doctors" alt = "" />
          <img src = "gloves.png" class = "DisplayHospital__gloves" alt = "" />
          <img src = "masks.png" class = "DisplayHospital__masks" alt = "" />
          <img src = "medications.png" class = "DisplayHospital__medications" alt = "" />
          <img src = "nurses.png" class = "DisplayHospital__nurses" alt = "" />
          <img src = "ventilatedbeds.png" class = "DisplayHospital__ventilatedbeds" alt = "" />
          <p class = "DisplayHospital__doctors3num">Doctors : 77</p>
          <p class = "DisplayHospital__gloves3num">Gloves : 77</p>
          <p class = "DisplayHospital__masks3num">Masks : 77</p>
          <p class = "DisplayHospital__medications3num">Nurses : 77</p>
          <p class = "DisplayHospital__nurses3num">Nurses : 77</p>
          <p class = "DisplayHospital__ventilatedbeds3num">Ventilated Beds : 77</p>
        </div>
      </div>
    </div>





  </div>
</template>

<script>
    export default {
        name: "DisplayHospital"
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

  .DisplayHospital__1 {
    background: rgba(110, 220, 248, 0.541);
    position: absolute;
    width: 70%;
    height: 20%;
    border-radius: 30px;
    left: 25%;
    top: 20%;
  }

  .DisplayHospital__2 {
    background: rgba(110, 220, 248, 0.541);
    position: absolute;
    width: 70%;
    height: 20%;
    border-radius: 30px;
    left: 25%;
    top: 45%;
  }

  .DisplayHospital__3 {
    background: rgba(110, 220, 248, 0.541);
    position: absolute;
    width: 70%;
    height: 20%;
    border-radius: 30px;
    left: 25%;
    top: 70%;
  }

  .DisplayHospital__btn1 {
    position: absolute;
    top: 10%;
    left: 30%;
    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 70px;
    line-height: 18px;
    align-items: center;
    text-align: center;
    line-height: 60px;
    color: #000000;
  }

  .DisplayHospital__address1 {
    position: absolute;
    top: 40%;
    left: 33%;
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

  .DisplayHospital__distance1 {
    position: absolute;
    top: 70%;
    left: 50%;
    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    align-items: center;
    text-align: center;
    line-height: 4px;
    text-decoration: none;
    color: #000000;
  }


  .DisplayHospital__btn2 {
    position: absolute;
    top: 10%;
    left: 30%;
    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 70px;
    line-height: 18px;
    align-items: center;
    text-align: center;
    line-height: 60px;
    color: #000000;
  }

  .DisplayHospital__address2 {
    position: absolute;
    top: 40%;
    left: 33%;
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

  .DisplayHospital__distance2 {
    position: absolute;
    top: 70%;
    left: 50%;
    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    align-items: center;
    text-align: center;
    line-height: 4px;
    text-decoration: none;
    color: #000000;
  }


  .DisplayHospital__btn3 {
    position: absolute;
    top: 10%;
    left: 30%;
    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 70px;
    line-height: 18px;
    align-items: center;
    text-align: center;
    line-height: 60px;
    color: #000000;
  }

  .DisplayHospital__address3 {
    position: absolute;
    top: 40%;
    left: 33%;
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

  .DisplayHospital__distance3 {
    position: absolute;
    top: 70%;
    left: 50%;
    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    align-items: center;
    text-align: center;
    line-height: 4px;
    text-decoration: none;
    color: #000000;
  }

  .modalDialog {
    position: fixed;
    width: 100%;
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
    z-index: 99999;
    opacity:0;
    -webkit-transition: opacity 400ms ease-in;
    -moz-transition: opacity 400ms ease-in;
    transition: opacity 400ms ease-in;
    pointer-events: none;
  }

  .modalDialog:target {
    opacity:1;
    pointer-events: auto;
  }

  .modalDialog > div {
    width: 400px;
    width: 50%;
    height: 50%;
    position: relative;
    margin: 10% auto;
    padding: 5px 20px 13px 20px;
    border-radius: 10px;
    background: #fff;
    background: -moz-linear-gradient(#fff, #999);
    background: -webkit-linear-gradient(#fff, #999);
    background: -o-linear-gradient(#fff, #999);
  }

  .close {
    background: #606061;
    color: #FFFFFF;
    line-height: 25px;
    position: absolute;
    right: -12px;
    text-align: center;
    top: -10px;
    width: 24px;
    text-decoration: none;
    font-weight: bold;
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    border-radius: 12px;
    -moz-box-shadow: 1px 1px 3px #000;
    -webkit-box-shadow: 1px 1px 3px #000;
    box-shadow: 1px 1px 3px #000;
  }

  .close:hover { background: #00d9ff; }

  .DisplayHospital__available {
    position: absolute;
    top: 5%;
    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 60px;
    color: #000000;
  }

  .DisplayHospital__doctors {
    position: absolute;
    width: 45px;
    height: 45px;
    top: 30%;
  }
  .DisplayHospital__gloves {
    position: absolute;
    width: 45px;
    height: 45px;
    top: 55%;
  }
  .DisplayHospital__masks {
    position: absolute;
    width: 45px;
    height: 45px;
    top: 80%;
  }
  .DisplayHospital__medications {
    position: absolute;
    width: 45px;
    height: 45px;
    top: 30%;
    left: 50%
  }
  .DisplayHospital__nurses {
    position: absolute;
    width: 45px;
    height: 45px;
    top: 55%;
    left: 50%
  }
  .DisplayHospital__ventilatedbeds {
    position: absolute;
    width: 45px;
    height: 45px;
    top: 80%;
    left: 50%;
  }

  .DisplayHospital__doctors1num {
    position: absolute;
    left: 12%;
    top: 25%;

    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 60px;
    color: #000000;

  }
  .DisplayHospital__gloves1num {
    position: absolute;
    left: 12%;
    top: 50%;


    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 60px;
    color: #000000;
  }
  .DisplayHospital__masks1num {
    position: absolute;
    left: 12%;
    top: 75%;


    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 60px;
    color: #000000;
  }
  .DisplayHospital__medications1num {
    position: absolute;
    top: 25%;
    left: 62%;


    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 60px;
    color: #000000;
  }
  .DisplayHospital__nurses1num {
    position: absolute;
    top: 50%;
    left: 62%;

    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 60px;
    color: #000000;
  }
  .DisplayHospital__ventilatedbeds1num {
    position: absolute;
    top: 75%;
    left: 62%;


    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 60px;
    color: #000000;
  }

  .DisplayHospital__doctors2num {
    position: absolute;
    left: 12%;
    top: 25%;

    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 60px;
    color: #000000;

  }
  .DisplayHospital__gloves2num {
    position: absolute;
    left: 12%;
    top: 50%;


    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 60px;
    color: #000000;
  }
  .DisplayHospital__masks2num {
    position: absolute;
    left: 12%;
    top: 75%;


    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 60px;
    color: #000000;
  }
  .DisplayHospital__medications2num {
    position: absolute;
    top: 25%;
    left: 62%;


    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 60px;
    color: #000000;
  }
  .DisplayHospital__nurses2num {
    position: absolute;
    top: 50%;
    left: 62%;

    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 60px;
    color: #000000;
  }
  .DisplayHospital__ventilatedbeds2num {
    position: absolute;
    top: 75%;
    left: 62%;


    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 60px;
    color: #000000;
  }


  .DisplayHospital__doctors3num {
    position: absolute;
    left: 12%;
    top: 25%;

    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 60px;
    color: #000000;

  }
  .DisplayHospital__gloves3num {
    position: absolute;
    left: 12%;
    top: 50%;


    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 60px;
    color: #000000;
  }
  .DisplayHospital__masks3num {
    position: absolute;
    left: 12%;
    top: 75%;


    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 60px;
    color: #000000;
  }
  .DisplayHospital__medications3num {
    position: absolute;
    top: 25%;
    left: 62%;


    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 60px;
    color: #000000;
  }
  .DisplayHospital__nurses3num {
    position: absolute;
    top: 50%;
    left: 62%;

    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 60px;
    color: #000000;
  }
  .DisplayHospital__ventilatedbeds3num {
    position: absolute;
    top: 75%;
    left: 62%;


    font-family: Carme;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 60px;
    color: #000000;
  }
</style>
