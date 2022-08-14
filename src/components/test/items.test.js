
import { Items } from "../history/items/items";
import { shallow } from "enzyme";

describe("Pruebas al componente Items", () => {

    let wrapper;

    let item = "Final Fantasy";

    beforeEach(() => {
        wrapper = shallow(<Items item={item} />)
    })

    test("Renderizar la pagina correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    })

    test("Controlar si la clase de la etiqueta o elemento li tiene la clase items", () => {
        let divLi = wrapper.find('li').props();
        expect(divLi?.className).toBe('item');
    })

    test("Comprobar el contenido del boton de items", () => {
        let buttonText = wrapper.find('button').text().trim();
        expect(buttonText).toBe(item);
    })

    test("Simular el evento onClick", async() =>{
        let divLi = wrapper.find('li');
        wrapper.simulate("click");
        
    })
})