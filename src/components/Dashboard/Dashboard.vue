<template>
  <header class="Dashboard">
    <!--img src = "bubble.png" class = "Dashboard__bubble" alt = "" /-->
    <h1 class = "Dashboard__title">TITLE</h1>

    <div>
      <img src = "Square.png" class = "Dashboard__square" alt = "" />
      <p class = "Dashboard__logo" alt = "">Logo</p>
    </div>

    <p class = "Dashboard__slogan" alt ="">Slogan</p>

    <div className = 'Dashboard__buttons'>
      <a href="" class="Dashboard__login">Log In</a>
      <a href="" class="Dashboard__signup">Sign Up</a>
    </div>

  </header>
</template>

<script>
    export default {
        name: "Dashboard"
    }
</script>

<style scoped>
  body {
    padding: 0;
    margin: 0;
  }
  .Dashboard {
    padding: 0;
    margin: 0;
    position: relative;
    background-color:  #242323;
    width: 100vw;
    height: 100vh;
  }

  .Dashboard__bubble{
    position: absolute;
    width: 100%;
    height: 100%;
    top: -450px;
  }


  .Dashboard__title {
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

  .Dashboard__square {
    position: absolute;
    width: 115px;
    height: 115px;
    left: 50%;
    top: 45%;
    border: 8px solid #000000;
    box-sizing: border-box;
  }

  .Dashboard__logo {
    position: absolute;
    width: 130px;
    height: 86px;
    left: 51%;
    top: 43%;

    font-family: DM Serif Display;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 49px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .Dashboard__slogan {
    position: absolute;
    width: 316px;
    height: 50px;
    left: 50%;
    top: 60%;

    font-family: DM Serif Display;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 49px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;

  }

  .Dashboard__signup {
    position: absolute;
    width: 246px;
    height: 74px;
    left: 20%;
    top: 75%;

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

  .Dashboard__login {
    position: absolute;
    width: 246px;
    height: 74px;
    left: 70%;
    top: 75%;

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
