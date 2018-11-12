const GlobalMock = false
let root = ''
export const isPro = () => process.env.NODE_ENV === 'production'

// export const mock = process.env.MOCK
if (isPro()) {
  root = '/api'
} else {
  root = '/devapi'
}

let path = (inf = null, n) => {
  let result = ''
  // if (isPro()) {
    result = root + inf
  // } else {
    // switch (mock) {
    //   case 'local':
    //     result = root + '/local' + inf
    //     break
    //   case 'cross':
    //     result = root + '/cross' + inf
    //     break
    //   case 'mixin':
    //     if (n || GlobalMock) {
    //       result = root + '/testapi' + inf
    //       // result = root + '/local/api' + inf
    //       // result = root + inf
    //     } else {
    //       // result = root + '/cross' + inf  访问线上数据还有些问题
    //       result = root + '/devapi' + inf
    //       // result = root + '/cross/api' + inf
    //     }
    //     break
    // }
  // }
  return result
}

export const TEST = path('/test')
