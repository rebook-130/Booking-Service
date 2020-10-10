import React from 'react';
import {mount, shallow} from 'enzyme';
import App from '../client/src/App.jsx';


describe('Review App', () => {
  it('should have an empty children array', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.props().toBeChecked());
  });

});