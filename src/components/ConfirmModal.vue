<template>
  <v-card>
    <v-card-title
      class="headline grey lighten-2"
      primary-title
    >
      Delete item
    </v-card-title>

    <v-card-text>
      Are you sure?
    </v-card-text>

    <v-divider />

    <v-card-actions>
      <v-spacer />
      <v-btn
        color="primary"
        flat
        @click="closeModal"
      >
        Cancel
      </v-btn>
      <v-btn
        color="primary"
        flat
        @click="callAction"
      >
        I accept
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ConfirmModal',
  computed: {
    ...mapGetters([
      'actionName',
      'itemId'
    ])
  },
  methods: {
    ...mapActions([
      'closeModal'
    ]),
    callAction() {
      this.$store.dispatch(
        this.actionName,
        this.itemId
      )
    }
  }
}
</script>
