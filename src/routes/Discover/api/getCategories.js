import api from "./axios";

export default function getCategories() {
  return api("categories", "categories");
}
