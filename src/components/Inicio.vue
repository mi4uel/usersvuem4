<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200"/>
            </v-col>
            <v-col class="mb-4">
                <h1 class="display-2 font-weight-bold mb-3">App Spa</h1>
            </v-col>
        </v-row>
        <v-row class="text-center">
            <v-col class="mb-4">
                <h3 class="display-5 font-weitght-bold mb3">Creacion de Usuarios</h3>
                <h3 class="display-5 font-weitght-bold mb3">Edicio Usuarios extistentes</h3>
                <h3 class="display-5 font-weitght-bold mb3">Eliminar Usuarios</h3>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name:'Inicio'
}
</script>