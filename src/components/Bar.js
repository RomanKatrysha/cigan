import "../style/diagram.css"
function Bar(props){
    function choosingMonth(){
        props.setSelectedMonth(props.month.toString())
        //console.log(props.month)
    }
    let height = Math.floor(props.value/props.costMaxToMonth*100) + "%";
    let weight = "100";
    if(props.selectedMonth == props.month ) weight = "700";
    let fontWeight = {"fontWeight": weight};
    //console.log(weight)
    return(
            <div className="bar" onClick={choosingMonth}>
                <div className="bar_label">
                    {props.value}
                </div>
                <div className="bar_inner">
                    <div className="bar_fill" style={{"height" : height}}>

                    </div>
                </div>

                <div className="bar_label" style={fontWeight}>
                    {props.label}
                </div>
            </div>
    );
}
export default Bar;