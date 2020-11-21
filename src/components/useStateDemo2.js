import React, { useState } from "react";

export default function useStateDemo2() {
  const initialState = { username: "", password: "" };
  const [account, setAccount] = useState(initialState);

  return (
    <div style={{ textAlign: "center" }}>
      <p>#Debug {JSON.stringify(account)}</p>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={account.username}
          onChange={(e) => {
            setAccount({ ...account, username: e.target.value });
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Password"
          value={account.password}
          onChange={(e) => {
            setAccount({ ...account, password: e.target.value });
          }}
        />
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            alert(JSON.stringify(account));
          }}
        >
          Submit
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setAccount(initialState);
          }}
        >
          Clear
        </button>
      </form>
    </div>
  );
}
