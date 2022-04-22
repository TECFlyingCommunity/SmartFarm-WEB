import React from "react"
import { MainContent } from "./styles"

const Layout: React.FC = ({ children }) => {
    return (
    <>
     <MainContent>
     {children}
    
     </MainContent>
    </>
    )
}

export default Layout