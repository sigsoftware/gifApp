import React from "react";
import { shallow } from "enzyme";
import { Search } from "./../search/search";

describe("Pruebas al componente de Search", () => {

    let setTerm = jest.fn();
    let term = "Hola Mundo";
    let wrapper = shallow(<Search setTerm={setTerm} term={term} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<Search setTerm={setTerm} term={term} />);
    })

    test("Probar que el search se renderiza correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    })

    test("Emular el submit por un lado y saber si la funcion fue llamada o no", () => {
        let input = wrapper.find('input');
        input.simulate("submit", { preventDefault() { } });
        expect(setTerm).not.toHaveBeenCalled();
    })

    test("Emular el change del input y ver si la funcion fue alguna vez llamada", () => {
        let input = wrapper.find('input');
        let value = "Hola Mundo";
        input.simulate("change", { target: { value } });
        expect(setTerm).toHaveBeenCalledTimes(0);
    })

    test("No debe existir un parrafo en el componente", () =>{
        let p = wrapper.find('p');
        expect(p.exists()).toBe(false);
    })

 /*    test("Prueba de que la caja de texto cambio", async () => {
        wrapper = shallow(<Search setTerm={setTerm} term={term} />)
        let value = "Hola Mundo";
        let input = wrapper.find('input');
        input.simulate("change", { target: { value } });
        expect(wrapper.find('p').text().trim()).toBe(value);
    }) */

   /*  test("Simular en input change, emular el submit del formulario", () => {
        let input = wrapper.find('input');
        let value = "Hola Mundo";
        input.simulate("change", { target: { value } });
        let form = wrapper.find('input');
        form.simulate("submit", { preventDefault() { } });
        expect(setTerm).toHaveBeenCalled();
        expect(setTerm).toHaveBeenCalledWith(expect.any(Function));
        expect(input.prop('value')).toBe('');
    }) */
})