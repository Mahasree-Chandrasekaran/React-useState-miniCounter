import {useState} from "react";
 const Home =()=>{
    const[count,SetCount]= useState(0);
    function  increaseCount(){
        SetCount(count+1);
    }
    function  decreaseCount(){
        SetCount(count-1);
    }
    return(
        <div className="Home">
           
             <h2>React Counter Mini Project</h2>
            <button onClick={increaseCount}> Click Me to increase</button>
            <button onClick={decreaseCount}> Click Me to decrease</button>
            <p>Count Is : {count}</p>
        </div>
    )
 }
 export default Home;
