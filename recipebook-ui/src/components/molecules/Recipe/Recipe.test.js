import React from 'react';
import { mount } from 'enzyme';
import Recipe from '../Recipe';
import ViewRecipe from '../../organisms/ViewRecipe';
import '../../../setupTests.js';

let wrapper;

beforeEach(() => {
    wrapper = mount(<Recipe data={{
        title: '',
        userName: '',
        imageURL: '',
        description: '',
        difficultyLevel: '',
    }} />);
});

afterEach(() => {
    wrapper.unmount();
})

it('Component has view recipe component', () => {
    expect(wrapper.find(ViewRecipe).length).toEqual(1);
})

// it('Card has button and heading tags', () => {
//     const wrapper = mount(<Recipe data={{}} />);
//     expect(wrapper.find('h5').length).toEqual(1);
//     expect(wrapper.find('button').length).toEqual(1);
// });

