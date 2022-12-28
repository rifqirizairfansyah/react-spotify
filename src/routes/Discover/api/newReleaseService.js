import api from "./axios";

export default function newReleaseService() {
  return api("new-releases", "albums");
}
