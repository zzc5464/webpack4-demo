<template>
  <div class="list">
    <p>
      list {{data}}
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  created() {
    this.axios({
      url: '/devapi/a',
      methods: 'get',
    }).then( res => {
      console.log(res);
    })
    // this.$vux.alert.show({
    // title: 'Vux is Cool',
    // content: 'Do you agree?',
    // onShow () {
    //   console.log('Plugin: I\'m showing')
    // },
    // onHide () {
    //   console.log('Plugin: I\'m hiding')
    // }
  // })
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
