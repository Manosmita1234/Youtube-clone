import menuIcon from "../assets/hamburger_menu.jpg"
import youtubeLogo from "../assets/youtube_logo.webp"
import userIcon from "../assets/user_icon.jpg"
import { useDispatch } from "react-redux"
import { toggleMenu } from "../utils/appSlice"

const Header = () =>{
    const dispatch = useDispatch();
    function handleToggleSidebar(){
       dispatch(toggleMenu());
    }
    return(
        <div onClick ={()=>handleToggleSidebar()}className="grid grid-flow-col p-2 m-2 cursor-pointer shadow-lg">
            <div className="flex col-span-1 justify-center">
            <img className="h-10"
            alt="menu" src={menuIcon}/>

            <img className="h-20 mx-2"
            alt="logo" src={youtubeLogo}/>
            </div>

            <div className="col-span-10 ">
              <input className="w-1/2 border px-2 py-1 rounded-l-full focus:outline-none focus:border-blue-500 text-sm border-gray-300 " placeholder="Search"/>  
               <button className=" px-6 border py-1 border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200 transition">
      🔍
    </button>
            </div>
            
            <div>
            <img className="h-10 col-span-1"
            alt="user-icon" src={userIcon}/>

            </div>
            
        </div>
    )
}

export default Header;