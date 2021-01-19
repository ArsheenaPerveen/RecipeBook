import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../../atoms/Loader';
import Recipe from '../../molecules/Recipe';
import RecipeList from '../RecipeList';
import '../../../setupTests.js';

it('has component Loader and Recipe', () => {
    const wrapper = shallow(<RecipeList recipeList={[]} loadData={true} />);
    expect(wrapper.find(Loader).length).toEqual(1);
    expect(wrapper.find(Recipe).length).toEqual(0);
});