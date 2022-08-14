import { Image } from "./../images/image/image";
import { shallow } from "enzyme";

describe("Pruebas a realizar al componente de imagen ", () => {

    let wrapper;

    let image = {
        id: 1,
        imageUrl: "https://www.infobae.com/new-resizer/nLv3x5W1j7DasOsVz_oq_YLetWs=/1200x628/filters:format(webp):quality(85)//arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/EUURIT3YORELNJGPEDTTKBXOXU",
        title: "test",
    }

    

    beforeEach(() => {
        wrapper = shallow(<Image image={image} />);
    })

    test("Testear mediante un snapshot el componente de imagen", () => {
        expect(wrapper).toMatchSnapshot();
    })

    test("Testear que estoy recibiendo como alt de la imagen el texto test", async () => {
        let imageTarget = wrapper.find('img').props();
        expect(imageTarget.alt).toBe(image.title);
    })

    test("Testear que la direccion es la impuesta en el objeto image", async () => {
        let imageTarget = wrapper.find('img').props();
        expect(imageTarget.src).toBe(image.imageUrl);
    })
})