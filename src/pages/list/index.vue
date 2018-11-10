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
