import Navbar from '../../organisms/Navbar';
import FilterRecipes from '../../organisms/FilterRecipes';
import RecipeList from '../../organisms/RecipeList';
import HomePage from '../HomePage';
import React from 'react';
import { shallow } from 'enzyme';
import '../../../setupTests.js';

it('Component contains', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find(Navbar).length).toEqual(1);
    expect(wrapper.find(FilterRecipes).length).toEqual(1);
    expect(wrapper.find(RecipeList).length).toEqual(1);
});