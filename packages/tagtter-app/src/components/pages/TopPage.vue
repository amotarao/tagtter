<template>
  <v-container>
    <v-btn
      v-if="!loggedIn"
      class="text-capitalize mx-auto"
      tile
      outlined
      color="#1da1f2"
      :loading="buttonLoading"
      :disabled="buttonLoading"
      @click="login"
    >
      <v-icon left>mdi-twitter</v-icon>Twitterアカウントでログインする
    </v-btn>
    <p v-else>ログイン済</p>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      loading: 'auth/loading',
      loggingIn: 'auth/loggingIn',
      loggedIn: 'auth/loggedIn',
    }),
    buttonLoading() {
      return this.loading || this.loggingIn;
    },
  },
  methods: {
    ...mapActions({
      login: 'auth/login',
    }),
  },
};
</script>
