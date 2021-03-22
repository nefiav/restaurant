<template>
<div>
  <h1>Current Reviews</h1>
  <div class="home-item">
    <div class="featured">
      <div class='card-title'>Diversion Eatery</div>
      <div class='card-pic'><img src="diversion.jpg" width="300px" height="300px" /></div>
      <div class='short'>Diversion is a delightful restaurant. It is black-owned and has a great vibe.</div>
    </div>
    <div class="featured">
      <div class='card-title'>Padeli's</div>
      <div class='card-pic'><img src="padelis.jpg" width="300px" height="300px" /></div>
      <div class='short'>Padeli's is a soooo good. It will make you come back for more.</div>
    </div>
    <div class="featured">
      <div class='card-title'>Red Iguana</div>
      <div class='card-pic'><img src="red.jpg" width="300px" height="300px" /></div>
      <div class='short'>Red Iguana hits the spot and fills you up. Not fancy but will satisfy you.</div>
    </div>
  </div>
  <h2>Restaurant review suggestions:</h2>
    <div v-for="suggest in suggests" v-bind:key="suggest.id">
      <div class="suggest">
        <div class="problem">
          <p>"{{suggest.problem}}"</p>
          <p><i>{{suggest.name}}</i></p>
          <button @click="removeSuggest(suggest.name)">remove Suggestion</button>
        </div>
      </div>
    </div>
</div>

</template>

<script>
export default {
  name: 'home',
  data() {
    return {}
  },
  computed: {
    suggests() {
      return this.$root.$data.getSuggests();
    }
  },
  methods:  {
    removeSuggest(name) {
      for(var i = 0; i < this.suggests.length; i++){
          if (this.suggests[i].name === name) {
              this.suggests.splice(i, 1);
          }
      }
    }
  }
}
</script>

<style>

.home-item{
  color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.featured {
  font-size: 15px;
  background-color: white;
  text-align: center;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 5px;
}


@media only screen and (min-width: 961px) {


    .home-item {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
    }

    .contact-item {
      flex-direction: row;
      justify-content: space-between;
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

</style>
