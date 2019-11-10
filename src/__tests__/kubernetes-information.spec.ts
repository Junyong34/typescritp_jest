// import {get}  from "../utils/axiosUtils";
import * as apiCall from "../utils/axiosUtils";
import $api from "../common/ServletPathInfo";
import {fetchSample, fetchSample2} from "../example/asyncSample";
// import axios from 'axios';
import {findOne} from "../utils/user";

// jest.mock('axios');

//

const domain = "cdms.exem-oss.org";
// const serviceIns = new ServiceCall({
//     URL: `http://${domain}`,
//     HEADERS: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//     },
// });
// const Token = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTU2MjY0ODQ4OCwiZXhwIjoxNDk3NDQzNDA4OH0.GY0HpRi3xLmfb5pzQvnZdHCmQ2Xn7iXcwFBnLyWMa0OZuzRDTw7P1X417zTRAZHIafAOMgrUqjUhjzFqho-4uQ`
// ServiceCall.commonHeaderToken(Token);
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

    test('findOne returns a user', async () => {
        const user = await findOne(1);

        // console.log(user);
        expect(user).toHaveProperty('id', 1);
        // expect(user).toHaveProperty('name', 'Leanne Graham');
    });
    it('비동기 테스트 - 5', async () => {
        // serviceIns.setApiPath($api.information.nodelist);
        // const url = `http://${domain}${$api.information.nodelist}`;
        const url = `http://${domain}${$api.authResource.auth_resources}`;
        console.log(url, 131231231);
        const res = await apiCall.get(
            url,
            // {clusterId: "core"},
        )
        console.log(res);
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
