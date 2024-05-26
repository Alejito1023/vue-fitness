<template>
    <div class="container text-start">
      <h1 class="text-primary fw-bold">Nuevo Equipo</h1>
      <div class="card">
        <div class="card-header fw-bold">Equipos</div>
        <div class="card-body">
          <form @submit.prevent="saveEquipo">
  
            <div class="row mb-3">
              <label for="equipo_nom" class="form-label">Nombre del equipo</label>
              <div class="input-group">
                <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                <input type="text" class="form-control" id="equipo_nom" placeholder="Nombre del equipo" v-model="equipo.nombre">
              </div>
            </div>
  
            <div class="row mb-3">
              <label for="tipo_equipo" class="form-label">Tipo de equipo</label>
              <div class="input-group">
                <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                <input type="text" class="form-control" id="tipo_equipo" placeholder="Tipo de equipo" v-model="equipo.tipo">
              </div>
            </div>
  
            <div class="row mb-3">
              <label for="cantidad_disponible" class="form-label">Cantidad Disponible</label>
              <div class="input-group">
                <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                <input type="number" class="form-control" id="cantidad_disponible" placeholder="Cantidad disponible" v-model="equipo.cantidad_disponible">
              </div>
            </div>
  
            <div class="row mb-3">
              <label for="estado" class="form-label">Estado</label>
              <div class="input-group">
                <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                <input type="text" class="form-control" id="estado" placeholder="Estado del equipo" v-model="equipo.estado">
              </div>
            </div>
  
            <button class="btn btn-primary" type="submit">Guardar</button>
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
    name: 'NewEquipo',
    data() {
      return {
        equipo: {
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
      async saveEquipo() {
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/equipos', this.equipo)
          if (response.status === 201) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'El equipo ha sido guardado',
              showConfirmButton: false,
              timer: 2000
            })
            this.$router.push({ name: 'Equipos' })
          }
        } catch (error) {
          console.error('Error saving equipo:', error)
        }
      }
    }
  }
  </script>
  