import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('GifGridItem component test', () => {
    const title = 'Title';
    const url = 'https://media1.giphy.com/media/l2Jhjvw7QXZW5Qq2U/200w.gif';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    
    test('should render a component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe tener un párrafo en el title', () => {
        expect(wrapper.find('p').text().trim()).toBe(title);
    })

    test('debe tener una imagen', () => {
        expect(wrapper.find('img').prop('src')).toBe(url);
        expect(wrapper.find('img').prop('alt')).toBe(title);
    })

    test('debe tener una clase "animate__fadeIn"', () => {
        expect(wrapper.find('div').at(0).hasClass('animate__fadeIn')).toBe(true);
    })
})