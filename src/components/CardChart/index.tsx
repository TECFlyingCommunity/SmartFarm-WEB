import { Line } from "@ant-design/plots";
import {ISensor} from '../../core/interface/index'
import moment from 'moment'

interface IData {
    date: string,
    value: number,
    name: string
}

interface IProps {
    data: IData[],
    title: string,
    loading: boolean
}

interface IConfig {
    data: any,
    xField: string,
    yField: string,

    seriesField: string,
    legend: Object,
    smooth?: boolean,
    animation: Object,
    tooltip: Object,
    xAxis: Object
}

const CardChart: React.FC<IProps> = ({ data,title,loading }) => {

    const config: IConfig = {
        data,
        xField: 'date',
        yField: 'value',
        seriesField: 'name',
        legend: {
            position: 'top'
        },
        smooth: true,
        animation: {
            appear: {
                animation: 'path-in',
                duration: 5000,
            },
        },
        tooltip: {
            title: (value: string) => `Data: ${ moment(value)?.format("DD/MM/YYYY HH:mm:ss") }`,
            formatter: (value: { name: string, value: number }) => ({
                name: value.name,
                value: value.value.toFixed(2)
            })
        },
        xAxis: {
            label: {
                formatter: (value: string) => `${ moment(value)?.format("DD/MM/YYYY-HH:mm:ss") }`,
            },
        },
    };

    return<>
        <h1>{title}</h1>
        <Line loading={ loading } { ...config } />
    </>
}

export default CardChart