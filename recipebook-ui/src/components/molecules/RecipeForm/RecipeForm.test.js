import React from 'react';
import { shallow } from 'enzyme';
import RecipeForm from '../RecipeForm';
import RenderList from '../../atoms/List';
import '../../../setupTests.js';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<RecipeForm data={{
        values: {},
        items: ['one'],
        instructions: ['one'],
        errors: {},
        isSubmitting: null
    }} />);
});

// it('Form has buttons, input fields', () => {
//     expect(wrapper.find('input').length).toEqual(2);
//     expect(wrapper.find('button').length).toEqual(3);
// });

it('has component list', () => {
    expect(wrapper.find(RenderList).length).toEqual(2);
})
