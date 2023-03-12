

const Buscador = ({buscador, setBuscador}) => {




  return (
    <div className='container'>
      <h4>Buscar por fecha o nombre del feriado</h4>
      <h6>Nota: Puede buscar el mes por número, por ejemplo, feriados de Octubre debe buscarlo con "10"</h6>
      <div>
        <input className='form-control w-50 d-flex justify-content-center mb-5' placeholder='Buscar feriado' type="text" value={buscador} onChange={e=>setBuscador(e.target.value)}/>
      </div>
    </div>
  )
}

export default Buscador
