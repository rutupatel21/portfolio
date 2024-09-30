import { FaInstagram, FaLinkedin } from 'react-icons/fa6';
import greet from '../assets/images/greet.avif';
import softwareEng from '../assets/images/softwareEng.png';
import fullstack from '../assets/images/fullstack.png';
import { FaEnvelope, FaGithub } from 'react-icons/fa';
import Mail from './Mail';

const Card = ({ bgcolor = 'bg-white', title = 'Hello', type = 'greetImage' }) => {

    if (type == 'greetText') {
        return (
            <div className={`${bgcolor} p-6`}>
                <h2 className="text-7xl font-bold py-10 mt-20">Hello..!</h2>

                <p className="mt-2 mb-4 py-2">I'm Rutu Parikh. I am a Software Engineer passionate about crafting innovative solutions through code, I turn ideas into reality. Discover my work and vision.
                </p>
                <p className="mt-2 mb-4 py-2 text-center">Let's connect!
                </p>
                <div className="my-5">
                    <div className="flex place-content-center gap-4">
                        <div>
                            <FaEnvelope onClick={() => window.location = 'mailto:rutupatel.rp.rp@gmail.com'} className="size-8 inline mb-1 mr-1 text-gmail" />
                        </div>
                        <div>
                            <a href='https://github.com/rutuparikh' target="_blank" className="inline-block mx-auto">
                                <FaGithub className="size-8 inline mb-1 mr-1" />
                            </a>
                        </div>
                        <div>
                            <a href='https://www.linkedin.com/in/rutu-parikh/' target="_blank" className="inline-block mx-auto">
                                <FaLinkedin className="size-8 inline mb-1 mr-1 text-linkedin" />
                            </a>
                        </div>
                        <div>
                            <a href='https://www.instagram.com/rutu_21' target="_blank" className="inline-block mx-auto">
                                <FaInstagram className="size-8 inline mb-1 mr-1 text-instagram" />
                            </a>
                        </div>
                    </div>

                    <div className="flex place-content-center py-5">
                        <a
                            href="https://drive.google.com/file/d/1Dr_51U69XCPyureDbdQOr8zlDvbbVqw4/view?usp=sharing"
                            target="_blank"
                            className="inline-block bg-theme text-white rounded-lg px-10 py-2">
                            Resume
                        </a>
                    </div>
                </div>

            </div>
        )
    }
    else if (type == 'fullstackContent') {
        return (
            <div className={`${bgcolor} p-6`}>
                <h2 className="text-5xl font-bold py-10 mt-20">Full Stack Development</h2>

                <p className="mt-2 mb-4 py-2">Design, implement and deploy distributed and highly scalable systems using specialized knowledge of Web based technologies and Cloud services
                </p>
                <p className="mt-2 mb-4 py-2">Migrated legacy applications to microservices, improving scalability and performance
                </p>
                <p className="mt-2 mb-4 py-2">Implemented DevOps practices, automating deployments and streamline software delivery
                </p>
                <p className="mt-2 mb-4 py-2">Built projects with a varied tech stack and developed solutions that increased customer satisfaction and revenue
                </p>   
            </div>
        )
    }
    else if (type == 'softwareEngContent') {
        return (
            <div className={`${bgcolor} p-6`}>
                <h2 className="text-5xl font-bold py-10 mt-20">Software Engineering</h2>

                <p className="mt-2 mb-4 py-2">Partner with software development, product teams to solve complex problems
                </p>
                <p className="mt-2 mb-4 py-2">Work closely with engineers to architect and develop the best technical design and approach
                </p>
                <p className="mt-2 mb-4 py-2">Instill best practices for software development and documentation, assure designs meet requirements and deliver high-quality work on tight schedules
                </p>
                <p className="mt-2 mb-4 py-2">Prepare technical requirements and software design specifications
                </p>
            </div>
        )
    }
    else if (type == 'greetImage') {
        return (
            <div className={`${bgcolor} p-6 flex justify-center`}>
                <img
                    src={greet}
                    alt="Hello"
                />
            </div>
        )
    }
    else if (type == 'fullstack') {
        return (
            <div className={`${bgcolor} p-6 flex justify-center`}>
                <img
                    src={fullstack}
                    alt="Hello"
                />
            </div>
        )
    }
    else if (type == 'softwareEng') {
        return (
            <div className={`${bgcolor} p-6 flex justify-center`}>
                <img
                    src={softwareEng}
                    alt="Hello"
                />
            </div>
        )
    }

}
export default Card;