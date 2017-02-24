import Vue from 'vue'
import Boards from 'src/components/Boards'

describe('Boards.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Boards)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.boards h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
