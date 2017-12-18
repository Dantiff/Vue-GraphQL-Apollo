
<script>
  import gql from 'graphql-tag'

  export default {
    name: 'welcome',
    apollo: {
      allCountries: {
        query: gql`{
          allCountries {
            name
            continentName
          }
        }
        `,

        // http://localhost:47274/graphql?query={message}

        // note that we're using "prefetch" here
        // it will let apolloProvider know that
        // we also want to fetch this content server side
        prefetch: true
      },
    },
    data () {
      console.log('data', this.allCountries);
      return {
        // default value for the message
        allCountries: [],
      }
    }
  }
</script>

<template>
  <!-- <div v-if="allCountries !== undefined"> -->
    <div class="view" v-if="allCountries.length !== 0">
      <div v-for="(c, i) in allCountries.allCountries" :key="i">
        <h1> {{ c.name }} </h1>
      </div>
    </div>
  <!-- </div> -->
</template>

<style scoped>
  .view {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
  }
</style>
