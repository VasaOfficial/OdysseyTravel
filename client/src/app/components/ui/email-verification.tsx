import { useRouter } from 'next/navigation'

function EmailVerificationCard() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }
  return (
    <div className="overflow-hidden relative text-left rounded-lg max-w-[290px] shadow-md bg-white">
      <div className="p-5"> 
        <div className="image flex ml-auto mr-auto bg-green-500 flex-shrink-0 justify-center items-center w-12 h-12 rounded-full">
          <svg className='text-green-500 w-8 h-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L9.00004 18L3.99994 13" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </div> 
        <div className="mt-3 text-center">
          <span className="text-green-800 text-lg font-semibold leading-6">Verification email has been sent</span> 
          <p className="mt-2 text-gray-600 text-sm leading-5">Please check your email address and verify the account.</p> 
        </div> 
        <div className="actions">
          <button className="inline-flex p-2 mt-4 bg-green-500 text-white text-lg font-medium justify-center w-full rounded-md shadow-sm" type="button" onClick={handleClick}>OK</button> 
        </div> 
      </div> 
    </div>
  )
}

export default EmailVerificationCard