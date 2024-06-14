import { Helper } from "../utils";
import { ContractUtils } from "../../src/ContractUtils";
import URI from "urijs";
import { HTTPClient } from "../../src/HttpClient";

const beautify = require("beautify");

async function main() {
    const RELAY_ENDPOINT = process.env.RELAY_ENDPOINT || "";
    const userInfo = Helper.loadUserInfo();
    const phoneHash = ContractUtils.getPhoneHash(userInfo.phone);
    const account = await Helper.phoneToAccount(phoneHash);
    console.log(`registered: ${phoneHash} - ${account}`);

    const chainInfo = await Helper.getChainInfoOfSideChain();
    console.log(`chain info : ${chainInfo.network.chainId}`);
    const nonce = await Helper.getNonceOfLedger(userInfo.wallet.address);
    console.log(`nonce : ${nonce.toString()}`);
    const signature = await ContractUtils.signChangePayablePoint(
        userInfo.wallet,
        phoneHash,
        nonce,
        chainInfo.network.chainId
    );
    const param = {
        phone: phoneHash,
        account: userInfo.wallet.address,
        signature,
    };
    const url = URI(RELAY_ENDPOINT).directory("/v1/ledger").filename("changeToPayablePoint").toString();
    const client = new HTTPClient();
    const response = await client.post(url, param);
    if (response.data.code !== 0) {
        console.error("Error!", response.data.error.message);
        process.exit(response.data.code);
    }

    console.log("처리결과입니다.");
    console.log(response.data.code);
    console.log(beautify(JSON.stringify(response.data.data), { format: "json" }));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
