export default function App() {
  return <>
    <h1 className="center-align">Homepage</h1>
    {/* 
      "my-margin" - är en custom margin som finns i index.css
      Kan änvända "style" för att skapa custom css direkt i html-elementet 
    */}
    <a className="waves-effect waves-light btn my-margin">Knapp</a>
    <a
      className="waves-effect waves-light btn"
      style={{ backgroundColor: '#22c55e' }}>Knapp 2
    </a>
  </>
}
