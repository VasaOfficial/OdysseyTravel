import { useRouter } from 'next/navigation'

function ErrorPopup() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }
  return (
    <div className="relative max-w-[290px] overflow-hidden rounded-lg bg-white text-left shadow-md">
      <div className="p-5">
        <div className="my-3 text-center">
          <span className="text-lg font-semibold leading-6 text-red-800">Error has occurred</span>
        </div>
        <div className="actions">
          <button
            className="mt-4 inline-flex w-full justify-center rounded-md bg-red-700 p-2 text-lg font-medium text-white shadow-sm"
            type="button"
            onClick={handleClick}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
}

export default ErrorPopup
