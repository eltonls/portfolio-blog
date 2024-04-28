import ProjectCard from "../components/cards/ProjectCard"
import Header from "../components/header/Header"

const Projects = () => {
  return (
    <section className="h-screen overflow-scroll">
      <Header />
      <div className="flex flex-row flex-wrap justify-around mt-5">
        <ProjectCard 
          title="Nerd E-Commerce" 
          desc="Nerd Commerce é um site de e-commerce básico que implementa um carrinho utilizando Redux. Foi o meu primeiro contato com Redux e com MaterialUI. Eu implementei tanto o back quanto o front-end." 
          photoUrl="https://i.imgur.com/UQdvqVQ.png" 
          link="https://nerd-commerce.netlify.app/"
          />
        <ProjectCard 
          title="SiSoli Sistema de Solicitação de Livros" 
          desc="Esse sistema foi feito como um desafio de um processo seletivo, nele foi utilizado JS Vanilla e Bootstrap para os estilos." 
          photoUrl="https://i.imgur.com/xG9pImA.png"
          link="https://sisoli.netlify.app/"
          />
        <ProjectCard 
          title="Site de Evento da Semana SI" 
          desc="Esse site foi criado para divulgação do evento que ocorre na minha instituição de ensino, ele foi feito em colaboração com colegas e foram utilizados Styled Components e React" 
          photoUrl="https://i.imgur.com/OC9GP1R.png" 
          link="https://semana-si-uni7.vercel.app/"
          />
        <ProjectCard 
          title="Gameshark Deals" 
          desc="Esse é um app criado em React que busca e retorna as melhores ofertas de jogos com links para cada oferta. Foi feito utilizando React e Tailwindcss." 
          photoUrl="https://i.imgur.com/lUpQ1vk.png" 
          link="https://gameshark-react.vercel.app/"
          />
        <ProjectCard 
          title="Tempero Digital" 
          desc="App de Cardápio Digital criado para android utilizando Kotlin e XML. Foi o primeiro projeto que eu fiz para me familiarizar com Android"
          photoUrl="https://i.ibb.co/GprH8Cp/Screenshot-20240325-123347-1.png" 
          link="https://github.com/eltonls/tempero-digital-kt"
          />
      </div>
    </section>
  )
}

export default Projects
