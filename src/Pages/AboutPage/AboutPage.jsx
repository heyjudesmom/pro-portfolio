export default function AboutPage() {
    return (
        <>
        <div className="about-img"><img src="https://i.imgur.com/e81lLtK.png" alt="Photo of me" style={{ height: "30vh", borderRadius: "50%", border: "1vmin solid var(--dark-green)"}} /></div>
            <div>
                <h3 className="h3-chalk">Meet the Engineer</h3>
                <h3>Hi!</h3>
                <p>I am a full stack developer.</p>
                <p>I am a frontend engineer.</p>
                <p>I am a backend engineer.</p>
                <p>I am always expanding my skills.</p>
            </div>
            <div style={{ backgroundColor: "var(--dark-green)", color: "var(--white)" }}>
                <h3>Experienced with:</h3>
                <p>writing: Javascript, Python </p>
                <p>frontend: React, CSS, HTML</p>
                <p>backend: MongoDB, AWS, Django, PostgreSQL</p>
                <p>styling: Bootstrap, Materialize, Pure, responsive design</p>
            </div>
            <div style={{backgroundColor: "var(--green)"}}>
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