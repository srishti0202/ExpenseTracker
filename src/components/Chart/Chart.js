import ChartBar from './ChartBar';
import './Chart.css';

//the component which will use the chart component will pass the 
//datapoints and will decide how many datapoints should be rendered

const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMax = Math.max(...dataPointValues);
    return <div className='chart'>
        {props.dataPoints.map( dataPoint => {
        return <ChartBar key = {dataPoint.label}
         value = {dataPoint.value} 
         maxValue = {totalMax} 
         label = {dataPoint.label}
         />
        })}
    </div>

};
export default Chart;