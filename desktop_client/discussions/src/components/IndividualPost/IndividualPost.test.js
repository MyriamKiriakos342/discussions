import React from 'react';
import { shallow } from 'enzyme';
import IndividualPost from './IndividualPost';

describe('<IndividualPost />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<IndividualPost />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
