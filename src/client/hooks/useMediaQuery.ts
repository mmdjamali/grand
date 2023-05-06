import { useEffect, useState } from "react"

export const useMediaQuery = () => {
    const [SM, setSM] = useState<boolean>(false)
    const [MD, setMD] = useState<boolean>(false)
    const [LG, setLG] = useState<boolean>(false)
    const [XL, setXL] = useState<boolean>(false)
    const [DXL, setDXL] = useState<boolean>(false)

    useEffect(() => {
        const onChange = () => {
            setSM(smQuery.matches)
            setMD(mdQuery.matches)
            setLG(lgQuery.matches)
            setXL(xlQuery.matches)
            setDXL(dxlQuery.matches)
        }
 
        const smQuery = window.matchMedia("(min-width : 640px)")
        const mdQuery = window.matchMedia("(min-width : 768px)")
        const lgQuery = window.matchMedia("(min-width : 1024px)")
        const xlQuery = window.matchMedia("(min-width : 1280px)")
        const dxlQuery = window.matchMedia("(min-width : 1536px)")
        
        setSM(smQuery.matches)
        setMD(mdQuery.matches)
        setLG(lgQuery.matches)
        setXL(xlQuery.matches)
        setDXL(dxlQuery.matches)
        
        window.addEventListener("resize", onChange)

        return () => {
            window.removeEventListener("resize", onChange)
        }
    },[])

    return {
        SM,
        MD,
        LG,
        XL,
        DXL
    }
}