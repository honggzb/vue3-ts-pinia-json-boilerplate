import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AllUsers from '../Users/AllUsers.vue'

describe('HelloWorld', () => {
  // it('renders properly', async () => {
  //   const wrapper = mount(AllUsers, { props: { msg: 'Hello Vitest' } })
  //   expect(wrapper.text()).toContain('Hello Vitest')
  // })
  it('should work', () => {
    expect(1+3).toBe(4)
  })
})
