<template>
	<section>
		<div class="card">
			<header>
				<div class="card-header">
					<p class="card-header-title">
					  Postear Blog
					</p>
				</div>
			</header>
			<div class="card-content mx-4">
				<b-field grouped>
					<b-field label="Titulo" expanded>
						<b-input maxlength="80" type="text" v-model="blog.title"></b-input>
					</b-field>
					<b-field label="Categoria" expanded>
						<b-select v-model="blog.category">
							<option>Actualizacionessssss</option>
							<option>Ms.</option>
						</b-select>
					</b-field>
				</b-field>
				<b-field label="Resumen">
					<b-input maxlength="200" type="textarea" rows="2" v-model="blog.abstract"></b-input>
				</b-field>
				<b-field label="Cuerpo">
					<textarea class="textarea" placeholder="10 lines of textarea" rows="20" v-model="blog.body" @keyup.enter="salto"></textarea>
				</b-field>
				<b-field class="file is-primary" :class="{'has-name': !!file}">
					<b-upload v-model="file" class="file-label">
						<span class="file-cta">
							<b-icon
							pack="fas"
							icon="upload"
							size="is-small">
						</b-icon>
						<span class="file-label ml-2">Click to upload</span>
					</span>
					<span class="file-name" v-if="file">
						{{ file.name }}
					}
					</span>
					</b-upload>
				</b-field>
				<b-button type="btn-primary mt-6" expanded @click="isSend">Postear</b-button>
			</div>
		</div>
	</section>
</template>

<script>
import Firebase from 'firebase';
import "firebase/firestore";
import Config from '@/config/Config';

export default {
	name: 'Post',
	data () {
	  return {
	    file:null,
	    blog: {
	    	title: "",
	    	category: "",
	    	abstract: "",
	    	body:"",
	    }
	  };
	},
	methods: {
	  isSend () {
	  	let date = new Date();

	  	let data = {
	  		title : this.blog.title,
	  		category : this.blog.category,
	  		abstract : this.blog.abstract,
	  		body : this.blog.body,
	  		months : ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
	  		year : date.getFullYear(),
	  		month : date.getMonth(),
	  		day : date.getDate()
	  	}

	  	 var title = this.blog.title;
	  		 var category = this.blog.category;
	  		 var abstract = this.blog.abstract;
	  		 var body = this.blog.body;
	  		 var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
	  		 var year = date.getFullYear();;
	  		 var month = date.getMonth();;
	  		 var day = date.getDate();

	  	var fecha = data.months[date.getMonth()] + ' ' + date.getDate() + '/' + date.getFullYear() + ' - ' + date.getHours() + ':' + date.getMinutes()

	  	if (!Firebase.apps.length) {
	  		Firebase.initializeApp(Config);
	  	}
	  	let db = Firebase.database();

	  	function writeUserData(title, category, abstract, body, year, month, day, fecha) {
	  	  db.ref('post/' + year + '/' + month + '/'+ day + '/' + title).set({
	  	    title: title,
	  	    category: category,
	  	    abstract: abstract,
	  	    body: body,
	  	    date: fecha
	  	  });
	  	}

	  	writeUserData(title, category, abstract, body, year, month, day, fecha);


	  },
	  salto(){
	  	var cadena1 = this.prueba.texto;
	  	var cadena2 = "\n"
		var cadena3 = cadena1.concat(cadena2) ;
		console.log(cadena3);	

	  }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>