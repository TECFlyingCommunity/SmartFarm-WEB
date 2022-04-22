import {ConfigProvider} from "antd";
import React from "react";
import "./App.css";
import Routes from "./core/routes";

function App() {
    return (
        <>
                <ConfigProvider>
                    <Routes/>
                </ConfigProvider>             
    

        </>
    );
}

export default App;
