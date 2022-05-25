import React, { useEffect, useState } from 'react'
import { Layout, Menu, Card, Row, Col } from 'antd'
import 'antd/dist/antd.css'
import './estilo.css'

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
                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="/docs/images/blog/image-1.jpg"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="ml-2 -mr-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
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
      <Footer></Footer>
    </Layout>
  )
}

export default Dashboard
