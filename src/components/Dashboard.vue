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
			    Listado de Clientes
			  </p>
			</header>
			<div class="card-content">
				<b-input placeholder="Search..."
					type="search"
					icon-pack="fas"
					icon="search"
					rounded
					id="Search"
					v-model="search_query.name">
				</b-input>
				<!-- <input class="input" type="text" v-model="search_query.name"> -->
				<!-- <b-table :data="filter" :columns="columns" :paginated="true" :current-page="1" :per-page="10" :hoverable="true" :default-sort="['DROGUERIA','ASC']">
				</b-table> -->

				<b-table :data="filter" :paginated="true" :current-page="1" :per-page="10" :hoverable="true" :default-sort="['DROGUERIA','ASC']">
					<b-table-column label="ID" width="40" numeric v-slot="props">
						{{ props.row.CIUDAD }}
					</b-table-column>
					<b-table-column label="Establecimiento" v-slot="props" :sortable="true">
						{{ props.row.DROGUERIA }}
					</b-table-column>
					<b-table-column label="Nombre de Contacto" v-slot="props" :sortable="true">
						{{ props.row.CONTACTO }}
					</b-table-column>
					<b-table-column label="Teléfono Contacto" v-slot="props" :centered="true" :sortable="true">
						{{ props.row.TELEFONO }}
					</b-table-column>
					<b-table-column label="Celular" v-slot="props" :sortable="true">
						{{ props.row.CEL }}
					</b-table-column>
					<b-table-column label="Ciudad" v-slot="props" :sortable="true">
						{{ props.row.CIUDAD }}
					</b-table-column>
					<b-table-column label="Fecha" v-slot="props" :sortable="true">
						{{ props.row.FECHA }}
					</b-table-column>
					<b-table-column label="Observaciones" v-slot="props">
						{{ props.row.OBSERVACIONES }}
					</b-table-column>
					<b-table-column label="Acción" v-slot="props">
						<b-button type="is-danger"
						size="is-small"
						>
						<b-icon
						pack="fas"
						icon="edit"
						size="is-small">
						</b-icon>
						</b-button>
					</b-table-column>


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
  		data : json.Hoja1,
  		search_query: {
  			name: ''
  		},
  		columns: [
  		{
  			field: 'id',
  			label: 'ID',
  			width: '40',
  			numeric: true,
  			sortable: true
  		},
  		{
  			field: 'DROGUERIA',
  			label: 'Establecimiento',
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
  },
  computed: {
  	filter: function() {
  		var name_re = new RegExp(this.search_query.name, 'i')
  		var data = []
  		var i = 0
  		for (i in this.data) {
  			if (this.data[i].DROGUERIA.match(name_re) || this.data[i].CONTACTO.match(name_re)) {
  				data.push(this.data[i])
  			}
  		}
  		return data
  	}
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>