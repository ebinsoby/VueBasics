Vue.createApp({
  data() {
    return {
      firstName: "Ebin",
      lastName:"Soby",
    };
  },
  methods:{
    fullName(){
      return `${this.firstName} ${this.lastName}`
    }
  }
}).mount("#app");
