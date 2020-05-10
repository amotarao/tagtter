<template>
  <top-page />
</template>

<script>
import { mapActions } from 'vuex';
import TopPage from '@/components/pages/TopPage';

export default {
  components: {
    TopPage,
  },
  mounted() {
    this.authInitialize();
  },
  methods: {
    ...mapActions({
      authInitialize: 'auth/initialize',
    }),
  },
};
</script>
