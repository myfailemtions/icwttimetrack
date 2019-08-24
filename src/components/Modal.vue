<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="isWindowOpen"
      width="500"
      :persistent="true"
    >
      <v-card>
        <slot />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Dialog',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    isWindowOpen: false
  }),
  computed: {
    ...mapGetters([
      'isModalOpen',
      'modalName'
    ]),
    ...mapMutations([
      'openMenu'
    ])
  },
  watch: {
    isModalOpen() {
      this.isWindowOpen = this.name === this.modalName && this.isModalOpen
    }
  }
}
</script>
