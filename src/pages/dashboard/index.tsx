import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import "./estilo.css";
import Rodape from "../../components/Footer/index";
import { ISensor } from "../../core/interface"
import CardChart from "../../components/CardChart";
import api from '../../core/services/api'

const { Header, Content, Footer } = Layout;
const style = { background: "#0092ff", padding: "8px 0", margin: "1px 0 0 0" };

interface IData {
    date: string,
    value: number,
    name: string
}

const Dashboard: React.FC = () => {

    const [data, setData] = useState<ISensor[]>([]);
    const [temperatureData, setTemperatureData] = useState<IData[]>([]);
    const [luminosityData, setLuminosityData] = useState<IData[]>([]);
    const [airHumidityData, setAirHumidityData] = useState<IData[]>([]);
    const [soilHumidityData, setSoilHumidityData] = useState<IData[]>([]);


    const formatData = (data: ISensor[]) => {
        setTemperatureData([])
        setLuminosityData([])
        setAirHumidityData([])
        setSoilHumidityData([])


        data.forEach(element => {
            setTemperatureData(prev => [...prev, {
                date: element.createdAt,
                value: element.temperature,
                name: "Temperatura"
            }])
            setLuminosityData(prev => [...prev, {
                date: element.createdAt,
                value: element.luminosity,
                name: "Luminosidade"
            }])
            setAirHumidityData(prev => [...prev, {
                date: element.createdAt,
                value: element.airHumidity,
                name: "Umidade do Ar"
            }])
            setSoilHumidityData(prev => [...prev, {
                date: element.createdAt,
                value: element.soilHumidity,
                name: "Umidade do Solo"
            }])
        })
    }


    const getData = (): void => {
        api.get<ISensor[]>(`sensor`).then((response) => {
            setData(response.data)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        formatData(data)
    }, [data])


    return <Layout className="container">
        <Header
            style={ {
                position: "fixed",
                zIndex: 1,
                width: "100%",
            } }
        >
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={ ["2"] }/>
        </Header>
        <Content
            className="site-layout"
            style={ {
                padding: "0 50px",
                marginTop: 64,
            } }
        >
            <CardChart data={ temperatureData } title={ 'Temperatura' } loading={ false }/>
            <CardChart data={ luminosityData } title={ 'Luminosidade' } loading={ false }/>
            <CardChart data={ airHumidityData } title={ 'Umidade do Ar' } loading={ false }/>
            <CardChart data={ soilHumidityData } title={ 'Umidade do Solo' } loading={ false }/>

        </Content>
        <Rodape/>
    </Layout>
};

export default Dashboard;