import { Link } from "react-router-dom";
import Ichiran from "./pages/ichiran.jsx";
import Syosai from "./pages/syosai.jsx";

function Test() {
  return (
    <div>
      <ul>
        <li>
          {/* <Link to="login">ログイン画面</Link> */}
          <Ichiran />
          {/* <Syosai /> */}
        </li>
      </ul>
    </div>
  );
}

export default Test;
