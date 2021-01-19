import React from 'react';
import { shallow } from 'enzyme';
import List from '../List';
import '../../../setupTests.js';

it('has list', () => {
    const wrapper = shallow(<List data={['a', 'b']} />);
    expect(wrapper.find('ol').length).toEqual(1);
});