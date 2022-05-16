import './Chart.css'
import ChartBarComponent from "./ChartBars/ChartBar";

const ChartComponent = (props) => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaxAmount = Math.max(...dataPointsValues);
    return (
        <div className={"chart"}>
            {
                props.dataPoints.map(dataPoint =>
                    <ChartBarComponent
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={totalMaxAmount}
                        label={dataPoint.label}
                    />)
            }
        </div>
    )
}

export default ChartComponent;