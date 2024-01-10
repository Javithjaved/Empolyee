import { useState } from "react";
import DashBoardPage from "../pages/DashBoardPage";

const CommonComponents=({ inputArr, active, setActive, isSignedIn, setIsSignedIn })=>{
    const [userValue,setUserData]=useState(inputArr);
        return (
            <>
            <DashBoardPage 
            inputArr={inputArr}
            active={active}
            setActive={setActive}
            isSignedIn={isSignedIn}
            setIsSignedIn={setIsSignedIn}
            setUserData={setUserData}
            userValue={userValue}
            />
            </>
        );
    }
  export default CommonComponents;
