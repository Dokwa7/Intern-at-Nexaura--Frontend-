import Header from "./components/header/Header";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
