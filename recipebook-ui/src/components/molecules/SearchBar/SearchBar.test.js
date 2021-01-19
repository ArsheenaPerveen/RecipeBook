import React from 'react';
import { mount } from 'enzyme';
import SearchBar from '../SearchBar';
import '../../../setupTests.js';

let wrapper;

beforeEach(() => {
    wrapper = mount(<SearchBar />);
});

afterEach(() => {
    wrapper.unmount();
})

it('Component has input field', () => {
    expect(wrapper.find('input').length).toEqual(1);
});

// it('User is typing', () => {
//     wrapper.find('input').simulate('change', {
//         target: { value: 'new recipe' }
//     });
//     wrapper.update();
//     expect(wrapper.find('input').prop('value')).toEqual('new recipe');
// });