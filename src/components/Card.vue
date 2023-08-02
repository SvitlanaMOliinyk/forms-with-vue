
<template>
  <div class="question-card" @click="handleCardTap">
    <div class="card-titles">
      <h3 class="card-title">{{ questionSample }}</h3>
      <h5 class="card-subtitle">{{ subtitle }}</h5>
    </div>
    <div class="cross">
      <font-awesome-icon
        class="cross-icon"
        icon="times"
        @click="handleRemove()"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionCard',
  components: {},
  data () {
    return {}
  },
  props: ['id', 'subtitle', 'questionSample'],
  emits: ['card-tap', 'remove-card'],
  methods: {
    handleRemove () {
      this.$emit('remove-card', this.id)
    },
    handleCardTap () {
      this.$emit('card-tap', this.id)
    }
  }
}
</script>
<style scoped>
.question-card {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border: 2px solid limegreen;
  background-color: white;
  border-radius: 4px;
  font-size: 24px;
  box-shadow: 0 2px 6px rgb(0 0 0 / 0.2);
}
.question-card:hover {
  border: 2px solid green;
}
.cross-icon {
  color: red;
  padding: 0.5rem;
  border: 1px solid gray;
  border-radius: 4px;
}
.cross-icon:hover {
  background-color: gray;
}
h3,
h5 {
  margin: 0;
}
h5 {
  font-weight: 200;
}
</style>
