<template>
  <main class="question-main">
    <section class="question-sidebar">
      <div class="cards-array" v-for="card in cards" :key="card.id">
        <Card
          :questionSample="card.sample"
          :id="card.id"
          :subtitle="card.subtitle"
          @remove-card="handleRemoveCard"
          @card-tap="handleCardTap"
        />
      </div>
      <div class="dropdown">
        <button class="question-button arrow" @click="handleClick">
          Vraag toevoegen
          <font-awesome-icon
            class="caret-down"
            icon="caret-down"
            pull="right"
          />
        </button>
        <ul id="question-size" v-show="isSelected">
          <li
            v-for="(size, i) in sizes"
            :key="i"
            @click.self="handleToggleCard(size)"
          >
            {{ size }}
          </li>
        </ul>
      </div>
    </section>
    <section class="question-preview">
      <InputPreview
        v-if="lastPreview"
        :questionSample="lastPreview.sample"
        :previewId="lastPreview.id"
        :selectedQuestionSize="lastPreview.subtitle"
        @input-changed="handleInputChanged"
      />
    </section>
  </main>
</template>
<script>
import Card from './Card.vue'
import InputPreview from './InputPreview.vue'
export default {
  name: 'FormPart',
  components: {
    Card,
    InputPreview
  },
  data () {
    return {
      isSelected: false,
      sizes: ['Lange tekst', 'Korte tekst'],
      sampleLong: 'Wat zijn je woonwensen?',
      sampleShort: 'Wat is je naam?',
      selectedQuestionSize: '',
      questionSample: '',
      cards: [],
      previews: [],
      lastPreview: null
    }
  },
  methods: {
    handleClick () {
      this.isSelected = !this.isSelected
    },
    handleToggleCard (size) {
      this.selectedQuestionSize = size
      this.questionSample =
        this.selectedQuestionSize === 'Lange tekst'
          ? this.sampleLong
          : this.sampleShort
      const newCardId = this.cards.length + 1
      this.addCard(newCardId, this.questionSample, this.selectedQuestionSize)
      this.addPreview(
        newCardId,
        this.questionSample,
        this.selectedQuestionSize
      )
    },
    addCard (newCardId, title, subtitle) {
      const newCard = {
        id: newCardId,
        sample: title,
        subtitle: subtitle
      }
      this.cards.push(newCard)
      this.handleClick()
    },
    addPreview (newCardId, title, subtitle) {
      const newPreview = {
        id: newCardId,
        sample: title,
        subtitle: subtitle
      }
      this.previews.push(newPreview)
      this.lastPreview = newPreview
    },
    handleRemoveCard (cardId) {
      const cardIndex = this.cards.findIndex((card) => card.id === cardId)
      if (cardIndex !== -1) {
        this.cards.splice(cardIndex, 1)
      }
      const previewIndex = this.previews.findIndex(
        (preview) => preview.id === cardId
      )
      if (previewIndex !== -1) {
        this.previews.splice(previewIndex, 1)
      }
      if (this.cards.length === 0) {
        this.lastPreview = null
      }
    },
    handleCardTap (cardId) {
      const tappedPreview = this.previews.find(
        (preview) => preview.id === cardId
      )
      this.lastPreview = tappedPreview
    },
    handleInputChanged (cardId, question) {
      const previewChangedInput = this.previews.find(
        (preview) => preview.id === cardId
      )
      previewChangedInput.sample = question
      const cardChangedInput = this.cards.find((card) => card.id === cardId)
      cardChangedInput.sample = question
    }
  }
}
</script>

<style>
.question-main {
  display: flex;
  height: 95vh;
}
.question-sidebar {
  width: 30%;
  display: flex;
  flex-direction: column;
}
.question-preview {
  width: 70%;
  border-left: 1px solid lightgray;
}
.dropdown {
  width: 80%;
  margin: 1rem auto;
}
.question-button {
  background-color: gray;
  border-radius: 6px;
  border: 0;
  color: white;
  padding: 10px 12px;
  width: 100%;
  font-size: 16px;
  position: relative;
}
.question-button:hover {
  background-color: rgb(110, 110, 110);
}
.caret-down {
  position: absolute;
  color: white;
  font-size: 1rem;
}

ul {
  list-style: none;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  width: 50%;
  margin: 0;
  padding: 0;
}
li {
  border: none;
  width: inherit;
  text-align: center;
  white-space: nowrap;
  padding: 0.5rem 0 0.5rem 1rem;
}
.cards-array {
  padding: 1rem;
}
@media only screen and (max-width: 900px) {
  .question-main {
    flex-direction: column;
  }
  .question-sidebar,
  .question-preview {
    width: 90%;
    margin: 0 auto;
  }
  .question-preview {
    border-left: 0;
  }
  .dropdown {
    width: 100%;
  }
}
</style>
