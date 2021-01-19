import RecipeForm from '../../molecules/RecipeForm';
import Navbar from '../../organisms/Navbar';
import AddRecipe from '../AddRecipe';
import React from 'react';
import { shallow } from 'enzyme';
import '../../../setupTests.js';

it('Component contains', () => {
    const wrapper = shallow(<AddRecipe />);
    expect(wrapper.find(Navbar).length).toEqual(1);
    expect(wrapper.find(RecipeForm).length).toEqual(1);
});