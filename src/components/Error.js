import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div style={{ alignItems: "center" }}>
      <h1>OOP's!!!</h1>
      <h2> Something went wrong!!</h2>
      <h3>
        {err.status}:{err.statusText}
      </h3>
    </div>
  );
};

export default Error;
