import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('<AddCategory /> Test', () => {

    const handleAdd = jest.fn();
    let wrapper = shallow(<AddCategory handleAdd={handleAdd} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory handleAdd={handleAdd} />);
    })

    test('Verificar Snapshot',()=>{
        expect(wrapper).toMatchSnapshot();
    })

    test('debe actualizar caja texto', ()=>{
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', {target: { value }} )
        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('No debe de postear la informacion onSubmit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(handleAdd).not.toHaveBeenCalled();
    })

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'prueba';
        wrapper.find('input').simulate('change', { target: { value } })
        wrapper.find('form').simulate('submit', { preventDefault(){} })
        expect(handleAdd).toHaveBeenCalled();
        expect(handleAdd).toHaveBeenCalledWith(expect.any(Object));
        expect(wrapper.find('input').prop('value')).toBe('')
    })
})