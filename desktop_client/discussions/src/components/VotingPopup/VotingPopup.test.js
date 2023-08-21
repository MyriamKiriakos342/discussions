import React from 'react';
import { shallow } from 'enzyme';
import VotingPopup from './VotingPopup';

describe('<VotingPopup />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<VotingPopup />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
