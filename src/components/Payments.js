import NewPayment from "./NewPayment";
import PaymentFilter from "./PaymentFilter";
import Payment from "./Payment";
import {useState} from "react";
import Bar from "./Bar";
import Diagram from "./Diagram";


function Payments(props){
    function onFilterToYear(selectYear){
        console.log(selectYear)
        setSelectedYear(selectYear)
    }
    const [selectedYear,setSelectedYear] = useState(new Date().getFullYear().toString());
    const [selectedMonth,setSelectedMonth] = useState(new Date().getMonth().toString());

    let filterPayments = props.payments.filter(el=>el.date.getFullYear().toString()===selectedYear);
    let filterPaymentsToMonth = filterPayments.filter(el=>el.date.getMonth().toString()===selectedMonth);
    //console.log(filterPayments);
    //console.log(filterPaymentsToMonth);
    return(
        <div>

            <div className="payments">
                <PaymentFilter year ={selectedYear} onFilter = {onFilterToYear}/>
                <Diagram filterPaymentsToYear={filterPayments} selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth}/>

                { filterPaymentsToMonth.map(el => <Payment key = {el.id} state ={el} setPayments={props.setPayments} updatePayments={props.updatePayments}/>) }
            </div>
        </div>
    )
}
export default Payments;