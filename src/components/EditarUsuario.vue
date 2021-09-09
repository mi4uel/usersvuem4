<template>
    <v-container>
        <v-row class="text-center">
            <v-col class="mb-4">
                <h1 class=" font-weight-bold mb-3">{{tituloAct}}</h1>
            </v-col>
        </v-row>
        <v-row >
            <v-col class="mb-1">
                <v-btn class="mx-2 " fab dark color="error" @click="volver()" >
                    <v-icon dark>mdi-undo</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <form  @submit.prevent="guardarDatos()">
                    <v-text-field  v-model="datos.name" label="Nombre" outlined required></v-text-field>
                    <v-text-field  v-model="datos.email" label="Email"   outlined required></v-text-field>
                    <v-text-field  v-model="datos.phone" label="Telefono"   outlined required></v-text-field>
                    <v-card>
                        <v-btn type="submit" color="warning" class="mr-4">Guardar</v-btn>
                    </v-card>
                </form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'EditarUsuario',
    props:['datos', 'crear'],
    data(){
        return{
            titulo:'Editar Usuario',
            actualizados:{
                name:'',
                phone:'',
                email:''
            },
            atras:false
        }
    },
    methods:{
        guardarDatos(){
            this.actualizados.name = this.datos.name
            this.actualizados.email = this.datos.email
            this.actualizados.phone = this.datos.phone
            this.$emit('actualizar', this.actualizados)
        },
        volver(){
            this.$emit('volver', this.atras)
        }
    },
    computed:{
        tituloAct(){
           return this.crear ? this.titulo='Crear Usuario' : this.titulo
        }
    }
}
</script>