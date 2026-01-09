import "./App.css";
import AboutMe from "./components/AboutMe";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <div className="h-screen w-screen relative bg-black">
        <h1>Something!</h1>
        <AboutMe />
      </div>
    </ErrorBoundary>
  );
}

export default App;
