import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  describe('div.App', () => {
      test('should render 0', () => {
        // Setup
        const wrapper = shallow(<App />);
        let counter = parseInt(wrapper.find('div > h1').text());        
  
        // Verify
        expect(counter).toBe(0);
      });
    
      test('when the button is clicked it should add 1 to the counter and render it', () => {
        // Setup
        const wrapper = shallow(<App />);
        const button = wrapper.find('div > button');
        let counter;
  
        // Exercise
        button.simulate('click');
        counter = parseInt(wrapper.find('div > h1').text());
  
        // Verify
        expect(counter).toBe(1);
      });
  
      test('when the button is three times clicked it should add 1 to the counter and render it', () => {
        const wrapper = shallow(<App />);
        const button = wrapper.find('div > button');
        let counter;
  
        for (let i = 0; i < 3; i++) button.simulate('click');
        counter = parseInt(wrapper.find('div > h1').text());
  
        expect(counter).toBe(3);
      });

    
    });


});