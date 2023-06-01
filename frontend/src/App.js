import "./App.css";
import Forms from "./components/Forms";
import Graph from "./components/Graph";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white">
          Expenses Tracker
        </h1>

        <div className="grid md:grid-cols-2 gap-4">
          <Graph />

          <Forms />
        </div>
      </div>
    </div>
  );
}

export default App;
