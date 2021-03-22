<template>
<div>
  <h1>Suggest a Restaurant for Review</h1>
  <h3>Tell us your favorite spots and why you love them!</h3>
  <form v-if="creating" @submit.prevent="addSuggest">
    <input v-model="name" placeholder="Name">
    <p></p>
    <textarea v-model="problem"></textarea>
    <br />
    <button type="submit">Submit</button>
  </form>
  <div v-else>
    <p>Thank you for suggesting a restaurant, keep an eye out on our website to see if we choose your suggestion!</p>
    <p><a @click="toggleForm" href="#">Submit another suggestion</a></p>
  </div>
</div>
</template>

<script>
export default {
  name: 'suggest',
  data() {
    return {
      creating: true,
      name: '',
      problem: '',
    }
  },
  methods: {
    toggleForm() {
      this.creating = !this.creating;
    },
    addSuggest() {
      this.$root.$data.addSuggest(this.name, this.problem);
      this.name = "";
      this.problem = "";
      this.creating = false;
    },
  }
}
</script>

<style scoped>
input {
  font-size: 1.2em;
  height: 30px;
  width: 200px;
}

textarea {
  font-size: 1.6em;
  width: 100%;
  max-width: 500px;
  height: 100px;
}

button {
  margin-top: 20px;
  font-size: 1.2em;
}
</style>
