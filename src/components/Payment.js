import "../style/payment.css"
import {useRef, useState} from "react";
function Payment (props){
    function chengField(e){
        e.target.contentEditable = true;
    }
    function lossFocus(e){

        e.target.contentEditable = false;
        /* let chengObject = props.state//.find(el=>el.id === e.target.getAttribute("num"))//id[e.target.getAttribute("num")]
        //let newValue = chengObject[e.target.getAttribute("num")]
         chengObject[e.target.getAttribute("num")] = e.target.innerHTML
         console.log(chengObject)
         props.setPayments(prev => {return (prev.map(el=>{
             if(el.id === props.state.id){
                 el[e.target.getAttribute("num")] = e.target.innerHTML
             }
             return el
         }))})
         */
        let chengObject = props.state;
        let chengNum = e.target.getAttribute("num");
        if(chengNum === "cost"|| chengNum === "workDays" ) {
            if(!isNaN(e.target.innerHTML/1)) {
                //console.log(typeof (e.target.innerHTML))
                chengObject[chengNum] = e.target.innerHTML
            }
            else{
                e.target.innerHTML=chengObject[chengNum];
            }
        }
        else {
            chengObject[chengNum] = e.target.innerHTML
        }
        props.updatePayments(chengObject)


    }
    function saveCheng(e){

    }

    return(
        <div className="payment">
            <div className="item border-item">
                <div>{props.state.date.getFullYear()}</div>
                <div>{props.state.date.toLocaleString("ru-RU",{month:"long"})}</div>
                <div>{props.state.date.toLocaleString("ru-RU",{day:"2-digit"})}</div>
            </div>

            <div num="object" onDoubleClick={chengField} onBlur={lossFocus} className="item">{props.state.object}</div>
            <div num="cost" onDoubleClick={chengField} onBlur={lossFocus} className="item border-item">{props.state.cost}</div>
            <div num="workDays" onDoubleClick={chengField} onBlur={lossFocus} className="item">{props.state.workDays}</div>
            <div num="source" onDoubleClick={chengField} onBlur={lossFocus} className="item">{props.state.source}</div>

        </div>
    );
}
export default Payment;