<template>
<div id="app">
  <div class="menu-container">
    <h1>Nefi's Restaurant Review Spot</h1>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/suggest">Suggestions</router-link>
    </div>
  </div>
  <div class="home-container">
    <div class="content">
      <router-view />
    </div>
  </div>
  <div class='footer'>
    <div class='footer-item footer-one'>Email: nefiav@byu.edu</div>
    <div class='footer-item footer-two'>Phone: XXX-XXX-XXXX</div>
    <div class='footer-item footer-three'><a href="https://github.com/nefiav/restaurant.git">Github</a></div>
  </div>
</div>
</template>

<style>
* {
  box-sizing: border-box;
  color: black;
}

body {
  margin: 0px;
  background-color: #EEEEEE;
  padding-bottom:60px;
}

a {
  color: black;
}

a:link {
  color: black;
  text-decoration: none;
}

a:hover {
  color: #959393;
}
a:active {
  color: #75c7b5;
}

/* Start of Menu  */
.menu-container {
  color: #fff;
  background-color: #959393;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}

.intro {
  font-size: 20px;
}

img {
    max-width: 100%;
    max-height: 100%;
}

/* Start of Home container */

.home-container{
  padding: 20px;
  display: flex;
  justify-content: center;
}

/* Start of Contact Container */


.card-title {
  font-family: Quicksand, Arial, Helvetica, sans-serif;
  font-size: 36px;
}

/* Start of Footer  */
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #0d7fa9;
  color: white;
  display: flex;
  justify-content: center;
}

.footer-item, .footer-item a {
  padding: 20px;
  color: white;
}



/* Media Queries */

/* Mobile Styles */
@media only screen and (max-width: 400px) {

}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {

}

/* Desktop Styles */
@media only screen and (min-width: 961px) {

    .home-container, {
      height: 500px;
    }
    .contact-container {
      height: 100%;
    }

    .home-item {
      width: 1000px;
      flex-direction: row;
      justify-content: space-between;
    }

    .contact-item {
      flex-direction: row;
      justify-content: center;
    }

    .featured, .pick, .contact {
      width: 300px;
    }

    .introduce, .pic {
      padding: 10px;
      width: 300px;
      height: 100%;
    }

  }




#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.header {
  display: flex;
  justify-content: space-between;
  background: #571845;
  padding: 10px 100px;
  color: white;
}

#nav {
color: black;
  padding: 30px;
}

#nav a {
  color: black;
  padding: 20px;
  font-weight: bold;
  background-color: #bbbbbb;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #0d7fa9;
}

.content {
  width: 100%;
  padding: 10px 100px;
}
</style>
