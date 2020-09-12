<template>
	<section>
		<div class="container">
			<div class="columns">
			  <div class="column is-12 mb-5 has-text-centered">
			    <h1 class="title">Listado de Clientes a Llamar</h1>
			  </div>
			</div>
		</div>

		<div class="card">
			<header class="card-header">
			  <p class="card-header-title">
			    Listado de Clientes a Llamar
			  </p>
			</header>
			<div class="card-content">
					<input type="text" v-model="props.filters[props.column.field]">
					<b-table :data="json.Hoja1" :columns="columns" :paginated="true" :current-page="1" :per-page="10" :hoverable="true">
					</b-table>
			
			</div>
		</div>

	</section>

</template>

<script>
import json from '../assets/data/prueba.json'

export default {
  name: 'Dashboard',

  data () {
  	return {
  		search_query: {
  			name: '',
  			langs: langs
  		},
  		json,
  		columns: [
  		{
  			field: 'id',
  			label: 'ID',
  			width: '40',
  			numeric: true,
  			sortable: true
  		},
  		{
  			field: 'DROGUERIA ',
  			label: 'Establecimiento',
  			searchable: true,
  			sortable: true
  		},
  		{
  			field: 'CONTACTO',
  			label: 'Nombre de Contacto',
  			sortable: true
  		},
  		{
  			field: 'TELEFONO',
  			label: 'Teléfono Contacto',
  			centered: true,
  			sortable: true
  		},
  		{
  			field: 'CEL',
  			label: 'Celular Contacto',
  			centered: true,
  			sortable: true
  		},
  		{
  			field: 'CIUDAD',
  			label: 'Ciudad',
  			sortable: true
  		},
  		{
  			field: 'FECHA',
  			label: 'Fecha',
  			centered: true,
  			sortable: true
  		},
  		{
  			field: 'OBSERVACIONES',
  			label: 'Observaciones',
  		}
  		]
  	};
  },
  created(){
  	console.log(this.table);
  },
  computed: {
  	filter: function() {
  		var name_re = new RegExp(this.search_query.name, 'i')
  		var data = []
  		for (i in this.data) {
  			if (this.data[i].name.match(name_re)
  				&& this.search_query.langs.includes(this.data[i].lang)) {
  				data.push(this.data[i])
  		}
  	}
  	return data
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>