import { shallowMount } from '@vue/test-utils'
import Rating from '@/components/Rating.vue'

let wrapper = null
beforeEach(() => {
  wrapper = shallowMount(Rating, {
    propsData: {
      maxStars: 5,
      initialStar: 2
    }
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('Rating', () => {
  it('renders stars', () => {
    const stars = wrapper.findAll('.star')
    expect(stars.length).toBe(5)
  }),
    it('renders active stars', () => {
      const active = wrapper.findAll('.star.active')
      expect(active.length).toBe(2)
    })
})
