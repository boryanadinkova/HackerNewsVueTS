<template>
  <section
    class="card"
    v-if="story"
    :style="{ backgroundImage: `url(${imagePath})` }"
  >
    <div class="details-container">
      <section class="title">
        <DateComponent :timestamp="story.time" />
        <h2 class="story-title">{{ story.title }}</h2>
        <div class="story-author">by: {{ story.by }}</div>
        <div class="story-author-karma">{{ user.karma }}</div>
        <aside class="story-details">
          <div class="story-score">
            <span class="icon"></span>
            <span>{{ story.score }}</span>
          </div>
        </aside>
      </section>
      <section class="story-url">
        <a href="#">{{ story.url }}</a>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import DateComponent from './DateComponent.vue';
import { StoryObject, UserObject } from '../types';

@Options({
  props: {
    story: Object,
    user: Object,
    index: Number,
  },
  components: {
    DateComponent,
  },
})
export default class Story extends Vue {
  story!: StoryObject | null;
  user!: UserObject | null;
  index!: number;
  private imagePath = require(`../assets/images/image${this.index}.png`);
}
</script>
<style lang="scss">
@import '~/src/assets/_mixins.scss';
@import '~/src/assets/shared.scss';

.card {
  background-repeat: no-repeat;
  background-size: cover;
  border: 3px solid #b79157;
  border-radius: 10px;
  box-shadow: -1px 1px 13px 1px rgba(18, 16, 16, 0.48);
  -webkit-box-shadow: -1px 1px 13px 1px rgba(18, 16, 16, 0.48);
  -moz-box-shadow: -1px 1px 13px 1px rgba(18, 16, 16, 0.48);

  .details-container {
    @include setFlexbox($direction: column, $justify: space-between);
    @include dimensions();
  }

  .title {
    font-family: $font-title2;
    background: $details-ribbon;
    @include dimensions(100%, fit-content);
    padding: 0.5rem 0;
    font-size: 1em;
    color: $font-color-white;
    border-radius: 10px 10px 0 0;

    .story-title {
      padding: 0;
      margin: 0;
    }
  }

  .story-content {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .story-details {
    font-family: $font-title1;
    color: $font-color-black;
    font-weight: bold;
    font-size: 0.9em;
    background: rgb(160, 115, 47);
    background: linear-gradient(
      163deg,
      rgba(183, 145, 87, 1) 0%,
      rgba(201, 163, 106, 1) 54%,
      rgba(233, 204, 162, 1) 100%
    );
    border-radius: 10px;
    border: 2px solid rgb(153, 109, 42);
    padding: 0.1rem;
    width: 55px;
    height: 24px;
    margin-left: 77%;
  }

  .story-score {
    width: 100%;
  }

  .story-url {
    word-wrap: break-word;
    background: $details-ribbon;
    @include dimensions(100%, fit-content);
    @include setFlexbox();
    padding: 0.5rem 0;
    border-radius: 0 0 10px 10px;
    a {
      color: $font-color-white;
      text-align: center;
      word-break: break-all;
      font-size: 0.9em;
    }
  }

  .story-score::before {
    content: '';
    display: inline-block;
    background: url('../../src/assets/images/score-icon.svg') no-repeat;
    color: $font-color-black;
    width: 20px;
    height: 20px;
    margin: 0 6px 0 0;
  }

  .story-author-karma::before {
    content: '';
    display: inline-block;
    background: url('../../src/assets/images/reputation-icon.svg') no-repeat;
    color: $font-color-black;
    width: 20px;
    height: 20px;
    margin: 0 6px 0 0;
  }

  @media (max-width: 635px) {
    .story-details {
      margin-left: 84%;
    }
  }

  @media (max-width: 511px) {
    .story-details {
      margin-left: 79%;
    }
  }

  @media (max-width: 320px) {
    .story-details {
      margin-left: 74%;
    }
  }

  @media (min-width: 1760px) {
    .story-details {
      margin-left: 81%;
    }
  }
}
</style>
