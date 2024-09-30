

const NavBar = () => {
    return (
      <nav className="bg-theme border-b border-theme">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            {/* <!-- Logo --> */}
            <div>
                        <div className="md:block text-white text-2xl font-bold ml-2"><a href="/index.html">rutu.parikh()</a></div>
            </div>
            
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <a
                  href="/index.html"
                  className="text-white bg-blue-400 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Home</a
                >
                {/* <a
                  href="/jobs.html"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Education</a
                > */}
                {/* <a
                  href="/add-job.html"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Experience</a
                > */}
                <a
                  href="https://drive.google.com/file/d/1Dr_51U69XCPyureDbdQOr8zlDvbbVqw4/view?usp=sharing"
                  target="_blank"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Resume</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    )  
}
export default NavBar;