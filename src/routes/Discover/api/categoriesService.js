import api from "./axios";

export default function categoriesService() {
  return api("categories", "categories");
}
