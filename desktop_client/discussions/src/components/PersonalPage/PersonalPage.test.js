import React from 'react';
import { shallow } from 'enzyme';
import PersonalPage from './PersonalPage';

describe('<PersonalPage />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<PersonalPage />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
