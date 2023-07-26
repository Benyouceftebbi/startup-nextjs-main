import { useState,useEffect } from "react";
import { db,auth } from "@/firebase/FirebaseConfig";
import isUserVIP from "./isUserVIP";
import { User } from "firebase/auth";
export default function useVIPStatus(user){
    const [vIP,setVIP]=useState<boolean>(false)
    useEffect(()=>{
if(user){
    const checkPremuimStatus= async function () {
        
        setVIP(await isUserVIP())
    };
    checkPremuimStatus()
}
    },[user])
    return vIP;

}