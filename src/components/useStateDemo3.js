import React, { useState } from "react";

export default function useStateDemo3() {
  const initialState = { username: "", password: "" };
  const [account, setAccount] = useState(initialState);
  const [accountList, setAccountList] = useState([]);

  return (
    <div style={{ textAlign: "center" }}>
      <p>#Debug {JSON.stringify(accountList)}</p>
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
            setAccountList([
              ...accountList,
              { ...account, index: accountList.length },
            ]);
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
      <ul>
        {accountList.map((item) => (
          <li key={item.index}>
            Username: {item.username}, Password: {item.password}
          </li>
        ))}
      </ul>
    </div>
  );
}
