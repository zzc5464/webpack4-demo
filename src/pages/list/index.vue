<template>
  <div class="list">
    <p>
      list {{data}}
    </p>
  </div>
</template>
<script>
import { TEST } from 'API';
export default {
  data() {
    return {

    }
  },
  created() {
    this.axios({
      url: TEST,
      methods: 'get',
    }).then( res => {
      this.$toast({
        show: true
      })
    })
    
  },
  computed: {
    data() {
      return this.$store.state.data
    }
  }
}
</script>

<style lang="less" scoped>
.list {
  p {
    font-size: 16px;
    background: url('~@/assets/images/add.png') no-repeat;
  }
}
</style>
