import axios from "axios";
import qs from "querystring";
import config from "../../../config";

const { api } = config;

export default async function axiosRequest(path, resourceType) {
  const {
    data: { access_token: token },
  } = await axios.post(
    api.authUrl,
    qs.stringify({ grant_type: "client_credentials" }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(
          `${api.clientId}:${api.clientSecret}`,
          "binary"
        ).toString("base64")}`,
      },
    }
  );
  const res = await axios.get(`${api.baseUrl}/browse/${path}?locale=id_ID`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.data[resourceType].items;
}
