<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold"> Editar</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Clases
            </div>
            <div class="card-body">
                <form @submit.prevent="updateClase">

                <div class="row mb-3">
                    <label for="clase_id" class="form-label">Codigo</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="clase_id" placeholder="Codigo clase" disabled
                        v-model="clase.clase_id">
                    </div>
                </div>
                
                <div class="row mb-3">
                    <label for="clase_nom" class="form-label">Nombre clase: </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="clase_nom" placeholder="Codigo clase" disabled
                        v-model="clase.clase_nom">
                    </div>
                    <div class="row mb-3">
                    <label for="clase_descp" class="form-label">Descripcion Clase: </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="clase_descp" placeholder="Codigo miembro" disabled
                        v-model="clase.clase_descp">
                    </div>    
                </div>
                <div class="row mb-3">
                    <label for="hora_inicio" class="form-label">Hora inicio: </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="hora_inicio" placeholder="Codigo miembro" disabled
                        v-model="clase.hora_inicio">
                    </div>    
                </div>
                <div class="row mb-3">
                    <label for="duracion" class="form-label">Duracion </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="duracion" placeholder="Codigo miembro" disabled
                        v-model="clase.duracion">
                    </div>    
                </div>
                <div class="row mb-3">
                    <label for="entrenador_id" class="form-label">ENTRENADOR ID </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="entrenador_id" placeholder="Codigo miembro" disabled
                        v-model="clase.entrenador_id">
                    </div>    
                </div>
                <div class="row mb-3">
                    <label for="capacidad" class="form-label">capacidad </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="capacidad" placeholder="Codigo miembro" disabled
                        v-model="clase.capacidad">
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
import axios from `axios`
import Swal from `sweetalert2`

export default {
    name: 'EditarClase',
    data(){
      return{
        clase:{
            clase_id:0,
            clase_nom:'',
            clase_descp:'',
            hora_inicio:'';
            duracion:'';
            entrenador_id:'',
            capacidad:'',


        },
        entrenadores: []
    }
},

methods:{
    cancelar(){
        this.$router.push({name: 'Clases'})
    },

    async updateClase(){
        const res = await axios.put(`http://127.0.0.1:8000/api/clases/${this.clase.clase_id}`,this.clase)

        if (res.status == 200){
            this.$router.push({name: 'clases'})
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'clase has been updated',
                shorConfirmButton: false,
                timer: 2000
            })
        }
    }
},
mounted(){
this.clase.clase_id = this.$route.params-id;
axios.get(`http://127.0.0.1:8000/api/clases/${this.clase.clase_id}`)
     .then(response => {
        this.clase = response.data.clase;
        this.entrenadores = response.data.entrenadores
     })
},


}
</script>