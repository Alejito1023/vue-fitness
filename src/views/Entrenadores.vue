<template>
    <div class="container">
     <h1 class="text-start">Listado de Entrenadores |
     <button @click="newEntrenador()"
             class="btn btn-success mx-2">
             <font-awesome-icon icon="plus" />
     </button>
     </h1>
     <table class="table">
         <thead>
         <tr>
             <th scope="col">ID</th>
             <th scope="col">Nombre</th>
             <th scope="col">Apellido</th>
             <th scope="col">Especialidad</th>
             <th scope="col">Teléfono</th>
             <th scope="col">Acciones</th>
         </tr>
         </thead>
         <tbody>
         <tr v-for="(entrenador, index) in entrenadores" :key="index">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ entrenador.entrenador_nom }}</td>
              <td>{{ entrenador.entrenador_ape }}</td>
              <td>{{ entrenador.especialidad }}</td>
              <td>{{ entrenador.telefono }}</td>
              <td>
                 <button @click="deleteEntrenador(entrenador.entrenador_id)"
                         class="btn btn-danger mx-2">
                     <font-awesome-icon icon="trash" />
                 </button>
                 <button @click="editEntrenador(entrenador.entrenador_id)"
                         class="btn btn-warning mx-2">
                     <font-awesome-icon icon="pencil" />
                 </button>
              </td>
         </tr>
         </tbody>
     </table>
 </div>
 </template>
 
 <script>
 import axios from 'axios'
 import Swal from 'sweetalert2'
 
 export default {
     name: 'Entrenador',
     data() {
         return {
             entrenadores: []
         }
     },
     methods: {
         deleteEntrenador(id) {
             Swal.fire({
                 title: `¿Deseas eliminar al entrenador con ID ${id}?`,
                 showCancelButton: true,
                 confirmButtonText: 'Eliminar',
             }).then((result) => {
                 if (result.isConfirmed) {
                     axios.delete(`http://127.0.0.1:8000/api/entrenadores/${id}`)
                     .then(response => {
                         if (response.data.success) {
                             Swal.fire('¡Eliminado!', '', 'success')
                             this.entrenadores = response.data.entrenadores
                         }
                     })
                 }
             })
         },
 
         editEntrenador(id) {
             this.$router.push({ name: 'EditarEntrenador', params: { id: `${id}` } })
         },
         
         newEntrenador() {
             this.$router.push({ name: 'NewEntrenador' })
         }
     },
     mounted() {
         axios
         .get('http://127.0.0.1:8000/api/entrenadores')
         .then(response => (this.entrenadores = response.data.entrenadores))
     }
 }
 </script>
 