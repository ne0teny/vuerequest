<template>
    <div class="modal" v-if="show">
      <div class="modal-content">
        <span @click="closeModal" class="close">&times;</span>
        <form @submit.prevent="saveRequest">
          <!-- Поля формы -->
          <button type="submit">Сохранить</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['show', 'requestData'],
    methods: {
      async saveRequest() {
        // Логика сохранения
        this.closeModal();
      },
      closeModal() {
        this.$emit('close');
      }
    }
  };
  </script>
  
  <style scoped lang="scss">
  .modal {
    /* Твой стиль */
  }
  </style>
  