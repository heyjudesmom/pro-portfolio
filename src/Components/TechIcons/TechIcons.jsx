import "./TechIcons.css"
export default function TechIcons({ p, i }) {
    const techUrls = [
        {"AWS":"https://www.zencos.com/wp-content/uploads/2021/11/aws-logo-768x576.png"},
        {"Bootstrap":"https://raw.githubusercontent.com/themedotid/bootstrap-icon/HEAD/docs/bootstrap-icon-css.png"},
        {"CSS3":"https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"},
        {"Django":"https://icon-library.com/images/django-icon/django-icon-0.jpg"}, 
        {"HTML5":"https://cdn0.iconfinder.com/data/icons/social-network-9/50/22-512.png"}, 
        {"Javascript":"https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"},
        {"Materialize":"https://seeklogo.com/images/M/materialize-logo-0FCAD8A6F8-seeklogo.com.png"},
        {"MongoDB":"https://img.icons8.com/color/480/mongodb.png"},
        {"PostgreSQL":"https://user-images.githubusercontent.com/24623425/36042969-f87531d4-0d8a-11e8-9dee-e87ab8c6a9e3.png"},
        {"Python":"https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"},
        {"React":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"},
        ]
    const imgs = techUrls.map(function(t) {
        return (
            <div className="icon-container"> {Object.keys(t)} 
                <img src={Object.values(t)} alt={Object.keys(t)} style={{height: "8vmin", marginInline:"1vh", maxWidth: "8vmin"}}/>
            </div>
        )
    })
    return (
            <div className="icon-list">{imgs}</div>
    )
}