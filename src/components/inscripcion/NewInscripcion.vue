<template>
    <div class="container text-start">
      <h1 class="text-primary fw-bold">Nueva Inscripción</h1>
      <div class="card">
        <div class="card-header fw-bold">Inscripciones</div>
        <div class="card-body">
          <form @submit.prevent="saveInscripcion">
            <div class="row mb-3">
              <label for="miembro_id" class="form-label">Código de Miembro</label>
              <div class="input-group">
                <div class="input-group-text"><font-awesome-icon icon="user" /></div>
                <input type="text" class="form-control" id="miembro_id" placeholder="Código de Miembro" v-model="inscripcion.miembro_id">
              </div>
            </div>
            <div class="row mb-3">
              <label for="clase_id" class="form-label">Código de Clase</label>
              <div class="input-group">
                <div class="input-group-text"><font-awesome-icon icon="book" /></div>
                <input type="text" class="form-control" id="clase_id" placeholder="Código de Clase" v-model="inscripcion.clase_id">
              </div>
            </div>
            <div class="row mb-3">
              <label for="fecha_inscripcion" class="form-label">Fecha de Inscripción</label>
              <div class="input-group">
                <div class="input-group-text"><font-awesome-icon icon="calendar-alt" /></div>
                <input type="date" class="form-control" id="fecha_inscripcion" v-model="inscripcion.fecha_inscripcion">
              </div>
            </div>
            <div class="row mb-3">
              <label for="pagado" class="form-label">Pagado</label>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="pagado" v-model="inscripcion.pagado">
                <label class="form-check-label" for="pagado">¿Pagado?</label>
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
  import axios from 'axios';
  import Swal from 'sweetalert2';
  
  export default {
    name: 'InscripcionNew',
    data() {
      return {
        inscripcion: {
          miembro_id: 0,
          clase_id: 0,
          fecha_inscripcion: '',
          pagado: false
        }
      };
    },
    methods: {
      cancelar() {
        this.$router.push({ name: 'InscripcionIndex' });
      },
      saveInscripcion() {
        axios.post('http://127.0.0.1:8000/api/inscripciones', this.inscripcion)
          .then(response => {
            if (response.status === 201) {
              this.$router.push({ name: 'InscripcionIndex' });
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'La inscripción ha sido guardada',
                showConfirmButton: false,
                timer: 2000
              });
            }
          })
          .catch(error => {
            console.error(error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Hubo un problema al guardar la inscripción',
            });
          });
      }
    }
  };
  </script>
  