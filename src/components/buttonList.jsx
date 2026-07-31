import Button from "./button";

const ButtonList = ()=>{
    const names = ["All", "cooking", "funny videos", "dance videos","horror movies"];
    return(
        <div>
           {names.map((name)=>(
            <Button key={name} name={name}/>
           ))} 

        </div>
    )
}

export default ButtonList;