<template>
    <div class="container">
     <h1 class="text-star">Listado de Miembros |
     <button @click="newMiembro()"
             class="btn btn-success mx-2">
             <font-awesome-icon icon="plus" />
     </button>
     </h1>
     <table class="table">
         <thead>
         <tr>
            <th scope="col">Code</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Hora Inicio</th>
            <th scope="col">Duracion</th>
            <th scope="col">Entrenador</th>
            <th scope="col">Capacidad</th>
         </tr>
     </thead>
     <tbody>
         <tr v-for="(clase,index) in clases" :key="index">
            <th scope="row">{{$clase->clase_id}}</th>
            <td>{{$clase->clase_nom}}</td>
            <td>{{$clase->clase_descp}}</td>
            <td>{{$clase->hora_inicio}}</td>
            <td>{{$clase->duracion}}</td>
            <td>{{$clase->entrenador_id}}</td>
            <td>{{$clase->capacidad}}</td>
              <button @click="deleteClase(clase.clase_id)"
                 class="btn btn-danger mx-2">
                 <font-awesome-icon icon="trash" />
             </button>
             <button @click="editClase(clase.clase_id)"
             class="btn btn-warning mx-2">
             <font-awesome-icon icon="pencil" />
             </button>
         </tr>
     </tbody>
 </table>
 </div>
 </template>
 
 <script>
 import axios from 'axios'
 
 export default {
     name: 'Clase',
     data(){
         return{
             clases:[]
         }
         methods:{
         deleteClase(codigo){
             Swal.fire({
                 title:`Do you want to delete the clase with id ${codigo}?`,
                 showCancelButton: true,
                 confirmButtonText:'Delete',                              
             }).then((result) =>{
                 if (result.isConfirmed) {
                    axios.delete(`http://127.0.0.1:8000/api/clases/${codigo}`)
                    .then(response => {
                     if (respone.data.success) {
                         Swal.fire('Deleted!! ', '', 'success')
                         this.clases = response.data.clases
                     }
                    }) 
                 }
             })
         },
     
 
     editMiembro(id){
         this.$router.push({name:'EditarMiembro', params:{id: `${id}` }})
 
     },
     newMiembro(){
         this.$router.push({name:`NewMiembro`});
 
     }
     },
     mounted(){
         axios
         .get('http://127.0.0.1:8000/api/miembros')  
         .then(response =>(this.miembros = response.data.miembros))
     },
 }
 }
 </script>