import Card from "./Card";

const MyBg = () => {
    return (
        <>
        <section>
            <div className="container-xl lg:container m-auto">
                <div className="p-2 text-7xl items-center text-center">
                    Here's what I do
                </div>
            </div>
        {/* </section> */}
        {/* <section className="py-4"> */}
        <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card title='Hello' type='fullstack'/>
          <Card title='Hello' type='fullstackContent'/>
          <Card title='Hello' type='softwareEngContent'/>
          <Card title='Hello' type='softwareEng'/>
        </div>
        </div>
        </section>
        </>
    )
}
export default MyBg;