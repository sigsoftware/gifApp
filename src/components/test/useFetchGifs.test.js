
import { useFetchGifs } from "./../customHooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas del customHook del useFetchGrifs", () => {

    test("Debe retornar el estado inicial", async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
        await waitForNextUpdate();
        let { data, loading } = result.current;
        expect(loading).toBe(true);
        expect(data.length).toBe(0);
    })

  /*   test("Debe retornar el estado ya cargado y el loading en false", async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
        await waitForNextUpdate();
        let { data, loading } = result.current;
        expect(loading).toBe(false);
        expect(data.length).toBe(0);
    }) */
})