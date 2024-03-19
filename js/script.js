const { createApp } = Vue;

createApp({
  data() {
    return {
      apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
      counter: 0,
      email: [],

    };
  },

  methods: {
    getEmail() {
      if (this.counter < 10) {
        axios.get(this.apiUrl)
          .then(res => {
            this.email.push(res.data.response);
            this.counter++;
            this.getEmail();
            if (this.email.length === 10) {
              console.log("siamo a 10 email");
            }
            console.log(this.email);
          })
          .catch(error => {
            console.log(error.message);

          });
      } else {
      }
    }
  },

  mounted() {
    this.getEmail();
  }
}).mount("#app");