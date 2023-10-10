import React, { useEffect, useState } from "react";
import { login, jwt } from "./cart";
import Login from "./Login";
import MiniCart from "./MiniCart";

export default function CartContent() {
  const [token, setToken] = useState("");

  return (
    <div>
      JWT: {token}
      <Login />
      <MiniCart />
    </div>
  );
}
