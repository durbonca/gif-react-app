import React from 'react';
import { shallow } from 'enzyme';
import { GifApp } from '../GifApp';

describe('GifApp test', ()=>{
    test('return a component', ()=>{
        const component = shallow(<GifApp/>);
        expect(component).toMatchSnapshot();
        expect(component.find('h2').text().trim()).toBe('Gif App');
    })
})