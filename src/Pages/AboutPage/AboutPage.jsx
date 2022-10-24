import TechIcons from "../../Components/TechIcons/TechIcons"
import "./AboutPage.css"

export default function AboutPage() {
    return (
        <>
            <div className="about-img"><img src="https://i.imgur.com/e81lLtK.png" alt="Brianna McCarthy" style={{ height: "30vh", borderRadius: "50%", border: "1vmin solid var(--dark-green)", marginTop:"2vmin"}} /></div>
            <div>
                <h3 className="h3-chalk">Meet the Engineer</h3>
            </div>
            <div className="container">
                <div className="row">
                    <div class="col s12 m7">
                        <div className="card">
                            <div className="card-content">
                                <h4>Hello!</h4>
                                <p className="p-hov">I am a dynamic Software Engineer with one year of experience specializing in <strong>GitHub, JavaScript, Python, and MERN-Stack</strong> software development. I'm passionate about <strong>collaboration</strong> and solving <strong>real-world problems</strong> to create high-quality, intuitive applications for users. </p>
                                <br />
                                <p className="p-hov">Teaching for the last 9 years, I have found that I am <strong>detail-oriented</strong>, <strong>passionate</strong> about meeting goals and deadlines, maintaining healthy team and client relationships, and thinking creatively to solve problems. </p>
                                <br />
                                <p className="p-hov">I want to be a <strong>developer</strong> or <strong>technical support engineer</strong> because designing and working on applications lets me use my <strong>creative and problem-solving skills</strong>. Making the switch from teacher to software engineer has already fulfilled me in many ways and I am eager to see what the future holds! </p>
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