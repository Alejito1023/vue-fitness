<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold"> Editar</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Entrenadores
            </div>
            <div class="card-body">
                <form @submit.prevent="updateEntrenador">

                    <div class="row mb-3">
                        <label for="entrenador_id" class="form-label">ID</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                            <input type="text" class="form-control" id="entrenador_id" placeholder="ID del entrenador" disabled
                                   v-model="entrenador.entrenador_id">
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="nombre" class="form-label">Nombre: </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                            <input type="text" class="form-control" id="nombre" placeholder="Nombre del entrenador" 
                                   v-model="entrenador.nombre">
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="apellido" class="form-label">Apellido: </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                            <input type="text" class="form-control" id="apellido" placeholder="Apellido del entrenador" 
                                   v-model="entrenador.apellido">
                        </div>
                    </div>    

                    <div class="row mb-3">
                        <label for="especialidad" class="form-label">Especialidad: </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                            <input type="text" class="form-control" id="especialidad" placeholder="Especialidad del entrenador" 
                                   v-model="entrenador.especialidad">
                        </div>    
                    </div>

                    <div class="row mb-3">
                        <label for="telefono" class="form-label">Teléfono: </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                            <input type="text" class="form-control" id="telefono" placeholder="Teléfono del entrenador" 
                                   v-model="entrenador.telefono">
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
    name: 'EditarEntrenador',
    data(){
        return{
            entrenador: {
                entrenador_id: 0,
                nombre: '',
                apellido: '',
                especialidad: '',
                telefono: ''
            }
        }
    },
    methods:{
        cancelar(){
            this.$router.push({name: 'Entrenadores'})
        },
        async updateEntrenador(){
            const res = await axios.put(`http://127.0.0.1:8000/api/entrenadores/${this.entrenador.entrenador_id}`, this.entrenador)
            if (res.status == 200){
                this.$router.push({name: 'Entrenadores'})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Entrenador actualizado correctamente',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },
    mounted(){
        this.entrenador.entrenador_id = this.$route.params.id;
        axios.get(`http://127.0.0.1:8000/api/entrenadores/${this.entrenador.entrenador_id}`)
            .then(response => {
                this.entrenador = response.data.entrenador;
            })
    }
}
</script>
