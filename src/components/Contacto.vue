<template>
    <v-container>
        <v-row class="text-center">
            <v-col class="mb-4">
                <h1 class="mb-3" > Contacto</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <h3 class="text-center"
                >Ponte en contacto con nosotros</h3>
            </v-col>
        </v-row>
        <v-row class="mt-5"> 
            <v-col cols="4" class="text-center mb-5"><v-btn color="primary"
  elevation="4"
  fab
  x-large><v-icon dark>mdi-whatsapp</v-icon></v-btn></v-col>
            <v-col cols="4" class="text-center mb-5"><v-btn  color="primary"
  elevation="4"
  fab
  x-large><v-icon dark>mdi-facebook</v-icon></v-btn></v-col>
            <v-col cols ="4" class="text-center mb-5"><v-btn  color="primary"
  elevation="4"
  fab
  x-large><v-icon dark>mdi-instagram</v-icon></v-btn></v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Contacto'
}
</script>