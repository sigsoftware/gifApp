
import { GetImagesBySearchField } from "./../helpers/getImages";

describe("Pruebas de los helpers", () => {

    test("Probar que la cantidad de elementos es 20", async () => {
        let getImages = await GetImagesBySearchField("aerith");
        expect(getImages.length).toBe(20);
    })

    test("Probar que no se reciben elementos con el termino abmccc ", async () => {
        let getImages = await GetImagesBySearchField("abmccc");
        expect(getImages.length).toBe(0);
    })

    test("Renderizar que pasa si el term no es enviado", async () => {
        let getImages = await GetImagesBySearchField('');
        expect(getImages.length).toBe(0);
    })
})