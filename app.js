const app = Vue.createApp({

data(){

	return{
		arrayOfTasks: [],
		singleTask: '',
		toggle: true,
		btnTitle: "hide list",
		classAttr: "visible",

	}
},

methods: {
	addTask(recieved){
		if(recieved != ''){
			this.arrayOfTasks.push(recieved);
		console.log(this.arrayOfTasks);
		}
		
	},

	toggleList(){
		if(this.toggle == true){
			this.classAttr = 'visible';
			this.btnTitle = "hide list";
			this.toggle = !this.toggle;
		}
		else{
			this.classAttr = 'hidden';
			this.btnTitle = 'show list';
			this.toggle = !this.toggle;
		}

	}

}






});


app.mount("#assignment");