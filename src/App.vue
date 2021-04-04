<template>
  <header>Our Top Stories</header>
  <Stories />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Stories from './components/Stories.vue';

@Options({
  components: {
    Stories,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import '../src/assets/_mixins.scss';
@import '../src/assets/shared.scss';

body,
html {
  @include dimensions();
  @include setFlexbox();
}

body {
  margin: 0;
  background: url('../src/assets/images/background.png');
  font-family: $font-body;
  font-size: $font-size;
}

#app {
  @include dimensions(97%, 100%);
  text-align: center;
  color: $font-color-black;

  header {
    font-family: $font-handwrite;
    color: $font-color-title;
    font-size: 2em;
  }
}
</style>
