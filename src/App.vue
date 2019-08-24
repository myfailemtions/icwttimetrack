<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>{{logo}}</span>
      </v-toolbar-title>
      <v-spacer />
    </v-toolbar>

    <v-content>
      {{dialogComponent}}
      <router-view />
      <Dialog :name="dialogComponent">
        <component :is="dialogComponent" />
      </Dialog>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  data: () => ({
    logo: '<InTimeWeTrust />'
  }),
  components: {
    ConfirmModal: () => import('./components/ConfirmModal'),
    Dialog: () => import('./components/Modal'),
    TaskFormModal: () => import('./components/TaskFormModal')
  },
  computed: {
    ...mapGetters({
      dialogComponent: 'modalName'
    })
  }
}
</script>

<style lang="stylus">
  body, h1, h2, h3, p, span, ul, li
    font-family 'Source Sans Pro', Arial, sans-serif!important
</style>
