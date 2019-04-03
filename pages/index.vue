<template>
  <div>homepage {{ content.title }}: {{ index }}</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'
import HelloWorld from '~/components/HelloWorld.vue'

@Component({
  components: {
    HelloWorld
  },
  asyncData () {
    return {
      content: require('~/content/about.json')
    }
  },
  head () {
    return {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})
export default class Home extends Vue {


  get index () {
    return this.$store.state.index
  }

  mounted () {
    console.log(this.$store)
  }


}
</script>
