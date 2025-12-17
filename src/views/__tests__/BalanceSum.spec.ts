import { describe, it, expect , vi, assert} from 'vitest'
import { mount } from '@vue/test-utils'
import BalanceSum from '../BalanceSum.vue'

describe('BalanceSum', () => {
  it('is balanceSumUp a function', async () => {
    const wrapper = mount(BalanceSum)
    const balanceSumUpSpy = vi.spyOn(wrapper.vm, 'balanceSumUp')
    wrapper.vm.tt = []
    wrapper.vm.balanceSumUp()
    expect(balanceSumUpSpy).toHaveBeenCalled()
  })
})
