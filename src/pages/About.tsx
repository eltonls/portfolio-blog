
import Header from "../components/header/Header"

const About = () => {
  return (
    <section className="h-screen overflow-scroll">
      <Header />
      <div className="bg-background/75 my-5 text-white rounded p-2">
        <h2 className="font-bold text-2xl">Quem sou eu</h2>
        <p>
          Sou um entusiasta dos sistemas de informação, incessantemente em busca de desafios mais robustos e na constante exploração de novas fronteiras. Considero-me um aspirante a escritor, embora as exigências da vida adulta frequentemente restrinjam o tempo que posso dedicar a esse hobby. Nos últimos anos, mergulhei profundamente no estudo abrangente do desenvolvimento, encontrando paixão em várias áreas, seja no âmbito mobile, web ou mesmo em projetos desktop - estou sempre ansioso para me envolver em algo inusitado e desafiador.
        </p>
        <h2 className="font-bold text-2xl">Habilidades</h2>
        <ul className="list-disc list-inside">
          <li>Domínio de Javascript e expertise no uso do superset Typescript para desenvolvimento de aplicativos seguros;</li>
          <li>Proficiência em HTML, CSS e Javascript;</li>
          <li>Experiência sólida com React, com projetos significativos construídos usando essa biblioteca;</li>
          <li>Conhecimento em frameworks como TailwindCSS, MaterialUI e Bootstrap;</li>
          <li>Familiaridade com sistemas de versionamento como Git e Github, amplamente empregados em vários projetos;</li>
          <li>Sólido entendimento em Java e Programação Orientada a Objetos;</li>
          <li>Fluência avançada em inglês, permitindo uma leitura fluente e compreensão aprofundada.</li>
        </ul>
      </div>
    </section>
  )
}

export default About
