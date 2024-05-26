<template>
    <div class="container text-start">
      <h1 class="text-primary fw-bold">Editar Inscripción</h1>
      <div class="card">
        <div class="card-header fw-bold">Inscripciones</div>
        <div class="card-body">
          <form @submit.prevent="updateInscripcion">
            <div class="row mb-3">
              <label for="inscripcion_id" class="form-label">ID</label>
              <div class="input-group">
                <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                <input type="text" class="form-control" id="inscripcion_id" placeholder="ID Inscripción" disabled v-model="inscripcion.id">
              </div>
            </div>
            <div class="row mb-3">
              <label for="miembro_id" class="form-label">Miembro</label>
              <div class="input-group">
                <div class="input-group-text"><font-awesome-icon icon="user" /></div>
                <input type="text" class="form-control" id="miembro_id" placeholder="Miembro" disabled v-model="inscripcion.miembro">
              </div>
            </div>
            <div class="row mb-3">
              <label for="clase_id" class="form-label">Clase</label>
              <div class="input-group">
                <div class="input-group-text"><font-awesome-icon icon="book" /></div>
                <input type="text" class="form-control" id="clase_id" placeholder="clase_id" disabled v-model="inscripcion.clase">
              </div>
            </div>
            <div class="row mb-3">
              <label for="fecha_inscripcion" class="form-label">Fecha de Inscripción</label>
              <div class="input-group">
                <div class="input-group-text"><font-awesome-icon icon="calendar-alt" /></div>
                <input type="text" class="form-control" id="fecha_inscripcion" placeholder="Fecha de Inscripción" v-model="inscripcion.fecha_inscripcion">
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
  import axios from 'axios';
  import Swal from 'sweetalert2';
  
  export default {
    name: 'EditarInscripcion',
    data() {
      return {
        inscripcion: {
          inscripcion_id: 0,
          miembro_id: '',
          clase_id: '',
          fecha_inscripcion: ''
        }
      };
    },
    methods: {
      cancelar() {
        this.$router.push({ name: 'Inscripciones' });
      },
      updateInscripcion() {
        const res = await axios.put(`http://127.0.0.1:8000/api/inscripciones/${this.inscripcion.inscripcion_id}`,this.inscripcion)
            if (response.status === 200) {
              this.$router.push({ name: 'Inscripciones' });
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'La inscripción ha sido actualizada',
                showConfirmButton: false,
                timer: 2000
              });
            }
          
      }
    },
    mounted() {
      this.inscripcion.id = this.$route.params.id;
      axios.get(`http://127.0.0.1:8000/api/inscripciones/${this.inscripcion.id}`)
        .then(response => {
          this.inscripcion = response.data.inscripcion;
        })
        
    }
  };
  </script>
  