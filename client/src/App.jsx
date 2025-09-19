import Button from 'react-bootstrap/Button';

export default function App() {
  return <>
    <h1>Homepage</h1>
    <Button variant="primary">Click me</Button>
    {/* 
    "btn-mycolor"- är en egen custom färg som finns i index.css
    "m-2" - är bootstrap, inte react-bootstrap, sätt att lägga till margin i komponenter
    Kan änvända "style" för att skapa custom css direkt i html-elementet 
    */}
    <Button
      className='btn-mycolor p-5'
      style={{ color: "black" }}
    >Click me also</Button>
  </>
}
