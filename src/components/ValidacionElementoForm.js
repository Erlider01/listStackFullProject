const ValidacionElementoForm = ({ array }) => {
  const [element, type, muta, click = () => {}, clase = ''] = array

  if (element === 'input') {
    if (type === 'text' || type === 'password') {
      return (
        <div className={`divFormText ${clase}`}>
          <input
            type={type}
            id={muta}
            onClick={click} className='formInput'
            placeholder=' '
          />
          <label
            htmlFor={muta} className='formLabel'
          >{muta}:
          </label>
          <span className='formLine' />
        </div>
      )
    } else if (type === 'submit') {
      return (
        <input type='submit' className={`formSubmit ${clase}`} onClick={click} value={muta} />
      )
    }
  }
}

export default ValidacionElementoForm
