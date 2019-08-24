<template>
  <v-card
    :color="cardColor"
    @click="goTo"
    max-width="400"
    class="cardbox"
    dark
  >
    <v-card-actions>
      <v-list-tile class="grow">
        <v-list-tile-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            :src="mark.userAvatar"
          />
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>
            {{mark.userName}}
          </v-list-tile-title>
        </v-list-tile-content>

        <v-layout
          align-center
          justify-end
        >
        </v-layout>
      </v-list-tile>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'MarkCard',
  props: {
    mark: {
      type: Object,
      default: () => ({
        text: 'Some text',
        userName: 'Evan You',
        type: 'bad',
        userAvatar: '',
        _id: ''
      })
    },
    cardColor: {
      type: String,
      default: '#d23232'
    }
  },
  methods: {
    goTo() {
      const { _id } = this.mark
      this.$router.push(`lists/${_id}`)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .cardbox
    margin-bottom 10px!important
    cursor pointer!important
</style>
