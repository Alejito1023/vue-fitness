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
            <th scope="col">Miembro</th>
            <th scope="col">Apellido</th>
            <th scope="col">Fecha nacimiento</th>
            <th scope="col">Genero</th>
            <th scope="col">Telefono</th>
            <th scope="col">Email</th>
            <th scope="col">Fecha Inicio</th>
            <th scope="col">Suscripcion</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(miembro,index) in miembros" :key="index">
             <th scope="row">{{ index+1 }}</th>
             <td>{{$miembro->miembro_id}}</td>
             <td>{{$miembro->miembro_nom}}</td>
             <td>{{$miembro->miembro_ape}}</td>
             <td>{{$miembro->fecha_nacimiento}}</td>
             <td>{{$miembro->genero}}</td>
             <td>{{$miembro->telefono}}</td>
             <td>{{$miembro->email}}</td>
             <td>{{$miembro->fecha_inicio}}</td>
             <td>{{$miembro->suscripcion_id}}</td>
             <button @click="deleteMiembro(miembro.miembro_id)"
                class="btn btn-danger mx-2">
                <font-awesome-icon icon="trash" />
            </button>
            <button @click="editMiembro(miembro.miembro_id)"
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
    name: 'Miembro',
    data(){
        return{
            miembros:[]
        }
        methods:{
        deleteMiembro(codigo){
            Swal.fire({
                title:`Do you want to delete the miembro with id ${codigo}?`,
                showCancelButton: true,
                confirmButtonText:'Delete',                              
            }).then((result) =>{
                if (result.isConfirmed) {
                   axios.delete(`http://127.0.0.1:8000/api/miembros/${codigo}`)
                   .then(response => {
                    if (respone.data.success) {
                        Swal.fire('Deleted!! ', '', 'success')
                        this.miembros = response.data.miembros
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