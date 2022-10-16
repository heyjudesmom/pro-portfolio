import TechIcons from "../../Components/TechIcons/TechIcons"
export default function AboutPage() {
    return (
        <>
            <div className="about-img"><img src="https://i.imgur.com/e81lLtK.png" alt="Photo of me" style={{ height: "30vh", borderRadius: "50%", border: "1vmin solid var(--dark-green)" }} /></div>
            <div>
                <h3 className="h3-chalk">Meet the Engineer</h3>
                <div className="card">

                    <h4>Hello!</h4>
                    <p>I'm Brianna McCarthy and I am a full stack, front end, and back end engineer based in Portland, ME. In my previous career as a teacher, I adapted content to be accessible for all users. Teaching inspired me to learn more about technology resources and I became passionate about the educational technology experience.
                    I am looking to work in a developer role with an collaborative team working to create intuitive experiences for clients.
                    </p>
                </div>
            </div>
            <div style={{ backgroundColor: "var(--dark-green)", color: "var(--white)" }}>
                <h4>Experienced with:</h4>
                <TechIcons />
                <h6>and I am always expanding my skills!</h6>
            </div>
            <div style={{ backgroundColor: "var(--green)" }}>
                <h3>Inspired by:</h3>
                <p>Collaboration</p>
                <p>Real-World Problems</p>
                <p>Creativity and Innovation</p>
                <p>Accessiblity</p>
                <p>User-Centric Design</p>
            </div>
        </>
    )
}