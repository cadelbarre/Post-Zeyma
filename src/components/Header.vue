<template>
	<section class="has-background-white mb-4 has-shadow">
		<div class="container py-3">
			<div class="columns is-multiline">
				<!-- Primer Columns - Navbar -->
				<div class="column is-3">
					<figure class="image is-48x48">
						<img :src="require('../assets/img/zeyma-Original-mod.png')" alt="Image">
					</figure>
				</div>
				<div class="column is-6">
					<b-field>
						<b-input placeholder="Buscar por nombre" rounded></b-input>
					</b-field>
				</div>
				<div class="column is-3">
					
				</div>

				<!-- Segundo Columns - Navbar -->
				<div class="column is-3">
					<div class="level">
						<div class="level-right">
							<div class="level-item">
								<figure class="image is-48x48">
									<img :src="require('../assets/img/avatar3.png')" alt="Image">
								</figure>
								<small class="ml-2">
									<!-- Hola, <span class="has-text-info"><strong>{{data.signIn.user.email}}</strong></span><br> -->
									<span class="tag is-info">Telefonista 1</span>
								</small>
							</div>
						</div>

					</div>
				</div>
				<div class="column is-6">
					<!-- START NAV -->
					<nav class="navbar is-white">
						<div class="container">
						<!-- 	<div class="navbar-brand">
								<a class="navbar-item brand-text" href="../index.html">
									Bulma Admin
								</a>
								<div class="navbar-burger burger" data-target="navMenu">
									<span></span>
									<span></span>
									<span></span>
								</div>
							</div> -->
							<!-- Navbar - Top -->
							<div id="navMenu" class="navbar-menu">
								<div class="navbar-start">
									<b-navbar-item tag="router-link" :to="{ path: '/home' }">
										Tracking
									</b-navbar-item>
									<a class="navbar-item" href="admin.html">
										Orders
									</a>
									<a class="navbar-item" href="admin.html">
										Payments
									</a>
									<a class="navbar-item" href="admin.html">
										Exceptions
									</a>
									<a class="navbar-item" href="admin.html">
										Reports
									</a>
								</div>
							</div>
						</div>
					</nav>
					<!-- END NAV -->
				</div>
				<div class="column is-3"></div>
				

			</div>
			
			
		</div>	
	</section>
</template>

<script>
import data from '@/assets/data/data.js';
export default {
  name: 'Header',
  data () {
    return {
      data
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>