import { post } from "../helpers/requester.js";
import { appKey } from "../helpers/storage.js";

export function register(data) {
    return post(`user/${appKey}/`, data);
}