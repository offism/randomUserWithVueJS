const app = Vue.createApp({
    data: function(){
    	return {
    		firstName:"John",
    		lastName:"Doe",
    		email:'doe@mail.ttex',
    		gender:"male",
    		picture:"https://randomuser.me/api/portraits/men/10.jpg" 
    	}
    },
    methods: {
     async getUser(){
        const res = await fetch('https://randomuser.me/api')
        const {results} = await res.json()
        // firstName
      }
    }
})
app.mount('#app')