import { useState } from "react";

const MiApi = ({info, buscador}) => {

const [ordenar, setOrdenar]= useState('')


let results=[]
if (!buscador){
results=info
}else{
    results= info.filter((user)=>
    user.title.toLowerCase().includes(buscador.toLowerCase()) ||
    user.date.toLowerCase().includes(buscador.toLowerCase())
);

}


const ordenarMenor= (data)=>{
    results=data.sort((a,b)=>a.date.localeCompare(b.date))
}
const ordenarMayor= (data)=>{
    results=data.sort((a,b)=>b.date.localeCompare(a.date))
}
    
ordenar === 'mayor' && ordenarMayor (results)
ordenar === 'menor' && ordenarMenor (results)
    

  return (
    <div> 
        
        <select className="container form-select mb-5 w-50" value={"default"} onChange={e=>setOrdenar(e.target.value)}>
            <option value="default" disabled hidden>--Ordenar por--</option>
            <option value="mayor">Feriado más lejos</option>
            <option value="menor">Feriado más cerca</option>
            
        </select>  
        <div>
            {results.map(user=> 
            <div className="container d-flex justify-content-center flex-row text-center" key={user.date}>
                <div className="card text-center mb-4" style={{ width: '20rem' }}>
                    <div className="col mt-2">
                    <h3>{user.title}</h3>
                    <p>{user.date}</p>
                    <p>{user.extra}</p>
                    </div>
            
                 </div>      
            </div>
            )}


        </div>

        
    </div>
  )
}

export default MiApi
