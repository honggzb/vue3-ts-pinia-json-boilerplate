import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import GuessAge from "../GuessAge.vue";

describe('GuessAge', () => {
 it("testing GuessAge component props", () => {
    const wrapper = mount(GuessAge, { props: { title: 'Guess User Age' } });
    expect(wrapper.text()).toContain("Guess User Age");
 });
 it("Test if data is a function", () => {
    expect(typeof GuessAge.data).toBe("function");
  });

})
