import { Link } from "react-router-dom";
const Firstpage = () => {
  return (
    <div>
      <h1 className="bigtitle">welcome </h1>
      <Link to={{ pathname: "/listtask" }}>
        <span className="bigtitle">please click me </span>
      </Link>
    </div>
  );
};

export default Firstpage;
