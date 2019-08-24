<template>
<div>
  <div class="block-ground">
    <v-container grid-list-md >
      <h1>Tasks list</h1>
    </v-container>
  </div>
  <v-container text-xs-left>
    <v-layout row wrap>
      <Card
        :mark="currentProfile"
        cardColor="#4ec08d"
      />
      <v-flex xs12 sm3>
        <DatePicker
          name="startDate"
          @fieldUpdated="handleUpdateDate"
        />
        <DatePicker
          name="endDate"
          @fieldUpdated="handleUpdateDate"
        />
        <v-btn
          color="success"
          @click="handleSort"
        >Sort</v-btn>
      </v-flex>
      <v-toolbar color="rgb(78, 192, 141)" dark>
        <v-toolbar-title>Tasks list</v-toolbar-title>
        <v-spacer />
        <v-btn
          icon
          @click="addTask"
        >
          <v-icon>add_to_queue</v-icon>
        </v-btn>
      </v-toolbar>

      <v-data-table
        :headers="headers"
        :items="usersTasks"
        class="tasks-table"
      >
        <template v-slot:items="{
          item: {
            title,
            description,
            timestamp,
            timeSpent,
            _id
          }
        }">
          <td class="text-xs-left">{{ title }}</td>
          <td class="text-xs-left">{{ description }}</td>
          <td class="text-xs-left">{{ timeSpent }}</td>
          <td class="text-xs-left">{{ timestamp }}</td>
          <td class="text-xs-left">
            <v-btn color="success"
              @click="confirmDialog({
                actionName: 'updateTask',
                modalName: 'TaskFormModal',
                itemId: _id
              })"
            >Edit</v-btn>
            <v-btn
              color="error"
              @click="confirmDialog({
                actionName: 'removeTask',
                modalName: 'ConfirmModal',
                itemId: _id
              })"
            >Delete</v-btn>
          </td>
        </template>
      </v-data-table>
    </v-layout>
  </v-container>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({
    timestamp: {
      endDate: '',
      startDate: ''
    },
    headers: [
      {
        text: 'Task name',
        value: 'title'
      },
      { text: 'Description', value: 'description' },
      { text: 'Time Spent', value: 'timeSpent' },
      { text: 'Time Stamp', value: 'timestamp' },
      { text: 'Actions', value: 'iron' }
    ]
  }),
  components: {
    Card: () => import('../components/Card'),
    DatePicker: () => import('../components/DatePicker')
  },
  mounted() {
    const { id } = this.$route.params
    this.getTasksList(id)
  },
  methods: {
    handleSort() {
      const { id } = this.$route.params
      this.sortByDate({
        ...this.timestamp,
        userId: id
      })
    },
    handleOpenForm(props) {
      this.confirmDialog({
        ...props
      })
      this.$route.push('')
    },
    handleUpdateDate({ field, value }) {
      this.timestamp[field] = value
    },
    ...mapActions([
      'getTasksList',
      'sortByDate',
      'confirmDialog',
      'addTask'
    ])
  },
  computed: {
    ...mapGetters([
      'usersTasks',
      'currentProfile'
    ])
  }
}
</script>

<style lang="stylus">
  .tasks-table
    width 100%
</style>
