let app = new Vue({
    el: "#app",
    data: {
        message: "Hello from Vue app!",
        myClass: "active",
        isVisible: "0",
        tekstas: "Tekstas",

        automobiliai: [
            {
                marke: "Volvo",
                modelis: "S60",
                metai: "2004"
            },
            {
                marke: "Honda",
                modelis: "CIVIC",
                metai: "2016"
            },
            {
                marke: "Toyota",
                modelis: "yaris",
                metai: "2012"
            },
        ],
        newCar: {
            marke: "",
            modelis:"",
            metai:""
        }
    },
    methods: {
        "addCar": function() {
            this.automobiliai.push({
            marke: this.newCar.marke,
            modelis: this.newCar.modelis,
            metai: this.newCar.metai
            });
        },

        "arSenasAuto": function(metai){
            return metai <= 2000;
        }
    }
});