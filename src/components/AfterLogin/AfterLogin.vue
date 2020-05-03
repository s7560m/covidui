<template>
  <div class = "AfterLogin">


    <div class = "AfterLogin__menu">
      <p class = "AfterLogin__name" >NAME OF USER</p>


      <div class = "AfterLogin__options">
        <a href="/AfterLogin/AfterLogin.html" class="AfterLogin__faqs">Covid-19 FAQ's</a>
        <a href="" class="AfterLogin__symptoms">Input Symptoms</a>
        <a href="/EnterLocation/EnterLocation.html" class="AfterLogin__location">Enter Location</a>
        <a href="https://www.worldometers.info/coronavirus/" class="AfterLogin__tracker">Covid-19 Tracker</a>
        <a href="/Login/Login.html" class="AfterLogin__logout">Log Out</a>
      </div>

    </div>


    <div class = "AfterLogin__display">
      <div class = "one">
        <h3 class = "q1">What is COVID-19?</h3>
        <p class = "a1">COVID-19 is the infectious disease caused by the most
          recently discovered coronavirus. This new virus and disease were unknown
          before the outbreak began in Wuhan, China, in December 2019. COVID-19 is
          now a pandemic affecting many countries globally.</p>
      </div>

      <div class = "two">
        <h3 class = "q2">What are the symptoms of COVID-19?</h3>
        <p class = "a2">The most common symptoms of COVID-19 are fever, dry cough, and tiredness.
          Some patients may have aches and pains, nasal congestion, sore throat or diarrhea. These
          symptoms are usually mild and begin gradually. Some people become infected but only have very
          mild symptoms.</p>
      </div>


      <div class = "three">
        <h3 class = "q3">What does it mean to self-isolate?</h3>
        <p class = "a3">Self-isolation is when a person who is experiencing fever, cough or other COVID-19
          symptoms stays at home and does not go to work, school or public places. This can be voluntarily
          or based on his/her health care provider’s recommendation. However, if you live in an area with
          malaria or dengue fever it is important that you do not ignore symptoms of fever. Seek medical help.
          When you attend the health facility wear a mask if possible, keep at least 1 metre distant from other
          people and do not touch surfaces with your hands. If it is a child who is sick help the child stick to this advice.</p>
      </div>

      <div class = "four">
        <h4 class = "q4">How to grocery shop safely?</h4>
        <p class = "a4">When grocery shopping, keep at least 1-metre distance from others and avoid touching your eyes, mouth and nose.
          If possible, sanitize the handles of shopping trolleys or baskets before shopping. Once home, wash your hands thoroughly and
          also after handling and storing your purchased products.</p>
      </div>

    </div>

  </div>
</template>

<script>
    export default {
        name: "AfterLogin",
      return: {
          data () {

          }
      }
    }
</script>

<style scoped>
  body {
    padding: 0;
    margin: 0;
  }

  .AfterLogin {
    padding: 0;
    margin: 0;
    position: relative;
    background-color:  #242323;
    width: 100vw;
    height: 100vh;
  }

  .AfterLogin__menu {
    position: absolute;
    width: 20%;
    height: 100%;
    left: 0px;
    top: 0px;

    background: linear-gradient(180deg, #75DBF0 0%, #4B87FE 100%), #C4C4C4;
  }

  .AfterLogin__name {
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

  .AfterLogin__options {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 10%;

    background: linear-gradient(180deg, #4B87FE 0%, #6FCFF2 100%), #4B87FE;
  }

  .AfterLogin__faqs {
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

  .AfterLogin__symptoms {
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

  .AfterLogin__location {
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

  .AfterLogin__tracker {
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

  .AfterLogin__logout {
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

  .AfterDisplay__display {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 20%;
    top: 0px;
  }

  .one {

  }

  .two {

  }

  .three {

  }

  .four {

  }
</style>
