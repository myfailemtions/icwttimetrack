<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Auth</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  prepend-icon="person"
                  name="login"
                  label="Login"
                  type="text"
                  @input="value => updateLoginForm({
                    key: 'email',
                    value
                  })"
                />
                <v-text-field
                  id="password"
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  type="password"
                  @input="value => updateLoginForm({
                    key: 'password',
                    value
                  })"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary"
                @click="signIn"
              >
                Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import {
  mapState,
  mapActions,
  mapGetters,
  mapMutations
} from 'vuex'

export default {
  methods: {
    handleUpdateLogin(value, key) {
      this.updateLoginForm({
        key,
        value
      })
    },
    ...mapActions([
      'signIn'
    ]),
    ...mapMutations([
      'updateLoginForm'
    ])
  },
  computed: {
    ...mapState({
      credentials: state => state.user.loginForm
    }),
    ...mapGetters({
      error: 'loginError'
    })
  }
}
</script>
