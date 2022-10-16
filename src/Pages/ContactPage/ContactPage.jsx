import "./ContactPage.css"

export default function ContactPage() {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
    return (
        <div className="container">
            <h3 className="h3-chalk">Extra-curricular activities</h3>
            <div className="row">
            <a href="https://www.linkedin.com/in/brianna-mccarthy/"><img src="https://i.imgur.com/v316MzQ.png" alt="LinkedIn Logo" height="40px"/></a>
            <a href="https://github.com/heyjudesmom"><img src="https://i.imgur.com/Uopwwx5.png" alt="GitHub Logo" height="40px"/></a>
            </div>
            <button className="btn" onClick={() => openInNewTab("https://drive.google.com/file/d/1qp-2gvyzhQ_qHQs3X5IUM_aivi3Ib3ze/view?usp=sharing")}>Resume</button>
        </div>
    )
}