const app = Vue.createApp({
    data(){
        return{
            title: "contador App-vue",
            count:0,
        }
    },
    methods:{
        modCount(instruccion, paso=1){
            if (instruccion === "aumentar")
                this.count += paso;
            if (instruccion === "disminuir")
                this.count -= paso;
        },
    },
})