import { shallow } from "enzyme";
import { GetImages } from "../data/getImages";

describe("Pruebas a realizar sobre el customHook de GetImages",()=>{

    test("Probar el consumo de la API usando metodos de GET", async()=>{
        expect(GetImages.length).toBe(20);
    })
})