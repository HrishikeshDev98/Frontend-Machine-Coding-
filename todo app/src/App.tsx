import Todos from "./components/Todos";

import "./index.css";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster />
      <Todos />
    </div>
  );
};

export default App;
