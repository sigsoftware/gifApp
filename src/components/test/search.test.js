import { Search } from "../search/search";
import { shallow } from "enzyme";

describe("Pruebas a realizar al componente search", () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Search />);
    })

    test("Probar que la pagina se renderiza correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    })
})