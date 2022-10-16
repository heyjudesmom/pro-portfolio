import ProjectList from "../../Components/ProjectList/ProjectList";
import { useState } from "react";

export default function ProjectPage() {
    const [projects, setProjects] = useState([
        {id: 4, 
        name: 'abubble',
        description: 'lifestyle organizer with dashboard feature', 
        technologies: ['MERN-Stack', 'Bootstrap'],
        url: 'https://abubble-organizer.herokuapp.com/',
        src: 'https://github.com/heyjudesmom/abubble',
        screenshot: 'https://i.imgur.com/EAK68AL.png',
        }, 
        {id: 3, 
        name: 'Local Notion',
        description: 'purchase tracker for shopping at small businesses', 
        technologies: ['MEN-Stack', 'Google Cloud Platform'],
        url: 'https://local-notion-purch-tracker.herokuapp.com/',
        src: 'https://github.com/heyjudesmom/purchase-tracker',
        screenshot: 'https://i.imgur.com/SJSfv1q.png',
        },
        {id: 2, 
        name: 'Save the Date',
        description: 'Memory tracker with entries and photo upload capability', 
        technologies: ['Python', 'Django', 'PostgreSQL', 'AWS', 'Materialize'],
        url: 'https://savethe-date.herokuapp.com/',
        src: 'https://github.com/heyjudesmom/save-the-date',
        screenshot: 'https://i.imgur.com/aJL2aH6.png',
        },
        {id: 1, 
        name: 'Mastermind',
        description: 'Browser based game', 
        technologies: ['Javascript', 'HTML', 'CSS'],
        url: 'https://heyjudesmom.github.io/Mastermind/',
        src: 'https://github.com/heyjudesmom/Mastermind',
        screenshot: 'https://i.imgur.com/FHlsA9K.png',
        },
      ]);
    return (
        <>
            <h3 className="h3-chalk">Homework</h3>
            <ProjectList projects={projects}/>
        </>
    )
}