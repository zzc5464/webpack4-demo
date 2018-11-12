export default {
  methods: {
    $toast( options ) {
      this.$vux.toast.show({
        text: options.text || '',
        time: options.time || 2000,
        type: options.type, // success, warn, cancel, text	
        width: options.width,
        position: options.position || 'default', // 可选值 default, top, middle, bottom
        'is-show-mask': options.showMask || true,
      })
    },
    $loading( options ) {
      if(options.show) {
        this.$vux.loading.show(options)
      }else {
        this.$vux.loading.hide()
      }
    },
    $alert(options) {
      if(options && options.show) {
        this.$vux.alert.show({
          title: 'Vux is Cool',
          content: 'Do you agree?',
          onShow () {
            options.onShow && options.onShow(true)
          },
          onHide () {
            options.onHide && options.onHide(true)
          }
        })
      }else {
        this.$vux.alert.hide()
      }
    }
  }
}