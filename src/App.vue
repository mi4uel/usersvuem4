<template>
  <v-app>
  <v-card
    class="mx-auto overflow-hidden" height="100%" width="100vw"
  >
    <v-app-bar color="indigo"  dark  >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Usuarios</v-toolbar-title>
      

    </v-app-bar>
    <v-main>
    <v-navigation-drawer  v-model="drawer"      absolute      bottom      temporary    >
      <v-list  nav  >
        <v-list-item-group v-model="group"  active-class="deep-purple--text text--accent-4"
        >
          <v-list-item :to="{path:'/'}">
          <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{path:'/usuarios'}">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Usuarios</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{path:'/contacto'}">
          <v-list-item-icon>
              <v-icon>mdi-email</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Contacto</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
     </v-navigation-drawer>
     <router-view/>
     </v-main>
  </v-card>
  
  </v-app>
</template>

<script>

export default {
  name: 'App',

      data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }

</script>
