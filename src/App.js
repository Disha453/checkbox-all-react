
import './App.css';
import { useState } from 'react';





function App() {


  const [langg, setLangg] = useState([]);

  const checkSubmit = (e) => {

    if (e.target.checked) {
      setLangg([...langg, e.target.value]);
    }
    else {
      setLangg([...langg.filter((item) => item !== e.target.value)]);
    }

  }

  console.log(langg);






  const checkChange = (e) => {

    if (e.target.checked) {
      setLangg(["javascript", "html", "css"]);

    } else {
      setLangg([]);
    }
  }


  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "10%" }}>
        <table>
          <thead>
            <th>
              <label htmlFor="fav.lan."><b>Fav_Language</b></label>
              <input type="checkbox" name="lang" checked={langg.length === 3 ? true : false} onChange={(e) => checkChange(e)} />
            </th>
          </thead>


          <tbody>
            <tr style={{ display: "flex", flexDirection: "column" }}>

              <td style={{ display: "flex" }}>
                <label htmlFor="fav.lan.">javascript</label>
                <input type="checkbox" name="fav.lan." id="javascript" value="javascript" checked={langg.includes("javascript")} onChange={(e) => checkSubmit(e)} />
              </td>

              <td style={{ display: "flex" }}>
                <label htmlFor="fav.lan.">html</label>
                <input type="checkbox" name="fav.lan." id="html" value="html" checked={langg.includes("html")} onChange={(e) => checkSubmit(e)} />
              </td>

              <td style={{ display: "flex" }}>
                <label htmlFor="fav.lan.">css</label>
                <input type="checkbox" name="fav.lan." id="css" value="css" checked={langg.includes("css")} onChange={(e) => checkSubmit(e)} />
              </td>
            </tr>
          </tbody>
        </table>



      </div>
    </>
  );
}

export default App;





