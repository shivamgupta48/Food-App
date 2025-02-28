import { useState , useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurentMenu = (resId) =>{
   const [resinfo, setResInfo] = useState(null)
    useEffect(() => {
        fetchMenu();
      }, []);
    
      const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
}    
 return resinfo;
}
export default useRestaurentMenu;