import CrearFormulario from './CrearFormulario'
import TituloPag from './TituloPag'
import './stylesComp.css'

const Registro = () => {
  return (
    <div className='registro'>
      <TituloPag className='tituloRegistro' tamanio='25'>
        <span style={{ fontSize: '12px' }}>Registro</span>
      </TituloPag>
      <CrearFormulario />
    </div>
  )
}

export default Registro
