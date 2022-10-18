import TechIcons from "../../Components/TechIcons/TechIcons"
export default function AboutPage() {
    return (
        <>
            <div className="about-img"><img src="https://i.imgur.com/e81lLtK.png" alt="Photo of me" style={{ height: "30vh", borderRadius: "50%", border: "1vmin solid var(--dark-green)" }} /></div>
            <div>
                <h3 className="h3-chalk">Meet the Engineer</h3>
            </div>
            <div className="container">
                <div className="row">
                    <div class="col s12 m7">

                        <div className="card">
                            <div className="card-content">
                                <h4>Hello!</h4>
                                <p className="flow-text">I'm Brianna McCarthy and I am a full stack, front end, and back end engineer based in Portland, ME. In my previous career as a teacher, I adapted content to be accessible for all users. Teaching inspired me to learn more about technology resources and I became passionate about the educational technology experience.
                                    I am looking to work in a developer role with an collaborative team working to create intuitive experiences for clients.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m5">
                        <div className="card">
                            <div className="card-content">
                                <h4>Inspired by:</h4>
                                <ul className="flow-text">
                                    <li>Collaboration</li>
                                    <li>Real-World Problems</li>
                                    <li>Creativity and Innovation</li>
                                    <li>Accessiblity</li>
                                    <li>User-Centric Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="card">
                        <div className="card-content">
                            <h4>Experienced with:</h4>
                            <TechIcons />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "var(--green)" }}>

            </div>
        </>
    )
}