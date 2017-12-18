
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
    <div class="view" v-if="allCountries !== null">
      <div v-for="(c, i) in allCountries.allCountries" :key="i">
        <h1> {{ c.name }} </h1>
      </div>
    </div>
    <div class="view"  v-else>
      <h1> We still online</h1>
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
