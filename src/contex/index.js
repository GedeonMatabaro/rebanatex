'use client'
import { createContext, useState } from "react";
export const GlobalContex=createContext(null);

export default function GlobalState({children}){
    const [showNavModal, setShowNavModal] = useState(false)
    return <GlobalContex.Provider value={{showNavModal, setShowNavModal}}>{children}</GlobalContex.Provider>
};