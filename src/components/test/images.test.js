
import { shallow } from "enzyme";
import { Images } from "./../images/images";

describe("Pruebas a realizar al componente de Images", () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Images term={"Test"} />)
    })

    test("Testear que la pagina se renderiza correctamente", async () => {
        expect(wrapper).toMatchSnapshot();
    })

    test("Testear que el elemento tiene en el className animate__animated animate__bounceInUp", async () => {
        expect(String(wrapper.find('ul').prop('className')).split(" ")[2]).toBe("animate__bounceInUp");
    })

    test("Testear el valor del elemento H2", async () => {
        let valueH2 = wrapper.find('h2').text().trim();
        expect(String(valueH2).split(" ")[2]).toBe("TEST");
    })

    test("Testear si esta en el elemento className la cadena String de animate_animated",()=>{
        let ul = wrapper.find('ul');
        let className = ul.prop("className");
        expect(className.includes("animate__animated")).toBe(true);
    })

    test("Testear que no esta en el elemento className la cadena String de animate_animated",()=>{
        let ul = wrapper.find('ul');
        let className = ul.prop("className");
        expect(className.includes("animate_faraona")).not.toBe(true);
    })
});