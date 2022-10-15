export default function ProjectDetail({ p, i }) {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
    return (
            <div className="col s12 m6">
                <div className="card">
                    <div className="card-image responsive-img">
                        <img src={`${p.screenshot}`} alt={`image of ${p.name}`} className="activator"/>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator">
                            {p.name}
                        </span>
                    </div>
                    <div className="card-reveal">
                        <span class="card-title grey-text text-darken-4">{p.name}<i class="material-icons right">close</i></span>
                        <p>{p.description}</p>
                        <p>{p.technologies}</p>
                        <a className="btn-floating waves-effect waves-light black" onClick={() => openInNewTab(`${p.src}`)}><img className="material-icons" src="https://i.imgur.com/Dl5An0s.png" alt="GitHub Logo" height="40px"/></a>
                        <a className="btn-floating waves-effect waves-light black" onClick={() => openInNewTab(`${p.url}`)}><i className="material-icons">open_in_new</i></a>
                    </div>
                </div>
            </div>
    )
}