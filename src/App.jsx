import languages from "../languages.js";
import LanguageCard from "./components/languageCard.jsx";
import Button from "./components/button.jsx";
function App() {
  //linguaggi js
  console.log(languages);

  return (
    <>
      <h1>Learn Web Development</h1>
      {languages.map((language) => (
        <button key={language.id}>{language.title}</button>
      ))}
    </>
  );
}

export default App;
