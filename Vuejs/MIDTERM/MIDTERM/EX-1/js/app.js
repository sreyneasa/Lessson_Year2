const app = Vue.createApp({
    data() {
        return {
            tasks:[],
            name:'',
            color:'',
            numberOfGreen:0,
            numberOfOrange:0,
            numberOfRed:0,
            numberOfBlue:0,
        }
    },
    methods: {
        // Add new task 
        addTask(){
            let newTask = {
                name:this.name,
                color:this.color,
                border: "3px solid " + this.color
            }
            if(this.name !== '' && this.color !== ''){
                this.tasks.push(newTask);
                this.resetInput();
            }
        },
        // Count number of color 
        countNumberOfColor(color, numberOfColor){
            this.tasks.forEach(task => {
                if(task.color === color){
                    numberOfColor++;
                }
            });
            return numberOfColor;
        },
        // Reset inputs 
        resetInput(){
            this.title = '';
            this.color = '';
        }
    },
    mounted() {},
    computed: {
        numberOfGreenColor(){
            let numberOfGreen = this.countNumberOfColor('green', this.numberOfGreen);
            return numberOfGreen;
        },
        numberOfOrangeColor(){
            let numberOfOrange = this.countNumberOfColor('orange', this.numberOfOrange);
            return numberOfOrange;
        },
        numberOfRedColor(){
            let numberOfRed = this.countNumberOfColor('red', this.numberOfRed);
            return numberOfRed;
        },
        numberOfBlueColor(){
            let numberOfBlue = this.countNumberOfColor('blue', this.numberOfBlue);
            return numberOfBlue;
        },
    }
});
app.mount('#app');