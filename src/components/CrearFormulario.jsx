import ValidacionElementoForm from './ValidacionElementoForm'

const CrearFormulario = ({ plantilla, handlerSubmit }) => {
  /*
  plantilla input "text" = [elemento, tipo, placeholder, onclick, clase]
  plantilla input "submit" = [elemento, tipo, value, onclick, clase]
  */

  const Ejemplo = [
    ['input', 'text', 'Nombre'],
    ['input', 'text', 'Apelido'],
    ['input', 'text', 'Correo'],
    ['input', 'password', 'Contraseña'],
    ['input', 'password', 'Repetir Contraseña'],
    ['input', 'submit', 'Registrar']
  ]

  return (
    <form className='formulario' onSubmit={handlerSubmit}>

      {Ejemplo.map((element, id) => <ValidacionElementoForm key={id} array={element} />)}

    </form>
  )
}
export default CrearFormulario
