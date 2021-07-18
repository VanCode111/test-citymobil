import { Header, Footer, SideBar } from "./components";
import Table from "./pages/Table";
import "./scss/index.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
