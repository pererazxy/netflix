import React from "react";
import Logo from "./assets/Logonetflix.png";

function App() {
  return (
    <div className="min-h-screen flex justify-center flex-col items-center bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/BR-pt-20240909-TRIFECTA-perspective_7df47ec8-549f-49c7-8b10-a0336681c15b_small.jpg')] bg-cover bg-center">
      <img className="w-48 self-start ml-40 mb-10" src={Logo} />
      <div className="bg-black bg-opacity-80 w-96 p-8" >
        <header className="text-3xl font-bold text-white flex-wrap mb-5">Entrar</header>
        <div className="flex gap-5 flex-col">
          <input className="text-slate-500 rounded border w-full h-16 justify-around bg-black p-2" placeholder="Email ou número de telefone" href="#" />
          <input className="text-slate-500 rounded border w-full h-16 justify-around bg-black p-2" placeholder="Senha" href="#" />
          <a className=" bg-red-600 h-10 text-center text-white rounded border-red-600 font-bold p-1" href="#">Entrar</a>
          <text className="text-gray-500 text-center text-xl">Ou</text>
          <a className=" bg-gray-600 opacity-80 h-10 text-center text-white rounded border-red-600 font-bold p-1" href="#">Usar código de acesso</a>
          <text className="text-white text-center text-">Esqueceu a senha?</text>
          <div className="flex flex-row">
            <input className="h-5 w-5" type="checkbox" />
          <label className="text-white ml-4" >Lembrar-se de mim</label>
          </div>
          <div className="flex gap-2">
            <text className="text-white">Novo por aqui?</text>
          <text className="text-white font-bold">Assine agora.</text>
          </div>
          <div className="flex ">
            <text className="text-white text-xs opacity-70">Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <text className="text-blue-700 text-xs opacity-80">Saiba mais.</text></text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
