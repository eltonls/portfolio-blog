import Header from "../components/header/Header"

const Home = () => {
  return (
    <section>
      <Header />
      <h1 className="font-sans text-3xl text-white absolute top-80 left-10">
        Olá, meu nome é Elton.<br />
        Eu sou um <span className="font-bold text-foreground">Desenvolvedor de Software</span> <br />
         com foco em Web
      </h1>
    </section>
  )
}

export default Home
