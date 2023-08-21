import React from 'react';
import { shallow } from 'enzyme';
import FormAddingPost from './FormAddingPost';

describe('<FormAddingPost />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<FormAddingPost />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
