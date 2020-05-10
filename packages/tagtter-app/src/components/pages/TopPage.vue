<template>
  <v-container>
    <v-btn class="text-capitalize mx-auto" tile outlined color="#1da1f2" @click="login">
      <v-icon left>mdi-twitter</v-icon>Twitterアカウントでログインする
    </v-btn>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions({
      login: 'auth/login',
    }),
  },
};
</script>
