import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是 App 中 store 的唯一 id
export const useStore = defineStore('main', {
  // 推荐用于完整类型推断的箭头函数
  state: () => {
    return {
      // 所有这些属性都会自动推断出它们的类型
      counter: 0,
      name: 'DiZunCaiNiao',
      isAdmin: true
    }
  },
  getters: {
    doubleCounter: state => state.counter * 2,
    // 支持传参的 getters
    prettifyName: state => {
      return (prefix: string) => `${prefix} ${state.name}`
    }
  }
})
