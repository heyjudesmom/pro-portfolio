export default function TechIcons({ p, i }) {
    const techUrls = [
        "https://www.zencos.com/wp-content/uploads/2021/11/aws-logo-768x576.png", 
        "https://www.pngkey.com/png/detail/142-1424654_we-help-you-to-solve-any-issues-or.png",
        "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png",
        "https://static.djangoproject.com/img/logos/django-logo-positive.png", 
        "https://cdn0.iconfinder.com/data/icons/social-network-9/50/22-512.png", 
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1200px-Javascript-shield.svg.png",
        "https://seeklogo.com/images/M/materialize-logo-0FCAD8A6F8-seeklogo.com.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png",
        "https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175122.png",
        "https://openwhisk.apache.org/images/runtimes/icon-python-text-color-horz.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        ]
    const imgs = techUrls.map(function(url) {
        return (
            <>
            <img src={url} alt="icon" style={{height: "8vmin", marginInline:"1vh"}}/>
            </>
        )
    })
    return (
            <div>{imgs}</div>
    )
}