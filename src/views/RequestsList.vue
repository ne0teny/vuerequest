<template>
    <div class="requests-list">
      <h2>Список заявок</h2>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Создана</th>
            <th>Адрес</th>
            <th>Заявитель</th>
            <th>Описание</th>
            <th>Срок</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="request in requests" :key="request.number" @click="editRequest(request)">
            <td>{{ request.number }}</td>
            <td>{{ request.created_at }}</td>
            <td>{{ request.premise + ' ' + request.apartment }}</td>
            <td>{{ request.applicant }}</td>
            <td>{{ request.description }}</td>
            <td>{{ request.due_date }}</td>
            <td>{{ request.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        requests: []
      };
    },
    async created() {
      if (!this.$store.state.isAuthenticated) {
        this.$router.push('/login');
      } else {
        const response = await axios.get('https://dev.moydomonline.ru/api/appeals/v1.0/appeals/');
        this.requests = response.data;
      }
    },
    methods: {
      editRequest(request) {
        this.$router.push({ name: 'EditRequest', params: { id: request.number } });
      }
    }
  };
  </script>
  
  <style scoped lang="scss">
  .requests-list {
    /* Твой стиль */
  }
  </style>
  