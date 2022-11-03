import React, {useEffect, useRef, useState} from "react";
import './YearsTab.scss'

const YearsTab = ({yearFilter, setYearFilter}) => {

    const now = new Date().getUTCFullYear();
    const years = Array(now - (now - 73)).fill('').map((v, idx) => now - idx);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedYear, setSelectedYear] = useState(null);

    const ref = useRef();

    function yearChanger(value) {
        yearFilter === value ? setYearFilter('') : setYearFilter(`${value}`)
    }

    const handleItemClick = (e) => {
        selectedYear == e ? setSelectedYear(null) : setSelectedYear(e);
        yearChanger(e);
        setIsOpen(prev => !prev);
    }

    const handleClear = () => {
        setSelectedYear(null);
        yearChanger('');
        setIsOpen(prev => !prev);
    }

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (isOpen && ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isOpen])

    return (
        <>
            <div className='dropdown' ref={ref}>
                <div className='dropdown-header'
                     onClick={() => setIsOpen(prev => !prev)}>
                    {selectedYear ? years.find(year => year == selectedYear) : "Select year"}
                    {isOpen ? (!selectedYear && (<span>▼</span>)) : (!selectedYear && (<span>▲</span>))}
                    {selectedYear && (<button onClick={handleClear}>x</button>)}
                </div>
                {isOpen && (
                    <div className={`dropdown-body ${isOpen && 'open'}`}>
                        {years.map(year => (
                            <div className={`dropdown-item ${year == selectedYear && 'selected-year'}`} onClick={e => handleItemClick(e.target.id)} id={year}
                                 key={year}>
                                {year}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default YearsTab;