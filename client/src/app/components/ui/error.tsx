import { useRouter } from 'next/navigation'

function ErrorPopup() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }
  return (
    <div className="overflow-hidden relative text-left rounded-lg max-w-[290px] shadow-md bg-white">
      <div className="p-5"> 
        <div className="my-3 text-center">
          <span className="text-red-800 text-lg font-semibold leading-6">Error has occurred</span> 
        </div> 
        <div className="actions">
          <button className="inline-flex p-2 mt-4 bg-red-700 text-white text-lg font-medium justify-center w-full rounded-md shadow-sm" type="button" onClick={handleClick}>OK</button> 
        </div> 
      </div> 
    </div>
  )
}

export default ErrorPopup