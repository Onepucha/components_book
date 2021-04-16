<template>
  <div>
    <div class="page-title">
      <a href="#" class="black-text" @click.prevent="logout">Выйти
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    methods: {
      async logout() {
        await this.$store.dispatch('logout')
        this.$router.push('/login?message=logout')
      }
    },
  }
</script>