const { createApp } = Vue;

createApp({
  data() {
    return {
      apiUrl: "",
      discs: [],
      discDetails: {},
      showDetails: false,
    };
  },

  methods: {
    fetchDiscs() {
      axios.get("/dischi/API/get-discs.php").then((response) => {
        // console.log(response.data);
        this.discs = response.data;
      });
    },

    fetchDisc(title) {
      axios
        .get("/dischi/API/get-discs.php", {
          params: {
            title,
          },
        })
        .then((response) => {
          this.discDetails = response.data;
        });
    },

    showDiscDetails(title) {
      this.showDetails = true;
      this.fetchDisc(title);
    },

    hideDiscDetails() {
      this.showDetails = false;
    },
  },

  created() {
    this.fetchDiscs();
  },
}).mount("#app");
