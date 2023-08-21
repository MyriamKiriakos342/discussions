import React from 'react';
import { shallow } from 'enzyme';
import CommunityPage from './CommunityPage';

describe('<CommunityPage />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<CommunityPage />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
