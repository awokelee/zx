<template>
  <div>{{bookid}}</div>
</template>
<script>
import { get } from '@/util'
export default {
  data(){
    return {
      bookid: ''
    }
  },
  mounted() {
    this.bookid = this.$root.$mp.query.id
    this.getDetail()
  },
  methods: {
    async getDetail() {
      const info = await get('/weapp/bookdetail', {id: this.bookid})
    }
  }
}
</script>
<style lang="scss">

</style>
