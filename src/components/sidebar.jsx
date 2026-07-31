import { useSelector } from "react-redux";

const Sidebar = ()=>{
    const isMenuOpen = useSelector((store)=> store.app.isMenuOpen);
    if(!isMenuOpen) return null;

    return(
        <div className="w-48 h-full p-5 shawdow-lg border border-r-gray-300">
            <h1 className="font-bold">Subscriptions</h1>
            <h1 className="font-bold">You</h1>
            <h1 className="font-bold">More from youtube</h1>
            <h1 className="font-bold">explore</h1>
            </div>
    )
}

export default Sidebar;