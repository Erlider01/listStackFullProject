const TituloPag = ({ className, children, tamanio = 20 }) => {
  return (
    <div className={`titulo ${className}`}>
      <h1 style={{ fontSize: `${tamanio}px` }}>Notebook</h1>
      {children}
    </div>
  )
}

export default TituloPag
