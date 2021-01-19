import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../Navbar';
import SearchBar from '../../molecules/SearchBar';
import '../../../setupTests.js';

it('has component search-bar', () => {
    const wrapper = shallow(<Navbar pathname={'/addRecipe'} />);
    expect(wrapper.find(SearchBar).length).toEqual(0);
});