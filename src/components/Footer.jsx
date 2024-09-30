import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className="mx-auto max-w-7xl px-2 py-5 sm:px-6 lg:px-8 text-center">
            {/* <div className="bg-slate-100 text-1xl text-center border-slate divide-solid mx-5 px-5 py-5"> */}
                <div className="inline px-1">Made with </div><div className="inline py-5"><FaHeart className="inline" icon="far fa-heart" /></div><div className="inline px-1"> by Rutu</div>
                
            </div>
        </>
    )
}
export default Footer;