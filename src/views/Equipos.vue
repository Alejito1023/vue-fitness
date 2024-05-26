<template>
    <div class="container">
      <h1 class="text-star">Listado de Equipos |
        <button @click="newEquipo()" class="btn btn-success mx-2">
          <font-awesome-icon icon="plus" />
        </button>
      </h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Tipo</th>
            <th scope="col">Cantidad Disponible</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(equipo, index) in equipos" :key="index">
            <th scope="row">{{ equipo.equipo_id }}</th>
            <td>{{ equipo.equipo_nom }}</td>
            <td>{{ equipo.tipo_equipo }}</td>
            <td>{{ equipo.cantidad_disponible }}</td>
            <td>{{ equipo.estado }}</td>
            <button @click="deleteEquipo(equipo.equipo_id)" class="btn btn-danger mx-2">
              <font-awesome-icon icon="trash" />
            </button>
            <button @click="editEquipo(equipo.equipo_id)" class="btn btn-warning mx-2">
              <font-awesome-icon icon="pencil" />
            </button>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import Swal from 'sweetalert2'
  
  export default {
    name: 'Equipo',
    data() {
      return {
        equipos: []
      }
    },
    methods: {
      deleteEquipo(id) {
        Swal.fire({
          title: `Do you want to delete the equipo with ID ${id}?`,
          showCancelButton: true,
          confirmButtonText: 'Delete'
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete(`http://127.0.0.1:8000/api/equipos/${id}`)
              .then(response => {
                if (response.data.success) {
                  Swal.fire('Deleted!!', '', 'success')
                  this.equipos = response.data.equipos
                }
              })
              .catch(error => {
                console.error('Error deleting equipo:', error)
              })
          }
        })
      },
      editEquipo(id) {
        this.$router.push({ name: 'EditarEquipo', params: { id: `${id}` } })
      },
      newEquipo() {
        this.$router.push({ name: 'NewEquipo' })
      }
    },
    mounted() {
      axios
        .get('http://127.0.0.1:8000/api/equipos')
        .then(response => {this.equipos = response.data.equipos})
        .catch(error => {
          console.error('Error fetching equipos:', error)
        })
    }
  }
  </script>
  