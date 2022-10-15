import ProjectDetail from "../ProjectDetail/ProjectDetail";

export default function ProjectList({projects}) {
    const projectArr = projects.map(function(p) {
        return <ProjectDetail p={p} key={p.id}/>
    })

    return (
        <div className="container">
            <div className="row">
                {projectArr[0]}
                {projectArr[1]}
            </div>
            <div className="row">
                {projectArr[2]}
                {projectArr[3]}
            </div>
        </div>
    )
}