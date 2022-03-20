import {useState} from 'react'
import html2canvas from 'html2canvas';
import './App.css';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [image, setImage] = useState('');

  const onChangeLinea1 = function(e){setLinea1(e.target.value)}
  const onChangeLinea2 = function(e){setLinea2(e.target.value)}
  const onChangeImage = function(e){setImage(e.target.value)}
  const onClickExportar = function (e) {

    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/jpg");
      var link = document.createElement('a');
      link.download = '';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">

<select onChange={onChangeImage}>
  <option value="image1">image1</option>
  <option value="image2">image2</option>
  <option value="image3">image3</option>
</select><br/>

  <input type="text" onChange={onChangeLinea1} placeholder="linea 1" ></input><br/>
  <input type="text" onChange={onChangeLinea2} placeholder="linea 2" ></input><br/>
  <button onClick={onClickExportar}>Exportar</button>

    <div className='' id='meme'>
      <span>{linea1}</span><br/>
      <span>{linea2}</span><br/>
      <img src={"/" + image + ".jpg"}/>
    </div>

    </div>
  );
}

export default App;
