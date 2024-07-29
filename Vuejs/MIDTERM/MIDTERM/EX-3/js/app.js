const app = Vue.createApp({
    data() {
        return {
            teachers:[],
            API: 'http://192.168.108.129:5000/api/teachers',
        }
    },
    methods: {},
    mounted() {
        const BASE_URL = this.API;
        axios.get(BASE_URL).then(res=>{
            this.teachers= res.data;
        })
        .catch(err=>console.log(err))
    },
    computed: {}
});
app.mount('#app');