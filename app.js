const app = Vue.createApp({
    data: function(){
    	return {
    		firstName:"John",
    		lastName:"Doe",
    		email:'doe@mail.ttex',
    		gender:"male",
    		picture:"https://randomuser.me/api/portraits/men/10.jpg" 
    	}
    }
})
app.mount('#app')