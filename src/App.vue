<template>
  <div>
    <p> app vue </p>
    <router-link to='/list'>list</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
// import baseMixin from './mixins/baseMixin';
export default {
  data() {
    return {
      
    }
  },
  // mixins: [baseMixin],
  created() {
    // this.$toast({
    //   text: 'sss',
    //   type: 'cancel'
    // })
    // this.$alert({
    //   text: '',
    //   show: true,
    //   onShow() {
    //     console.log('show');
    //   },
    //   onHide() {
    //     console.log('hide');
    //   },
    // })
    // this.$loading({
    //   text: '',
    //   show: true
    // })
    
  }
}
</script>
