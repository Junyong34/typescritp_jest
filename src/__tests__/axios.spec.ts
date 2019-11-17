import axios from "axios";
import { extendJSCMatcher } from "../hook/index";
import BinInterfaceJSC from "../schema/restITFPayload";
extendJSCMatcher();

describe("Ajax", () => {
  it("데이터가 JSC 를 통과한다", async done => {
    const res = await axios.get("https://httpbin.org/get");
    const { data } = res;

    console.log(data);
    expect(BinInterfaceJSC).toMatchJSC(data);
    done();
  });
});
