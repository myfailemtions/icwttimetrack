<template>
  <v-card>
    <v-card-title
      class="headline grey lighten-2"
      primary-title
    >
      Task form
    </v-card-title>

    <v-divider />

    <v-flex
      xs12
      md4
    >
      <v-text-field
        v-for="({
          label,
          placeholder,
          name,
          value
        }, index) in fields"
        :key="index"
        :label="label"
        :placeholder="placeholder"
        :name="name"
        :value="taskForm[value]"
        @input="value => updateTaskForm({
          value,
          name
        })"
        required
      />
    </v-flex>


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
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'
import { fields } from './taskMockForm'

export default {
  name: 'ConfirmModal',
  data: () => ({
    fields
  }),
  mounted() {
    const { id } = this.$route.params
    if (id) {
      this.getTask(id)
    }
  },
  computed: {
    ...mapState({
      taskForm: state => state.userProfile.taskForm
    }),
    ...mapGetters([
      'actionName',
      'itemId'
    ])
  },
  methods: {
    ...mapMutations([
      'updateTaskForm'
    ]),
    ...mapActions([
      'closeModal',
      'getTask'
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
