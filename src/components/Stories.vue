<template>
  <main class="stories-container-masonry">
    <Story
      v-for="(item, index) in storiesArr"
      :id="index + 1"
      :key="item"
      :story="item"
      :index="index"
      :user="usersArr[index]"
    />
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import axios from 'axios';
import Story from './Story.vue';
import { StoryObject, UserObject } from '../types';

@Options({
  components: {
    Story,
  },
})
export default class HelloWorld extends Vue {
  private storiesArr: Array<StoryObject> = [];
  private usersArr: Array<UserObject> = [];
  async created() {
    try {
      const storyIdArr: Array<any> = [];

      const response = await axios.get(
        `https://hacker-news.firebaseio.com/v0/topstories.json`
      );
      Object.values(response.data)
        .sort(() => Math.random() - Math.random())
        .slice(0, 10)
        .map((el) => storyIdArr.push(el));

      const storiesArr = await Promise.all(
        storyIdArr.map(async (el) => await this.getStories(el))
      );
      storiesArr.sort((a, b) => a.score - b.score);

      const usersArr = await Promise.all(
        storiesArr.map(async (el) => await this.getUsers(el.by))
      );

      this.storiesArr = storiesArr;
      this.usersArr = usersArr;
    } catch (error) {
      console.log(error);
    }
  }

  public async getStories(id: number) {
    const response = await axios.get(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
    return response.data;
  }

  public async getUsers(author: string) {
    const response = await axios.get(
      `https://hacker-news.firebaseio.com/v0/user/${author}.json`
    );
    return response.data;
  }
}
</script>
<style lang="scss">
@import '~/src/assets/_mixins.scss';
@import '~/src/assets/shared.scss';

.stories-container-masonry {
  columns: 4 300px;
  column-gap: 1rem;

  .card {
    width: 150px;
    display: inline-block;
    width: 95%;
  }

  @for $i from 1 through 10 {
    section.card:nth-child(#{$i}) {
      $h: (random(200) + 200) + px;
      $m: (random(35) + 10) + px;
      height: $h;
      margin-top: $m;
    }
  }
}
</style>
