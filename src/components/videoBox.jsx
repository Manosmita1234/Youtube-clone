const VideoBox = ({img, title, channelName, view}) =>{
    return(
        <div className="w-80 mb-8 cursor-pointer "> 
           <img className="w-full h-44 object-cover rounded-xl hover:rounded-none transition-all duration-300"
           src={img}/>
           
           <div className="mt-3">
            <h2 className="font-semibold text-[16px] leading-5 line-clamp-2">
                {title}
            </h2>
             <p className="text-gray-600 text-sm mt-2">
          {channelName}
        </p>

        <p className="text-gray-600 text-sm">
          {Number(view).toLocaleString()} views
        </p>

           </div>
         
        </div>
    )
}

export default VideoBox;