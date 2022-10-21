import "./App.css";
import { Adress } from "./Component/Profile/Adress";
import { Fullname } from "./Component/Profile/Fullname";
import { Profilephoto } from "./Component/Profile/Profilephoto";

function App() {
  return (
    <div>
      <Profilephoto />
      <Fullname />
      <Adress />
    </div>
  );
}

export default App;
