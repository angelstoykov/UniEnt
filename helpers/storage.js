export const appKey = "kid_H1vntGZar";
export const appSecret = "d07e94e484fb4446af290fed977e04e6";

function saveData(key, value) {
    localStorage.setItem(key + appKey, JSON.stringify(value));
}

export function getData() {
    return localStorage.getItem(key + appKey);
}

export function saveUser(data) {
    saveData("userInfo", data);
    saveData("authToken", data._kmd.authtoken);
}

export function removeUser() {
    localStorage.clear();
}