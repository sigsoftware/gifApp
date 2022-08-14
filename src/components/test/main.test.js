
import { shallow } from "enzyme";
import { Main } from "./../main/main";

describe("Pruebas del componente Main", () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Main />);
    })

    test("Probar que la pagina se renderiza correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    })

    test("Comprobar que existe el componente Search", async () => {
        expect(wrapper.find('Search').exists()).toBe(true);
    })

    test("Comprobar que existe el componente Images", async () => {
        let defaultCategories = ["Final Fantasy VII", "Final Fantasy X"];
        wrapper = shallow(<Main defaultCategories={defaultCategories} />);
        expect(wrapper.find('Items').length).toBe(defaultCategories.length);
    })
})