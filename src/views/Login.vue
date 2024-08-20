<template>
    <div class="login-page">
      <h2>Авторизация</h2>
      <form @submit.prevent="login">
        <input v-model="username" placeholder="Логин или Телефон" required />
        <input type="password" v-model="password" placeholder="Пароль" required />
        <button type="submit">Войти</button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
        error: null
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('https://dev.moydomonline.ru/api/auth/login/', {
            username: this.username,
            password: this.password
          });
          this.$store.commit('SET_AUTH', true);
          this.$router.push('/');
        } catch (e) {
          this.error = 'Неправильные данные';
        }
      }
    }
  };
  </script>
  
  <style scoped lang="scss">
  .login-page {
    /* Твой стиль */
  }
  </style>
  