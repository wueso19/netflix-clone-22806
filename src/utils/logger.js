import { ENV } from "../environment/environment";

export const logger = (msg, title = "") => {
    if (ENV.MODE === "PROD") {
        return
    }
    console.log("---------------------------------------");
    console.log(`[${title}]`, msg);
    console.log("---------------------------------------");
}