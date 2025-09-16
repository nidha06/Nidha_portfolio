import { useEffect, useState } from "react";


function Loading(){
     const [isLoading, setIsLoading] = useState(true);
     useEffect(()=>{
        const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () =>{
      clearTimeout(loadingTimer);
    }
     })
    return(
        <>
        {isLoading && (
        <div className="loader">
          <div className="loader-content">
            <div className="loader-text">Loading Portfolio</div>
            <div className="loader-bar">
              <div className="loader-progress"></div>
            </div>
          </div>
        </div>
      )}</>
    )
}

export default Loading