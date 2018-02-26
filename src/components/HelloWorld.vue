<template>
  <div class="hello">
  </div>
</template>

<script>
// import fetchApiData from '@/api'

import testData from '@/api/testData'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    console.log(testData)
    // let responseObj = fetchApiData.queries('abc').then(function (res) {
    //   return res
    // })
    // console.log(responseObj)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
