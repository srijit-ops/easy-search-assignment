import NewTaskModal from "./components/NewTaskModal";
import Alltasks from "./components/Alltasks";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="py-6 px-8">
      <NewTaskModal />
      <Alltasks />
      <ToastContainer autoClose={1800} />
    </div>
  );
}

export default App;
