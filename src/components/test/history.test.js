import { shallow } from "enzyme";
import { History } from "../history/history";

describe("Pruebas al componente History", () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<History />);
    })

    test("Probar que la pagina se renderiza correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    })

    test("Probar que existe una lista ordenada en el componente",()=>{
        let ol = wrapper.find("ol");
        let className = ol.prop("className");
        expect(className.includes("list")).toBe(true);
    })

})