import {ConfigProvider} from "antd";
import React from "react";
import "./App.css";
import AiresRoutes from "./core/routes";

function App() {
    return (
        <>
                <ConfigProvider>
                    <AiresRoutes/>
                </ConfigProvider>             
    

        </>
    );
}

export default App;
