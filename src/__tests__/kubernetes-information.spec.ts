import * as apiCall from "../utils/axiosUtils";
import $api from "../common/ServletPathInfo";
import {fetchSample, fetchSample2} from "../example/asyncSample";

const domain = "cdms.exem-oss.org";

// Bearer
describe("kubernetes-info", () => {
    beforeAll(() => {
        console.log("beforeAll");
    });
    it('비동기 테스트 - 1', () => {
        // 테스트가 통과 ?
        fetchSample(1, (user => {
            expect(user).toEqual({
                id: 1,
                name: 'User1',
                email: '1@test.com'
            })
        }));
    });
    it('비동기 테스트 - 2', (done) => {
        fetchSample(1, (user => {
            expect(user).toEqual({
                id: 1,
                name: 'User1',
                email: '1@test.com'
            });
            done();
        }));
    });
  // it 함수가 Promise를 리턴하면 Jest Runner는 리턴된 Promise가 resolve될 때까지 기다려줍니다.
    // it('비동기 테스트 - 3', () => {
    //  return fetchSample2(2).then(user => {
    //         expect(user).toEqual({
    //             id: 1,
    //             name: 'User1',
    //             email: '1@test.com'
    //         });
    //     });
    // });

    it('비동기 테스트 - 4', async () => {
        const user = await fetchSample2(2);
        expect(user).toEqual({
            id: 2,
            name: 'User2',
            email: '2@test.com'
        });
    });
    // const res: object = await apiCall.get(
    //     `http://${domain}${$api.information.nodelist}`,
    //     {cluster: "core"},
    //     {
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json",
    //         }
    //     }
    // );
    // console.log(res);
    // expect(res).toEqual("nodeList");
});
it("cluster", () => {
});
it("cluster_summary", () => {
});
it("clusterIdList", () => {
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
