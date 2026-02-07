import imgError from '../../assets/hero/error.png'
export const CustomError = () => {
  return (
    <div className='flex flex-col items-center'>
      <p className='font-semibold text-2xl text-center mt-8 mb-4'>
        Ruta no encontrada, error 404.
        Pruebe con una ruta válida.
      </p>
      <img className='w-32 ' src={imgError} alt="Error 404" />
    </div>
  )
}
