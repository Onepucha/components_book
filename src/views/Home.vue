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
      logout() {
        console.log('Logout')
        this.$router.push('/login?message=logout')
      }
    },
  }
</script>