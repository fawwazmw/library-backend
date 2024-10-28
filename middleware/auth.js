// middleware/auth.js
import { getToken } from "~/utils/auth";

export default function ({ $axios, redirect }) {
  const token = getToken();
  if (!token) {
    return redirect("/login"); // Arahkan ke login jika tidak ada token
  }
  $axios.setToken(token, "Bearer");
}
