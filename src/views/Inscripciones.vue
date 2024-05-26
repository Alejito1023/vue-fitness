<template>
    <div class="container">
      <h1 class="text-star">Listado de Inscripciones |
        <router-link :to="{ name: 'InscripcionCreate' }" class="btn btn-success mx-2">
          <font-awesome-icon icon="plus" />
        </router-link>
      </h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Miembro</th>
            <th scope="col">Clase</th>
            <th scope="col">Fecha de Inscripción</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(inscripcion, index) in inscripciones" :key="index">
            <td>{{ inscripcion.id }}</td>
            <td>{{ inscripcion.miembro_nom }}</td>
            <td>{{ inscripcion.clase_nom }}</td>
            <td>{{ inscripcion.fecha_inscripcion }}</td>
            <td>
              <router-link :to="{ name: 'InscripcionEdit', params: { id: inscripcion.inscripcion_id } }" class="btn btn-warning btn-sm">Editar</router-link>
              <button @click="deleteInscripcion(inscripcion.id)" class="btn btn-danger btn-sm">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Swal from 'sweetalert2';
  
  export default {
    name: 'InscripcionIndex',
    data() {
      return {
        inscripciones: []
      };
    },
    methods: {
      deleteInscripcion(id) {
        Swal.fire({
          title: `¿Deseas eliminar la inscripción con ID ${id}?`,
          showCancelButton: true,
          confirmButtonText: 'Eliminar',
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete(`http://127.0.0.1:8000/api/inscripciones/${id}`)
              .then(response => {
                if (response.data.success) {
                  Swal.fire('¡Eliminado!', '', 'success');
                  this.inscripciones = response.data.inscripciones;
                }
              })
              .catch(error => {
                console.error(error);
                Swal.fire('Error', 'Hubo un problema al eliminar la inscripción', 'error');
              });
          }
        });
      },
      editInscripcion(id) {
        this.$router.push({ name: 'InscripcionEdit', params: { id: `${id}` } });
      }
    },
    mounted() {
      axios.get('http://127.0.0.1:8000/api/inscripciones')
        .then(response => {
          this.inscripciones = response.data;
        })
        .catch(error => {
          console.error(error);
          Swal.fire('Error', 'Hubo un problema al cargar las inscripciones', 'error');
        });
    }
  };
  </script>
  