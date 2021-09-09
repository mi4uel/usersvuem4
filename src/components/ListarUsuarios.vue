<template>
    <v-container>
        <v-row class="text-center" v-if="!editado && !crear">
            <v-col class="mb-4">
                <h1 class="mb-3" > Listado de Usuarios</h1>
            </v-col>
        </v-row>
        <v-row v-if="!editado && !crear">
            <v-col class="mb-1">
                <v-btn @click="crear=true, info={} " class="mx-2 " fab dark color="indigo" >
                    <v-icon dark>mdi-plus</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-row v-if="!editado && !crear">
            <v-col cols="12">
                <v-simple-table fixed-header class="elevation-3">
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-center">ID</th>
                                <th class="text-center">Nombre</th>
                                <th class="text-center">Email</th>
                                <th class="text-center">Telefono</th>
                                <th class="text-center">Acciones</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(articulo, index) in articulos" :key="articulo.id">
                                <td class="text-center">{{index+1}}</td>
                                <td class="text-center">{{articulo.name}}</td>
                                <td class="text-center">{{articulo.email}}</td>
                                <td class="text-center">{{articulo.phone}}</td>
                                <td class="text-center">
                                    <v-btn @click="{editado=true, pasarDatos(articulo.id)}" fab small color="primary" class="mr-4" ><v-icon>mdi-pencil</v-icon></v-btn>
                                    <v-btn fab small color="error" @click.stop="dialog=true" @click="id=index"><v-icon>mdi-delete</v-icon></v-btn>                               
                                </td>
                            </tr>                        
                        </tbody>
                    </template>

                </v-simple-table>
            </v-col>
        </v-row>

        <v-dialog v-model="dialog" max-width="350">
            <v-card>
                <v-card-title class="headline">¿Esta seguro que desea eliminar el registro?</v-card-title>
                <v-card-actions>
                    <v-card-spacer></v-card-spacer>
                    <v-btn @click="dialog = false">Cancelar</v-btn>
                    <v-btn @click="confirmarBorrado(id)">Aceptar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-snackbar v-model="snackbar" color="success"> {{textsnack}}
            <template v-slot:action="{attrs}">
                <v-btn text v-bind="attrs" @click="snackbar = false">Cerrar</v-btn>
            </template>
     </v-snackbar>
     <v-snackbar v-model="actualizado" color="success"> {{textsave}}
            <template v-slot:action="{attrs}">
                <v-btn text v-bind="attrs" @click="actualizado = false">Cerrar</v-btn>
            </template>
     </v-snackbar>
     <EditarUsuario v-bind:datos="info" v-bind:crear="crear" v-if="crear || editado" @actualizar="actualizarDatos($event)" @volver="atras($event)"></EditarUsuario>
    </v-container>
    
</template>

<script>
import axios from 'axios';
import EditarUsuario from '../components/EditarUsuario.vue'
export default {
    name: 'ListarUsuarios',
    components:{
        EditarUsuario
    },
    mounted(){
        this.obtenerArticulos();
    },
    data(){
        return{
            editado:false,
            crear:false,
            dialog:false,
            articulos:null,
            id:null,
            snackbar: false,
            actualizado:false,
            textsnack:'Usuario Eliminado',
            textsave:'Usuario Actualizado',
            info:{},
            busqueda:null
        }
    },
    methods:{
        obtenerArticulos(){
            axios.get('https://jsonplaceholder.typicode.com/users/')
            .then(r=>{
                this.articulos=r.data
            })
            .catch(function(error){
                console.log(error)
            })
        },
        confirmarBorrado(id){
            this.articulos.splice(id, 1);
            this.dialog=false;
            this.snackbar=true
        },
        pasarDatos(id){
            axios.get('https://jsonplaceholder.typicode.com/users/'+id)
            .then(r=>{
                this.info=r.data
                this.id=id;
            })
        },
        actualizarDatos(info){ 
            if(this.crear){
                this.articulos.push(info);
                this.crear=false
            }else{
                this.articulos[this.id-1].name=info.name;
                this.articulos[this.id-1].email=info.email;
                this.articulos[this.id-1].phone=info.phone;
                this.editado=false;
                this.actualizado=true  
            }
        },
        atras(valor){
            if(this.editado){
                this.editado = valor
            }
            if(this.crear){
                this.crear = valor
            }
        }
    }
}
</script>