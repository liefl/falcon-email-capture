<template>
  <div>homepage {{ title }}</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '~/components/HelloWorld.vue'

@Component({
  components: {
    HelloWorld
  },
  asyncData (stuff) {
    return require('~/content/about.json')
  }
})
export default class Home extends Vue {
  public head () {
    return {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }

  mounted () {
    console.log('hey')
  }


}
</script>
