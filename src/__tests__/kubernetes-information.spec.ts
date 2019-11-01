import * as apiCall from "../utils/axiosUtils";
import $api from "../common/ServletPathInfo";

const domain = "cdms.exem-oss.org";

// Bearer
describe("kubernetes-info", () => {
    beforeAll(() => {
        console.log("beforeAll");
    });
    it('nodeList', async () => {
        const res: object = await apiCall.get(
            `http://${domain}${$api.information.nodelist}`,
            {cluster: "core"},
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                }
            }
        );
        console.log(res);
        expect(res).toEqual("nodeList");
    });
    it("cluster", () => {
    });
    it("cluster_summary", () => {
    });
    it("clusterIdList", () => {
    });

});


describe('Basic Types', () => {
    test('Enum#number', () => {
        enum Color {Red, Green, Blue}

        let c: Color = Color.Green;
        expect(c).toBe(1)
    });

    test('Enum#name', () => {
        enum Color {Red = 1, Green, Blue}

        let colorName: string = Color[2];
        expect(colorName).toBe('Green')
    });
});
