import React,{useState} from 'react';
import { Input,Progress,Table, Card, Avatar } from 'antd';
import '../parent-section/parent-section.css';
import XpTable from '../xp-table'
import {xpTableData, classes, studentClassData} from '../data'
import Header from '../header'
import Menus from './dropdown';
// import Coursebox from './Coursebox';
// import Newsbox  from './Newsbox'

const { Search } = Input;
const { Meta } = Card;

function OwnerSection ({setVissibility}) {
    const [inputText, setInputText] = useState('')
    const [data,setData] = useState(null)
    const [selectedClass, setSelectedClass] = useState(null)
    const [filteredClassData, setFilterData] = useState([])
    const handleStudentFilter = (a) =>{
        setSelectedClass(a)
        const filterData = a ? studentClassData[a]: []
        console.log(filterData)
        setFilterData(filterData)
    }
    console.log(selectedClass)
    return (
    <>
    <Header/>
   
    <div className='rowC'>
    <Menus  dropdownData ={classes} title='select class' width='200px' setSelectedOption={a=> handleStudentFilter(a)}/>
    <Menus  dropdownData ={filteredClassData} title='select student' width='300px' setSelectedOption={a=> setData(xpTableData[a])}/>
    </div>
    
    <br/>
        <div className="parent-container">
    {/* <div className="input-container">
            <Search value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Student name" enterButton="Search" size="large" onSearch={() => {
             setData(xpTableData[inputText])
            }} />
        </div> */}
        <br/>
        
    </div>
      {data&& <> <div className="table-container">
            <XpTable dataSource={data.data} />
            <div><Progress type="circle" percent={(data.attendedClasses/data.totalClasses)*100} width="180px" />
                <p>Class Completion</p>
                <div><Progress percent={50} status="active" />
                <p>Assessment Completion</p>
                </div>
            </div>
        </div>
            <div className="report-card">
          <h1>{data.ReportCardName}</h1>
          <Table pagination={false} columns={data.reportCardColumn} dataSource={data.reportData} />
            </div>
            
        </>}
        {/* <a href='/w1.pdf' download>Click to download</a> */}
        
    </>)
}

export default OwnerSection;