import "../style/diagram.css"
import Bar from "./Bar";


function Diagram(props) {
    let diagramDataSet = [
        {label:"янв",value:0},
        {label:"фев",value:0},
        {label:"мар",value:0},
        {label:"апр",value:0},
        {label:"май",value:0},
        {label:"июн",value:0},
        {label:"июл",value:0},
        {label:"авг",value:0},
        {label:"сен",value:0},
        {label:"окт",value:0},
        {label:"ноя",value:0},
        {label:"дек",value:0},
    ]
    props.filterPaymentsToYear.forEach(el=>diagramDataSet[el.date.getMonth()].value += Number(el.cost));
    let costMaxToMonth = 0;
    for(let i=0;i<diagramDataSet.length;i++){
        costMaxToMonth = Math.max(costMaxToMonth,diagramDataSet[i].value)
    }
    //console.log(costMaxToMonth)
    return (
        <div className='diagram'>
            {diagramDataSet.map((el,index)=><Bar key={el.label} month={index} label={el.label} value={el.value} costMaxToMonth={costMaxToMonth} setSelectedMonth={props.setSelectedMonth} selectedMonth={props.selectedMonth}/>)}
        </div>
    )
}
export default Diagram;