import React from 'react';
import { shallow } from 'enzyme';
import QuizPopup from './QuizPopup';

describe('<QuizPopup />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<QuizPopup />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
