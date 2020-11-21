import React from "react";
import axios from "axios";

export default function useEffectDemo4() {
  const [dataArray, setDataArray] = React.useState(null);

  React.useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      const { data } = res;
      console.log(data);
      setDataArray(data);
    });
  }, []);

  return (
    <div>
      {/* <p>#Debug {JSON.stringify(dataArray)}</p> */}
      <ul>
        {dataArray &&
          dataArray.map((item) => <li key={item.id}>{item.title}</li>)}
      </ul>
    </div>
  );
}
