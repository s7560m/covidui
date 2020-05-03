<template>
  <div>
  <header class="Login">
    <!--img src = "bubble.png" class = "Login__bubble" alt = "" /-->
    <h1 class = "Login__title">Log In</h1>
  </header>

  <div class="Login__content">
    <div class="Login__email">
      <h2 class="Login__email__ask">Enter e-mail address:</h2>

      <input type="text" name = "" class="Login__email__input" placeholder="example@youremail.com">

      <img src = "envelope.png" class = "Login__envelope" alt = "" />

    </div>

    <div class="Login__pass">
      <h2 class="Login__pass__ask">Enter your password:</h2>

      <input type="text" name = "" class="Login__pass__input" placeholder="Password123">

      <img src = "key.png" class = "Login__key" alt = "" />

    </div>

    <input type="submit" value = "Submit" class = "Login__submit__btn">

  </div>
  </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
  body {
    padding: 0;
    margin: 0;
  }
  .Login {
    padding: 0;
    margin: 0;
    position: relative;
    background-color:  #242323;
    width: 100vw;
    height: 100vh;
  }

  .Login__bubble{
    position: absolute;
    width: 100%;
    height: 100%;
    top: -450px;
  }

  .Login__title {
    position: absolute;
    width: 253px;
    height: 84px;
    left: 45%;
    top: 15%;

    font-family: DM Serif Display;
    font-style: normal;
    font-weight: normal;
    font-size: 76px;
    line-height: 104px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
  }


  .Login__email__ask {
    position: absolute;
    width: 350px;
    height: 74px;
    left: 20%;
    top: 60%;

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


  .Login__email__input {
    position: absolute;
    width: 486px;
    height: 68px;
    left: 45%;
    top: 62.5%;

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



  .Login__pass__ask {
    position: absolute;
    width: 350px;
    height: 74px;
    left: 20%;
    top: 72.5%;

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

  .Login__pass__input {
    position: absolute;
    width: 486px;
    height: 68px;
    left: 45%;
    top: 75%;

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


  .Login__submit__btn {
    position: absolute;
    width: 200px;
    height: 68px;
    left: 55%;
    top: 90%;

    border: 1px solid black;
    background: #75DBF0;
    border-radius: 90px;
  }


  .Login__envelope {
    position: absolute;
    width: 45px;
    height: 45px;
    left: 47%;
    top: 64%;
  }


  .Login__key {
    position: absolute;
    width: 45px;
    height: 45px;
    left: 47%;
    top: 77%;
  }

  ::placeholder {
    color: black;
  }
</style>
