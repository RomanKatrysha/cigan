import "../style/newPayment.css"
import {useState} from "react";
import HideNewPayment from "./HideNewPayment";
function NewPayment(props) {

    function changeObjectHandler(e) {
        setObject(e.target.value)
    }

    function changeCostHandler(e) {
        setCost(e.target.value)
    }

    function changeWorkDaysHandler(e) {
        setWorkDays(e.target.value)
    }

    function changeSourceHandler(e) {
        setSource(e.target.value)
    }

    function changeDateHandler(e) {
        setDate(e.target.value)
    }

    function submitHandler(e) {
        e.preventDefault();
        if (object && cost && workDays && source && date) {

        const paymentData = {
            object: object,
            cost: cost,
            workDays: workDays,
            source: source,
            date: new Date(date),
        }
        props.onSavePaymentData(paymentData);
        setObject("");
        setCost("");
        setWorkDays("");
        setSource("");
        setDate("");
        props.cancelAddPayments();
    }
 }
    const [object,setObject] = useState("");
    const [cost,setCost] = useState("");
    const [workDays,setWorkDays] = useState("");
    const [source,setSource] = useState("");
    const [date,setDate] = useState("");


   // console.log(object,cost,workDays,source,date)
    if(!props.flag){
        return (
            <HideNewPayment unwrapNewPayment = {props.unwrapNewPayment} />
        );
    }
    return(
        <div className="newPayment">
            <form onSubmit={submitHandler}>
                <div className="new-payment-control">
                    <label>объект</label>
                    <input type="text" value={object} onChange={changeObjectHandler}/>
                </div>
                <div className="new-payment-control">
                    <label>стоимость</label>
                    <input type="number" min="0" value={cost} onChange={changeCostHandler}/>
                </div>
                <div className="new-payment-control">
                    <label>трудозатраты в днях</label>
                    <input type="number"  min="0" value={workDays} onChange={changeWorkDaysHandler}/>
                </div>
                <div className="new-payment-control">
                    <label>источник</label>
                    <input type="text" value={source} onChange={changeSourceHandler}/>
                </div>
                <div className="new-payment-control">
                    <label>дата</label>
                    <input type="date" value={date} onChange={changeDateHandler}/>
                </div>
                <div className="new-payment-button">
                    <button type="submit">добавить платеж</button>
                    <button onClick={props.cancelAddPayments}>отмена</button>
                </div>
            </form>
        </div>
    );
}
export default NewPayment;