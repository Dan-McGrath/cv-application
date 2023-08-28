import { useState } from "react";
import Personal from "./personal/Personal.jsx";
import Experience from "./experience/Experience.jsx";
import Education from './education/Education.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello World</h1>
      <Personal />
      <Education />
      <Experience />
    </>
  );
}

export default App;
