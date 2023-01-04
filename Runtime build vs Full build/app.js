let vm1 = Vue.createApp({
  data() {
    return {
      message: "Full build",
    };
  },
}).mount("#app1");
//for full build

let vm2 = Vue.createApp({
  data() {
    return {
      message: "Runtime build",
    };
  },
  render() {   // this is the explicit render function
    return Vue.h('h1', this.message)
  },
}).mount("#app2");
// for runtime build
