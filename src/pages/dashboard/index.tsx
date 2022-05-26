import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import 'flowbite'
import 'antd/dist/antd.css'
import './estilo.css'
import { ISensor } from '../../core/interface'
import CardChart from '../../components/CardChart'
import api from '../../core/services/api'
import Progress from '../../components/Progress'

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
        setInterval(getData, 4000)
    }, [])

    useEffect(() => {
        formatData(data)
    }, [data])

    return (
        <section className="h-screen w-screen bg-gray-200 flex flex-col-reverse sm:flex-row min-h-0 min-w-0   	">
            <aside className="sm:h-full sm:w-16 w-full h-12 bg-gray-800 text-gray-200">
                <ul className="text-center flex flex-row sm:flex-col w-full">
                    <li className="h-14 border-b border-gray-900 hidden sm:block">
                        <a
                            id="page-icon"
                            href="/"
                            className="h-full w-full hover:bg-gray-700 block p-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={ 2 }
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                        </a>
                    </li>
                    <li
                        className="sm:border-b border-gray-900 flex-1 sm:w-full"
                        title="Inbox"
                    >
                        <a
                            id="page-icon"
                            href="/"
                            className="h-full w-full hover:bg-gray-700 block p-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={ 2 }
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </a>
                    </li>
                    <li
                        className="sm:border-b border-gray-900 flex-1 sm:w-full"
                        title="Settings"
                    >
                        <a
                            id="page-icon"
                            href="/"
                            className="h-full w-full hover:bg-gray-700 block p-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={ 2 }
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        </a>
                    </li>
                    <li
                        className="sm:border-b border-gray-900 flex-1 sm:w-full"
                        title="Users"
                    >
                        <a
                            id="page-icon"
                            href="/"
                            className="h-full  w-full hover:bg-gray-700 block p-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={ 2 }
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </a>
                    </li>
                </ul>
            </aside>
            <main className="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 overflow-auto">
                <div
                    className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full bg-gradient-to-r from-green-300 to-green-500 rounded-md	">
                    <div className="mx-auto container py-12 px-4">
                        <div className="w-full flex justify-center">
                            <div
                                className="w-full md:w-11/12 xl:w-10/12 bg-gradient-to-r from-emerald-500 to-emerald-700 md:py-4 md:px-4 px-3 py-2 xl:px-6 xl:py-8 rounded-md">
                                <div>
                                    <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
                                        <div
                                            className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                                            <div>
                                                <h1
                                                    role="heading"
                                                    className="text-xl md:text-2xl lg:text-4xl xl:text-4xl lg:w-10/12 text-white font-black leading-6 lg:leading-10 md:text-left text-center"
                                                >
                                                    Bem vindo ao SMART-FARM
                                                </h1>
                                            </div>
                                            <button
                                                role="button"
                                                aria-label="Join the community"
                                                className="mt-5 lg:mt-8 py-3 lg:py-4 px-4 lg:px-8 bg-white font-bold text-emerald-700 rounded-lg text-sm lg:text-lg xl:text-xl hover:bg-opacity-90  focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"
                                            >
                                                Descobrir
                                            </button>
                                        </div>
                                        <div className="md:w-1/3 w-2/3">
                                            <img
                                                className="w-full h-full"
                                                alt="logo"
                                                src="https://spro.com.br/wp-content/uploads/2018/03/Site_Campo@2x.png"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Row justify="space-evenly">
                    <Col xs={ 24 } xl={ 5 }>
                        <div
                            className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6 bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6">
                            <Progress title="Temperatura" max={ 60 } min={ 0 }
                                      value={ temperatureData[temperatureData.length - 1]?.value ?? 0 }
                                      minProgress={ 20 } mediumProgress={ 30 }/>
                        </div>
                    </Col>
                    <Col xs={ 24 } xl={ 5 }>
                        <div
                            className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6 bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6">
                            <Progress title="Luminosidade" max={ 100 } min={ 0 }
                                      value={ luminosityData[luminosityData.length - 1]?.value ?? 0 } minProgress={ 15 }
                                      mediumProgress={ 60 }/>
                        </div>
                    </Col>
                    <Col xs={ 24 } xl={ 5 }>
                        <div
                            className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6 bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6">
                            <Progress title="Umidade do Ar" max={ 100 } min={ 0 }
                                      value={ airHumidityData[airHumidityData.length - 1]?.value ?? 0 }
                                      minProgress={ 50 } mediumProgress={ 80 }/>
                        </div>
                    </Col>
                    <Col xs={ 24 } xl={ 5 }>
                        <div
                            className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6 bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6">
                            <Progress title="Umidade do Solo" max={ 100 } min={ 0 }
                                      value={ (soilHumidityData[soilHumidityData.length - 1]?.value ?? 0) / 100 }
                                      minProgress={ 30 } mediumProgress={ 45 }/>
                        </div>
                    </Col>
                </Row>

                <div className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full ">
                    <div
                        className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6 bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6 ">
                        <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                            <CardChart
                                data={ temperatureData }
                                title={ 'Temperatura' }
                                loading={ false }
                            />
                        </h3>
                    </div>
                    <div
                        className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6 bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6 ">
                        <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                            <CardChart
                                data={ luminosityData }
                                title={ 'Luminosidade' }
                                loading={ false }
                            />
                        </h3>
                    </div>
                </div>

                <div className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full ">
                    <div
                        className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6 bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6 ">
                        <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                            <CardChart
                                data={ airHumidityData }
                                title={ 'Umidade do Ar' }
                                loading={ false }
                            />
                        </h3>
                    </div>
                    <div
                        className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6 bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6 ">
                        <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                            <CardChart
                                data={ soilHumidityData }
                                title={ 'Umidade do Solo' }
                                loading={ false }
                            />
                        </h3>
                    </div>
                </div>


            </main>
        </section>
    )
}

export default Dashboard
