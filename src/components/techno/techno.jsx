const Techno = () => {
    return (
        <div id="tech" className="border-2 rounded p-3 lg:flex lg:flex-col">
            {/* Programming Languages */}
            <div className="mb-6">
                <h2 className="text-center text-2xl font-bold mb-4">Programming Languages</h2>
                <div className="w-5/6 mx-auto flex flex-wrap text-center justify-center gap-5 mt-2 text-5xl whitespace-normal">
                    <i className="devicon-go-plain hover:text-[#00ADD8]"></i> {/* Go */}
                    <i className="devicon-kotlin-plain hover:text-[#7F52FF]"></i> {/* Kotlin */}
                    <i className="devicon-c-plain hover:text-[#A8B9CC]"></i> {/* C */}
                    <i className="devicon-cplusplus-plain hover:text-[#00599C]"></i> {/* C++ */}
                    <i className="devicon-csharp-plain hover:text-[#7F52FF]"></i> {/* C# */}
                    <i className="devicon-python-plain hover:text-[#3776AB]"></i> {/* Python */}
                    <i className="devicon-java-plain hover:text-[#007396]"></i> {/* Java */}
                    <i className="devicon-javascript-plain hover:text-[#F7DF1E]"></i> {/* JavaScript */}
                    <i className="devicon-typescript-plain hover:text-[#3178C6]"></i> {/* TypeScript */}
                </div>
            </div>

            {/* Frameworks and Libraries */}
            <div className="mb-6">
                <h2 className="text-center text-2xl font-bold mb-4">Frameworks and Libraries</h2>
                <div className="w-5/6 mx-auto flex flex-wrap text-center justify-center gap-5 mt-2 text-5xl whitespace-normal">
                    <i className="devicon-spring-original hover:text-[#6DB33F]"></i> {/* Spring */}
                    <i className="devicon-react-original hover:text-[#61DAFB]"></i> {/* React */}
                    <i className="devicon-tailwindcss-original hover:text-[#06B6D4]"></i> {/* TailwindCSS */}
                    <i className="devicon-angular-plain hover:text-[#DD0031]"></i> {/* Angular */}
                    <i className="devicon-rxjs-plain hover:text-[#B7178C]"></i> {/* RxJS */}
                </div>
            </div>

            {/* Tools and Platforms */}
            <div className="mb-6">
                <h2 className="text-center text-2xl font-bold mb-4">Tools and Platforms</h2>
                <div className="w-5/6 mx-auto flex flex-wrap text-center justify-center gap-5 mt-2 text-5xl whitespace-normal">
                    <i className="devicon-postgresql-plain hover:text-[#336791]"></i> {/* PostgreSQL */}
                    <i className="devicon-githubactions-plain hover:text-[#2088FF]"></i> {/* GitHub Actions */}
                    <i className="devicon-jenkins-line hover:text-[#D24939]"></i> {/* Jenkins */}
                    <i className="devicon-docker-plain hover:text-[#2496ED]"></i> {/* Docker */}
                    <i className="devicon-kubernetes-plain hover:text-[#326CE5]"></i> {/* Kubernetes */}
                    <i className="devicon-unity-plain hover:text-[#000000]"></i> {/* Unity */}
                    <i className="devicon-bash-plain hover:text-[#4EAA25]"></i> {/* Bash */}
                </div>
            </div>
        </div>
    )
}

export default Techno;
