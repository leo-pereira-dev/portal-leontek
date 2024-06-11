<template>
  <v-app dark>
    <MenuDrawer
      v-if="!loginPage"
      :drawer.sync="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      :items="items"
      :rightDrawer.sync="rightDrawer"
    />
    <AppBar
      v-if="!loginPage"
      :clipped="clipped"
      :mini-variant="miniVariant"
      :title="title"
      @toggle-drawer="drawer = !drawer"
      @toggle-mini-variant="miniVariant = !miniVariant"
      @toggle-right-drawer="rightDrawer = !rightDrawer"
    />

    <v-main  class="d-flex align-center justify-center" style="padding: 0 0 0 0; margin: 100px 0 70px 0px;">
      <v-container
        class="d-flex align-center justify-center"
        style="margin-top: 0"
      >
        <v-row justify="center" align="center">

              <Nuxt />

        </v-row>
      </v-container>
    </v-main>

    <v-footer v-if="!loginPage"  app>
      <span
        >Todos os direitos reservados. &copy;
        {{ new Date().getFullYear() }}</span
      >
    </v-footer>
  </v-app>
</template>

<script>
import MenuDrawer from '@/components/MenuDrawer.vue'
import AppBar from '@/components/AppBar.vue'

export default {
  name: 'DefaultLayout',
  middleware: ['hideMenu', 'auth'],
  components: {
    MenuDrawer,
    AppBar,
  },
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Dashboard',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Tarefas',
          to: '/tarefas',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Leontek',
    }
  },
  computed: {
    loginPage() {
      return this.$store.state.loginPage
    },
  },
}
</script>


