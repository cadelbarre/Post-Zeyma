<template>
	<section class="has-background-light has-shadow">
		<Header/>

	<div class="container mt-6">
		<div class="columns">
			<div class="column is-12">
				<!--  -->
				<Dashboard/>
				
			</div>
		</div>
	</div>
	</section>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Dashboard from '@/components/Dashboard.vue'

export default {
	name: 'Home',
	components: {
		Header,
		Dashboard
	}
}
</script>
