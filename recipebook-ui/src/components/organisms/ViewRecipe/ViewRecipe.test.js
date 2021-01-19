import React from 'react';
import { shallow } from 'enzyme';
import ViewRecipe from '../ViewRecipe';
import '../../../setupTests.js';
import List from '../../atoms/List';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<ViewRecipe />);
})

it('has component List', () => {
    expect(wrapper.find(List).length).toEqual(2);
});

// it('has component Recipe', () => {
//     //expect(wrapper.find(Recipe).length).toEqual(1);
// });