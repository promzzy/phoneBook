import axios from "axios";

export const defaultHeader = {
  Accept: "application/json",
  "Cache-Control": "no-cache",
  "Content-Type": "application/json",
};

async function request(url, payload, method, header) {
  const requestMethod = method.toLowerCase();

  try {
    const response = await axios({
      method: requestMethod,
      url,
      headers: Object.assign(defaultHeader, header),
      [requestMethod === "get" ? "params" : "data"]: payload,
      mode: "no-cors",
      cache: "no-cache",
    });
    return response.data;
  } catch ({ response }) {
    return new Promise((_, reject) => {
      reject(response.data);
    });
  }
}

export { request };
