import React, {useState} from "react";
import './YearsTab.scss'

const YearsTab = ({yearFilter, setYearFilter}) => {

    const now = new Date().getUTCFullYear();
    const years = Array(now - (now - 73)).fill('').map((v, idx) => now - idx);
    const [selected, setSelected] = useState('');

    function yearChanger(value) {
        if (yearFilter === value) {
            setYearFilter('')
        } else {
            setYearFilter(`${value}`)
        }
    }


    const handleChange = event => {
        setSelected(event.target.value);
        yearChanger(event.target.value);
    };

    return (
        <>

        </>
    )
}

export default YearsTab;