Vue.createApp({
  data() {
    return {
      firstName: "Ebin",
      middleName: "",
      lastName: "Soby",
      url: "https://www.google.com/",
      age: 22,
    };
  },
  methods: {
    increment() {
      this.age++;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
    updateLastName(msg, event) {
      console.log(msg);
      this.lastName = event.target.value;
    },
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.middleName} ${this.lastName}`;
    },
  },
}).mount("#app");
