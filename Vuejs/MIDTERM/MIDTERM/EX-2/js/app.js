const app = Vue.createApp({
    data() {
        return {
            subjects:[],
            name:'',
            score:0
        }
    },
    methods: {
        // Add new score 
        addScore(){
            let subject = {
                name:this.name,
                score:this.score,
            }
            if(this.name !== '' && this.score !== ''){
                this.subjects.push(subject);
            }
        },
        // Check whether score is below 50
        isFailed(score){
            return score < 50 ? 'failed': '';
        }
    },
    mounted() {},
    computed: {
        maximum(){
            let maximum = 0;
            if(this.subjects.length > 0){
                maximum = this.subjects[0].score;
            }
            this.subjects.forEach(subject => {
                if(subject.score > maximum){
                    maximum = subject.score;
                }
            });
            return maximum;
        },
        minimum(){
            let minimum = 0;
            if(this.subjects.length > 0){
                minimum = this.subjects[0].score;
            }
            this.subjects.forEach(subject => {
                if(subject.score < minimum){
                    minimum = subject.score;
                }
            });
            return minimum;
        },
        average(){
            let total = 0;
            if(this.subjects.length <= 0){
                return total;
            }
            else{
                this.subjects.forEach(subject => {
                    total += subject.score;
                });
                return Math.round(total / this.subjects.length)
            }
        },
    }
});
app.mount('#app');