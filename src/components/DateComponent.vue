<template>
  <div class="formatted-date">{{ formatDateCreated }}</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    timestamp: Number,
  },
})
export default class DateComponent extends Vue {
  timestamp!: number;

  get formatDateCreated() {
    const date = new Date(this.timestamp * 1000);
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const day = date.getDate();
    const minutes =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
    const hour =
      date.getHours() < 12
        ? `${date.getHours()}:${minutes} AM`
        : `${date.getHours() - 12}:${minutes} PM`;

    const dateString = `${month} ${day}, ${year}, ${hour}`;
    return dateString;
  }
}
</script>
