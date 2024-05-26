<template>
    <div class="container text-start">
      <h1 class="text-primary fw-bold">Editar Equipo</h1>
      <div class="card">
        <div class="card-header fw-bold">
          Equipos
        </div>
        <div class="card-body">
          <form @submit.prevent="updateEquipo">
  
            <div class="row mb-3">
              <label for="equipo_id" class="form-label">ID</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                <input type="text" class="form-control" id="equipo_id" placeholder="ID equipo" disabled v-model="equipo.id">
              </div>
            </div>
  
            <div class="row mb-3">
              <label for="equipo_nom" class="form-label">Nombre equipo</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                <input type="text" class="form-control" id="equipo_nom" placeholder="Nombre equipo" v-model="equipo.nombre">
              </div>
            </div>
  
            <div class="row mb-3">
              <label for="tipo_equipo" class="form-label">Tipo de equipo</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                <input type="text" class="form-control" id="tipo_equipo" placeholder="Tipo de equipo" v-model="equipo.tipo">
              </div>
            </div>
  
            <div class="row mb-3">
              <label for="cantidad_disponible" class="form-label">Cantidad Disponible</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                <input type="number" class="form-control" id="cantidad_disponible" placeholder="Cantidad disponible" v-model="equipo.cantidad_disponible">
              </div>
            </div>
  
            <div class="row mb-3">
              <label for="estado" class="form-label">Estado</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                <input type="text" class="form-control" id="estado" placeholder="Estado del equipo" v-model="equipo.estado">
              </div>
            </div>
  
            <button class="btn btn-primary" type="submit">Actualizar</button>
            <button class="btn btn-secondary mx-2" @click="cancelar">Cancelar</button>
  
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import Swal from 'sweetalert2'
  
  export default {
    name: 'EditarEquipo',
    data() {
      return {
        equipo: {
          id: 0,
          nombre: '',
          tipo: '',
          cantidad_disponible: 0,
          estado: ''
        }
      }
    },
    methods: {
      cancelar() {
        this.$router.push({ name: 'Equipos' })
      },
      async updateEquipo() {
        try {
          const response = await axios.put(`http://127.0.0.1:8000/api/equipos/${this.equipo.id}`, this.equipo)
          if (response.status === 200) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'El equipo ha sido actualizado',
              showConfirmButton: false,
              timer: 2000
            })
            this.$router.push({ name: 'Equipos' })
          }
        } catch (error) {
          console.error('Error updating equipo:', error)
        }
      },
      obtenerEquipo() {
        const equipoId = this.$route.params.id
        axios.get(`http://127.0.0.1:8000/api/equipos/${equipoId}`)
          .then(response => {
            this.equipo = response.data.equipo
          })
          .catch(error => {
            console.error('Error fetching equipo:', error)
          })
      }
    },
    mounted() {
      this.obtenerEquipo()
    }
  }
  </script>
  