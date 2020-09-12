<template>
	<section>

		<section class="hero has-background-light is-fullheight has-shadow">
			<div class="hero-body">
				<div class="container">
					<div class="column is-4 is-offset-4">
						<div class="box">
							<div class="has-text-centered">
								<h3 class="title is-3">Ingreso</h3>
								<p class="subtitle is-6 mb-6">Ingresa tus datos para continuar.</p>
							</div>
							<form>
								<b-field>
									<b-input type="email" placeholder="Your User" autofocus="" v-model.trim="user"></b-input>
								</b-field>
								<b-field>
									<b-input type="password" placeholder="Your Password" v-model="password"></b-input>
								</b-field>
								<b-button type="is-info is-fullwidth mt-5" @click="login" :class="{'is-loading': isSend }">
									Ingresar
								</b-button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	</section>
</template>

<script>
import Firebase from 'firebase';
import "firebase/auth";
import Config from '@/config/Config';

import data from '@/assets/data/data.js';

export default {
  name: 'Login',
  error: false,
  data () {
    return {
      isSend: false,
      Firebase,
      Config,
      user:"",
      password:"",
      error: ""
    };
  },
  methods: {
    login () {
      this.isSend = true
    	if (!Firebase.apps.length) {
    		Firebase.initializeApp(Config);
    	}

    	let that = this
    	that.error = ""
    	let db = Firebase.auth();

    	db.signInWithEmailAndPassword(this.user, this.password).
    	then(function(response){
        data.ReqAuth = true;
        data.signIn = response
    		that.$router.push("/home");
        console.log(data.signIn.user.email);

    	}).
    	catch(function(error) {
    	  // Handle Errors here.
        that.isSend = false
    	  var errorCode = error.code;
    	  var errorMessage = error.message;
    	  
    	  that.error = errorCode +' - '+ errorMessage
    	  that.danger()   	  
    	});

    	
    },
    danger(){
    	this.$buefy.toast.open({
    		message: this.error,
    		duration: 4000,
    		position: 'is-bottom',
    		type: 'is-danger'
    	})
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
padding: 4em 3em !important;
}
.box .title {
margin-bottom:1em !important;
}
</style>