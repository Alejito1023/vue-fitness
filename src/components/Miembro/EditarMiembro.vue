<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold"> Editar</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Miembros
            </div>
            <div class="card-body">
                <form @submit.prevent="updateMiembro">

                <div class="row mb-3">
                    <label for="miembro_id" class="form-label">Codigo</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="miembro_id" placeholder="Codigo miembro" disabled
                        v-model="miembro.miembro_id">
                    </div>
                </div>
                
                <div class="row mb-3">
                    <label for="miembro_nom" class="form-label">Nombre Miembro: </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="miembro_nom" placeholder="Codigo miembro" disabled
                        v-model="miembro.miembro_nom">
                    </div>
                    <div class="row mb-3">
                    <label for="miembro_ape" class="form-label">Apellido Miembro: </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="miembro_ape" placeholder="Codigo miembro" disabled
                        v-model="miembro.miembro_ape">
                    </div>    
                </div>
                <div class="row mb-3">
                    <label for="fecha_nacimiento" class="form-label">Fecha Nacimiento: </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="fecha_nacimiento" placeholder="Codigo miembro" disabled
                        v-model="miembro.fecha_nacimiento">
                    </div>    
                </div>
                <div class="row mb-3">
                    <label for="genero" class="form-label">Genero: </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="genero" placeholder="Codigo miembro" disabled
                        v-model="miembro.genero">
                    </div>    
                </div>
                <div class="row mb-3">
                    <label for="telefono" class="form-label">Telefono: </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="telefono" placeholder="Codigo miembro" disabled
                        v-model="miembro.telefono">
                    </div>    
                </div>
                <div class="row mb-3">
                    <label for="email" class="form-label">Email: </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="email" placeholder="Codigo miembro" disabled
                        v-model="miembro.email">
                    </div>    
                </div>
                <div class="row mb-3">
                    <label for="fecha_inicio" class="form-label">Fecha Inicio: </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="fecha_inicio" placeholder="Codigo miembro" disabled
                        v-model="miembro.fecha_inicio">
                    </div>    
                </div>
            </div>
            <div class="row mb-3">
                <label for="suscripcion_id" class="form-label">Suscripciones: </label>
                <div class="input-group">
                    <div class="input-group-text"> <font-awesome-icon icon="bank" /></div>
                    <select class="form-select" v-model="miembro.suscripcion_id">
                        <option v-for="suscripcion in suscripciones" v-bind:value="suscripciones.suscripcion_id">{{ suscripcion.tipo_suscripcion }}</option>
                    </select>
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
    name: 'EditarMiembro',
    data(){
      return{
        miembro:{
            miembro_id:0,
            miembro_nom:'',
            miembro_ape:'',
            fecha_nacimiento:'';
            genero:'';
            telefono:'',
            email:'',
            fecha_inicio:'',
            suscripcion_id:0


        },
        suscripciones: []
    }
},

methods:{
    cancelar(){
        this.$router.push({name: 'Miembros'})
    },

    async updateMiembro(){
        const res = await axios.put(`http://127.0.0.1:8000/api/miembros/${this.miembro.miembro_id}`,this.miembro)

        if (res.status == 200){
            this.$router.push({name: 'Miembros'})
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Miembro has been updated',
                shorConfirmButton: false,
                timer: 2000
            })
        }
    }
},
mounted(){
this.miembro.miembro_id = this.$route.params-id;
axios.get(`http://127.0.0.1:8000/api/miembros/${this.miembro.miembro_id}`)
     .then(response => {
        this.miembro = response.data.miembro;
        this.suscripciones = response.data.suscripciones
     })
},


}
</script>