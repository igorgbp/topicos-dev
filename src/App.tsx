import { useState } from "react";
import caminhao from "./assets/caminhao.png";
import { useForm } from "react-hook-form";

import Header from "./components/header";
import "./App.css";
import Footer from "./components/footer";

function App() {
  const [count, setCount] = useState(0);
  const [cidade, setcidade] = useState("");

  const {register, setValue, setFocus } = useForm()

  const busca = () => {
    console.log("asdf");
    fetch("https://viacep.com.br/ws/39705000/json/")
      .then((response) => response.json())
      .then((data) => console.log(data.localidade));
  };

  const checkCep = (e:any) =>{
    console.log('exec')
    const cep = e.target.value;
    // if (cep !== 8 ) return
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setValue('rua', data.logradouro)
        setValue('bairro', data.bairro)
        setValue('cidade', data.localidade)
        setValue('estado', data.uf)

      });
  }
  

  return (
    <div className="container">
      <Header></Header>
      <div className="content">
        <form>
        <img src={caminhao} width='40%'></img>
        <div className="field">
          <p className="label">CEP</p>
          <input
          {...register('cep')}
          onBlur={checkCep}
          />
        </div>

        <div className="places">
          <input {...register('rua')} value='' className="place"></input>
          <input {...register('número')} value='' className="place"></input>
          <input {...register('bairro')} value='' className="place"></input>
          <input {...register('cidade')} value='' className="place"></input>
          <input {...register('estado')} value='' className="place"></input>

        </div>

          
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
