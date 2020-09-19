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
							<option v-for="categ in category">{{categ.name}}</option>
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
					</span>
					</b-upload>
					<!-- <input type="file" @change="previewFiles"> -->
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

import data from '@/assets/data/data.js';

export default {
	name: 'Post',
	data () {
	  return {
	    file:null,
	    category:{},
	    blog: {
	    	title: "",
	    	category: "",
	    	abstract: "",
	    	body:"",
	    	url:""
	    }
	  };
	},
	methods: {
	  isSend () {
	  	let date = new Date();
	  	let that = this;

	  	if (!Firebase.apps.length) {
	  		Firebase.initializeApp(Config);
	  	}

	  	let upload = Firebase.storage();
	  	// Obtengo la url de la imagen que se subio a Firebase
	  	upload.ref('img_blog/'+this.file.name).getDownloadURL().then(function(url){
	  		var urlImg = url;

	  		var year = date.getFullYear()
	  		var month = date.getMonth()
	  		var day = date.getDate()
	  		var filtro = date.getTime()*-1

	  		var filtro = Date.now()*-1;
	  		// filtro = filtro.toString()
	  		var title = that.blog.title;
	  		var category = that.blog.category;
	  		var abstract = that.blog.abstract;
	  		var body = that.blog.body;
	  		
	  		var user = data.signIn.user.email;
	  		var months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sept", "Oct", "Nov", "Dic"];

	  		var fecha = months[date.getMonth()] + ' ' + date.getDate() + ' - ' + date.getFullYear()

	  		let db = Firebase.database();
	  		// Función para guardar información en Firebase Realdatabase
	  		writeUserData(title, category, abstract, body, fecha, user, urlImg, filtro);

	  		function writeUserData(title, category, abstract, body, fecha, user, urlImg, filtro) {
	  		  db.ref('post/'+ title.replace(/ /g, "-")).set({
	  		    title: title,
	  		    category: category,
	  		    abstract: abstract,
	  		    body: body,
	  		    date: fecha,
	  		    user: user,
	  		    url: url,
	  		    filtro: filtro
	  		  });

	  		  that.$buefy.toast.open({
	  		  	message: 'El post ha sido guardado correctamente',
	  		  	type: 'is-success'
	  		  })

	  		  // Limpiamos los input
	  		  that.clear();
	  		}

	  	});

	  	// if (!Firebase.apps.length) {
	  	// 	Firebase.initializeApp(Config);
	  	// }
	  	
	  },
	  salto(){
	  	var cadena1 = this.blog.body;
	  	var cadena2 = "\n"
		var cadena3 = cadena1.concat(cadena2) ;

	  },
	  clear(){
	  	this.blog.title = "";
	  	this.blog.category = "";
	  	this.blog.abstract = "";
	  	this.blog.body = "";
	  	this.file = null;
	  },

	},
	created(){
		// var d = Date.now()*-1;
		// console.log(d.toString())
			if (!Firebase.apps.length) {
				Firebase.initializeApp(Config);
			}

			/*--------------  Obtener articulos del blog Real DataBase  --------------*/
		  let real = Firebase.database();
		  let dataBlog = real.ref('category').on('value', snapshot => {
		  	this.category = snapshot.val()
		  	// console.log(this.category);
		  	// this.img = "background-image: url(" + this.articule.imagen + ");"

		  })
	},
	watch:{
		// Cuando se selecciona la imagen se guarda automaticamente
		file: function(event){
			let that = this
			var archivo = new FileReader();
			// Leemos el archivo para obtener su información
			archivo.readAsDataURL(event)

			archivo.onload = function(e){
				if (!Firebase.apps.length) {
					Firebase.initializeApp(Config);
				}

				let upload = Firebase.storage();

				// Subimos la imagen a Firebase Storage
				upload.ref('img_blog/'+event.name).put(event).then(function(snapshot) {
					console.log('Uploaded a blob or file!');
					let path = snapshot.metadata.fullPath

					// // Obtengo la url de la imagen que se subio a Firebase
					// upload.ref(path).getDownloadURL().then(function(url){
					// 	that.blog.url = url

					// });

				}).
				catch(function(response){
					console.log(response)
					console.log('error')
				});
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>