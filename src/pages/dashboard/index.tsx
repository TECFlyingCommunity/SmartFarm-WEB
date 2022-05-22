import React, { useEffect, useState } from 'react'
import { Layout, Menu, Card, Row, Col } from 'antd'
import 'antd/dist/antd.css'
import './estilo.css'

import Rodape from '../../components/Footer/index'
import { ISensor } from '../../core/interface'
import CardChart from '../../components/CardChart'
import api from '../../core/services/api'
import { borderColor } from '@mui/system'

const { Header, Content, Footer } = Layout
const style = { background: '#0092ff', padding: '8px 0', margin: '1px 0 0 0' }

interface IData {
  date: string
  value: number
  name: string
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<ISensor[]>([])
  const [temperatureData, setTemperatureData] = useState<IData[]>([])
  const [luminosityData, setLuminosityData] = useState<IData[]>([])
  const [airHumidityData, setAirHumidityData] = useState<IData[]>([])
  const [soilHumidityData, setSoilHumidityData] = useState<IData[]>([])

  const formatData = (data: ISensor[]) => {
    setTemperatureData([])
    setLuminosityData([])
    setAirHumidityData([])
    setSoilHumidityData([])

    data.forEach((element) => {
      setTemperatureData((prev) => [
        ...prev,
        {
          date: element.createdAt,
          value: element.temperature,
          name: 'Temperatura',
        },
      ])
      setLuminosityData((prev) => [
        ...prev,
        {
          date: element.createdAt,
          value: element.luminosity,
          name: 'Luminosidade',
        },
      ])
      setAirHumidityData((prev) => [
        ...prev,
        {
          date: element.createdAt,
          value: element.airHumidity,
          name: 'Umidade do Ar',
        },
      ])
      setSoilHumidityData((prev) => [
        ...prev,
        {
          date: element.createdAt,
          value: element.soilHumidity,
          name: 'Umidade do Solo',
        },
      ])
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

  return (
    <Layout className="container" style={{ background: '#2f3e46' }}>
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
          marginTop: 64,
          marginRight: 15,
          marginLeft: 15,
          background: '#84a98c',

          backgroundImage: 'url(/image.png)',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="site-card-wrapper">
          <Card
            style={{
              background: '#cad2c5',
              marginTop: 20,
              borderColor: '#000000',
              border: '2px solid red',
            }}
          >
            <Row gutter={18}>
              <Col xs={24} sm={24} md={12} lg={8} xl={12}>
                <Card
                  style={{
                    textAlign: 'center',
                    background: '#cad2c5',
                    borderColor: '#cad2c5',
                    border: '2px solid red',
                  }}
                >
                  <CardChart
                    data={temperatureData}
                    title={'Temperatura'}
                    loading={false}
                  />
                </Card>
              </Col>

              <Col xs={24} sm={24} md={12} lg={8} xl={12}>
                <Card
                  style={{
                    textAlign: 'center',
                    background: '#cad2c5',
                    border: '2px solid red',
                  }}
                  bordered={false}
                >
                  <CardChart
                    data={luminosityData}
                    title={'Luminosidade'}
                    loading={false}
                  />
                </Card>
              </Col>

              <Col xs={24} sm={24} md={12} lg={8} xl={12}>
                <Card
                  style={{
                    textAlign: 'center',
                    background: '#cad2c5',
                    border: '2px solid red',
                  }}
                  bordered={false}
                >
                  <CardChart
                    data={airHumidityData}
                    title={'Umidade do Ar'}
                    loading={false}
                  />
                </Card>
              </Col>

              <Col xs={24} sm={24} md={12} lg={8} xl={12}>
                <Card
                  style={{
                    textAlign: 'center',
                    background: '#cad2c5',
                    border: '2px solid red',
                  }}
                  bordered={false}
                >
                  <CardChart
                    data={soilHumidityData}
                    title={'Umidade do Solo'}
                    loading={false}
                  />
                </Card>
              </Col>
            </Row>
          </Card>
        </div>
      </Content>
      <Footer>
        <Rodape />
      </Footer>
    </Layout>
  )
}

export default Dashboard
