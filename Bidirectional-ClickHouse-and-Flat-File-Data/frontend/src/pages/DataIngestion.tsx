import React, { useEffect, useState } from 'react';
import { Database, Upload, ArrowLeftRight, Divide } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Select } from '../components/Select';
import { Checkbox } from '../components/Checkbox';
import { ProgressBar } from '../components/ProgressBar';
import { StatusBadge } from '../components/StatusBadge';
import axios from 'axios';


type DataSource = 'clickhouse' | 'flatfile';
type Status = 'idle' | 'connecting' | 'fetching' | 'ingesting' | 'completed' | 'error';

export const DataIngestion: React.FC = () => {
  const [source, setSource] = useState<DataSource>('clickhouse');
  const [status, setStatus] = useState<Status>('idle');
  const [progress, setProgress] = useState(0);

  // State Related to FlatFile to CLickHouse
  const [file,setFile] = useState<File|null>(null);
  const [data,setData] = useState<[]>([]);
  const [headers,setHeaders] = useState<[]|any>([]);
  const [selectedHeaders,setSelectedHeaders] = useState<string[]>([]);
  const [tableName,setTableName] = useState<string>("");
  const [rowsCountAfterCsvUpdate,setRowsCountAfterCsvUpdate] = useState<string>("");

  // State Related to ClickHouse to Flatfile


  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    if(e.target.files && e.target.files[0]){
      setFile(e.target.files[0])
    }
  }


  const handleUpload = async() =>{
    if(!file){
      alert('Please upload a File First!')
      return;
    }

    const formData = new FormData();
    formData.append('file',file);

    try{  
      const response = await axios.post('http://localhost:3000/api/v1/csv/upload-csv',formData,{
        headers:{
          'Content-Type': 'multipart/form-data', 
        }
      })
      setData(response.data.rows);
      setHeaders(response.data.headers);
      setRowsCountAfterCsvUpdate(response.data.rowCount);
    }catch(error){
      console.error(error);
    }
  }

  const handleCheckboxChange = (header:string) =>{
    setSelectedHeaders((prevSelected)=>{
      if(prevSelected.includes(header)){
        return prevSelected.filter((h)=>h!==header)
      }else{
        return [...prevSelected,header];
      }
    })
  }

  async function sendDataToClickHouse(){  
    const filteredData = data.map((row:any)=>{
    const filteredRow : any = {};
    selectedHeaders.forEach((header)=>{
      filteredRow[header] = row[header];
    })
    return filteredRow;
   })
  
   
    const response = await axios.post('http://localhost:3000/api/v1/clickHouse/insert-to-clickHouse',{rows:filteredData,headers:headers,tableName:tableName},);
    
    if(response.data){
      alert("Data Inserted to Clickhouse");
    }
  }

  console.log("selcted headers",selectedHeaders);
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Data Ingestion Tool</h1>
          <p className="mt-2 text-gray-600">Transfer data between ClickHouse and Flat Files seamlessly</p>
        </div>

        <Card>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Source Configuration</h2>
              <StatusBadge status={status} />
            </div>

            <Select
              label="Data Source"
              options={[
                { value: 'clickhouse', label: 'ClickHouse Database' },
                { value: 'flatfile', label: 'Flat File' }
              ]}
              value={source}
              onChange={(e) => setSource(e.target.value as DataSource)}
            />

            {source === 'clickhouse' ? (
              <div className="grid grid-cols-2 gap-4">
                <Input label="Host" placeholder="localhost" />
                <Input label="Port" placeholder="9440" type="number" />
                <Input label="Database" placeholder="default" />
                <Input label="User" placeholder='username' />
                <Input label="JWT Token" type="password" className="col-span-2" />
              </div>
            ) : (
              <div className="space-y-4">
                <Input label="File Path" type="file" accept=".csv,.txt" onChange={handleChange} />
                <Input label="Table Name" placeholder="TableName" onChange={(e)=>{
                  setTableName(e.target.value);
                }} />
                <button onClick={handleUpload}>Upload</button>
                {data? <Button onClick={sendDataToClickHouse}>
                senddata
                </Button> :"no dadta"}
                
              </div>
            )}
          </div>
        </Card>

        <Card>
       
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Column Selection</h2>
            <div className="grid grid-cols-3 gap-4">
              {

                headers? headers.map((e:any,key:number)=>{
                return  <Checkbox key={key} label={e} checked={selectedHeaders.includes(e)} onChange={()=>handleCheckboxChange(e)}/>
                }):<Checkbox   label='Loading Headers'/>
                

              }
              
              
            </div>
          </div>
        </Card>

        <Card>
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Progress</h2>
            <ProgressBar progress={progress} />
            <div className="flex justify-between text-big text-gray-800">
              
              <span className=''>Total Rows : {rowsCountAfterCsvUpdate} </span>
            </div>
          </div>
        </Card>

        <div className="flex justify-end space-x-4">
          <Button variant="outline">Preview Data</Button>
          <Button icon={ArrowLeftRight} onClick={sendDataToClickHouse}>Start Ingestion</Button>
        </div>
      </div>
    </div>
  );
}