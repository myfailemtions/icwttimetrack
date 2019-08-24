<template>
  <div>
    <div class="block-ground">
      <v-container grid-list-md >
        <h1>Developers list</h1>
      </v-container>
    </div>
    <v-container grid-list-md >
      <v-layout row wrap>
        <v-flex
          v-for="(index, key) in usersLists"
          :key="key"
          xs3
        >
          <v-card color="secondary">
            <Card
              :mark="index"
              cardColor="#4ec08d"
            />
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'UsersList',
  components: {
    Card: () => import('../components/Card')
  },
  mounted() {
    this.getUsersList()
  },
  methods: {
    ...mapActions([
      'getUsersList'
    ])
  },
  computed: {
    ...mapGetters([
      'usersLists'
    ])
  }
}
</script>

<style lang="stylus">
  .block-ground
    background #30343a
    width 100%
    height 200px
    display flex
    align-items flex-end

    h1
      color #fff
      font-family 'Source Sans Pro', Arial, sans-serif
</style>
