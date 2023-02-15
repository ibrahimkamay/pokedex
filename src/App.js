import "./App.css";
import Content from "./components/Content";
import { ContainerProvider } from "./context/ContainerContext";

function App() {
  return (
    <div>
      <ContainerProvider>
        <Content />
      </ContainerProvider>
    </div>
  );
}

export default App;
