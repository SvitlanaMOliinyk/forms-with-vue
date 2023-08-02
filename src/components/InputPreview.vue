<template>
  <div class="question-changer">
    <h3>Instellingen</h3>
    <form class="smaller-form">
      <label for="previewId">Vraag</label>
      <input
        type="text"
        required
        id="previewId"
        v-model="question"
        @input="handleInput"
      />
      <div class="slider" v-if="selectedQuestionSize !== 'Korte tekst'">
        <label>Grootte tekstveld</label>
        <input
          id="rangeSlider"
          type="range"
          class="range-field"
          v-model="fieldSize"
          min="0"
          max="20"
          step="0.2"
        />
      </div>
    </form>
  </div>
  <div class="preview-part">
    <h6>Preview</h6>
    <form>
      <label>{{ questionSample }}</label>
      <input type="text" v-if="selectedQuestionSize === 'Korte tekst'" />
      <textarea
        v-else
        id="bigField"
        name="bigField"
        :rows="fieldSize"
      ></textarea>
    </form>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  name: 'PreviewComponent',
  props: ['questionSample', 'previewId', 'selectedQuestionSize'],
  emits: ['input-changed'],
  setup (props, { emit }) {
    const question = ref(props.questionSample)
    const fieldSize = ref(2)
    watch(
      () => props.questionSample,
      (newQuestionSample) => {
        question.value = newQuestionSample
      }
    )
    const handleInput = () => {
      emit('input-changed', props.previewId, question.value)
    }

    return {
      question,
      handleInput,
      fieldSize
    }
  }
}
</script>

<style scoped>
.question-changer {
  padding: 1rem 0 2rem 2rem;
  border-bottom: 0.06rem solid lightgray;
  font-size: 1.5rem;
}
.preview-part {
  padding: 1rem 2rem;
  font-size: 1.5rem;
}
form {
  display: flex;
  flex-direction: column;
}
.smaller-form {
  width: 50%;
}
.slider {
  width: 100%;
  margin-top: 2rem;
}
label {
  font-weight: 600;
}
input {
  height: 4vh;
  border-radius: 0.4rem;
  border: 0.06rem solid lightgrey;
}
.slider input {
  width: 100%;
  -webkit-appearance: none;
  background-color: rgb(148, 249, 148);
  height: 0.3rem;
}
.slider input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 50%;
  background: green;
}
.slider label {
  font-size: 1.1rem;
}
h6 {
  display: block;
  width: 10%;
  padding: 0.5rem 1rem;
  border: 0.06rem solid limegreen;
  border-radius: 0.9rem;
  text-align: center;
}
@media (max-width: 900px) {
.question-changer, .preview-part{
  font-size: 1.3rem;
}
}
</style>
