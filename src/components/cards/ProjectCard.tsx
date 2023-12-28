
type ProjectCardPropsType = {
  title: string,
  desc: string,
  photoUrl: string,
  link: string
}

const ProjectCard = (props: ProjectCardPropsType) => {
  return (
    <div className="flex flex-col overflow-hidden m-2 w-64 sm:grow sm:m-0.5 bg-background rounded">
      <div className="w-full overflow-hidden h-58" id="image-box">
        <a href={props.link}>
          <img className="w-full h-full" src={props.photoUrl} /> 
        </a>
      </div>
      <div className="p-5">
        <a href={props.link}>
          <h3 className="text-foreground font-bold">{props.title}</h3> 
        </a>
        <p className="text-white">{props.desc}</p>
      </div>
    </div>
  )
}

export default ProjectCard
