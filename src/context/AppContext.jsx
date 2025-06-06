import { createContext , useContext, useEffect, useState } from "react"
import { jobsData } from "../assets/assets";

    export const AppContext = createContext();

    export const AppContextProvider = (props)=>{
    const [searchFilter,setSearchFilter] = useState(
        {
            title:'',
            location:''
        }
    )

    const [isSearched,setisSearched] = useState(false)
    const [jobs,setJobs] = useState([])

      //Function tofech jobs
    const fetchJobs = async()=>{
        setJobs(jobsData)
    }

    useEffect(()=>{
        fetchJobs()
    },[])

    const value = {
        setSearchFilter,searchFilter,
        isSearched, setisSearched,
        jobs,setJobs
    }

    return(
        <AppContext.Provider value = {value}>
            {props.children}
        </AppContext.Provider>
    )
}

export const useAPPContext = ()=>{
    return useContext(AppContext)
}