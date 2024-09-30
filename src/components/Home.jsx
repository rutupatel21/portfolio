import MyBg from "./MyBackground";
import Footer from "./Footer";
const Home = () => {
    return (
        <>
        <section className="py-4">
        <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <div className="bg-slate-100 flex border-slate divide-solid mx-5 my-5 px-10 py-10">
            <div>
            <div className="px-10 py-10  mx-5 my-10 bg-slate-200 rounded-lg">
                <div className="text-7xl mx-5 my-10 bg-slate-200">Hello</div>
                <div className="text-2xl mx-5 my-10 bg-slate-200">I'm Rutu Parikh. <br></br>I am a Software Developer.<br></br>fjkhrpigbgfnwephirgourj
                erfgherjkpwfenbhvbekmwrbiygufnme
                erfhdijcuhtrfjedcifouibvyerfowd
                I'm Kartikeya Khatri. Software D</div>
            </div>
            
            <div>                        
                <a href="job.html" class="mx-5 my-5 h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                    GitHub        
                </a>
                <a href="job.html" class="mx-5 my-5 h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                    LinkedIn        
                </a>
                <a href="job.html" class="mx-5 my-5 h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                    Instagram        
                </a>
                <a href="job.html" class="mx-5 my-5 h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                    Gmail        
                </a>
            </div>
            </div>

            <div>
            <div className="px-10 py-10 mx-5 my-10 bg-slate-200 rounded-lg">
                helloooooo
                fjkhrpigbgfnwephirgourj
                erfgherjkpwfenbhvbekmwrbiygufnme
                erfhdijcuhtrfjedcifouibvyerfowd
                I'm Kartikeya Khatri. Software Development Manager at Amazon🔥 Welcome to my portfolio and to a place where I will share my experiences/learnings from trying out different tech, reading different books & blogs.


            </div>
            </div>

        </div>
        </div>
        </div>
        </section>
        <div className="bg-slate-100 text-4xl text-center border-slate divide-solid mx-5 px-10 py-10">
            Here's what I do
        </div>
        <MyBg/>
        <Footer/>
        </>
    )
}
export default Home;