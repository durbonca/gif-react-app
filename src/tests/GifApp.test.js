import React from 'react';
import { shallow } from 'enzyme';
import { GifApp } from '../GifApp';

describe('GifApp test', ()=>{
    test('return a component', ()=>{
        const wrapper = shallow(<GifApp/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h2').text().trim()).toBe('Gif App');
        expect(wrapper.find('AddCategory').length).toBe(1);
        expect(wrapper.find('GifGrid').length).toBe(1);
    })
})