type EmailVerificationCardProps = {
  isVisible: boolean;
  onDismiss: () => void;
}

function EmailVerificationCard({ isVisible, onDismiss }: EmailVerificationCardProps) {
  const handleDismiss = () => {
    // Call the parent component function to hide the EmailVerificationCard when the X button is clicked
    onDismiss();
  };

  return isVisible ? (
    <div className="overflow-hidden relative text-left rounded-lg max-w-[290px] shadow-md bg-white"> 
      <button className="absolute right-3 top-3 flex items-center content-center p-2 bg-white text-black text-base font-light w-7 h-7 border border-gray-300 rounded-md transition duration-300 ease hover:bg-red-600 hover:border-red-600 hover:text-white" type="button" onClick={handleDismiss}>×</button> 
      <div className="p-5"> 
        <div className="image flex ml-auto mr-auto bg-green-500 flex-shrink-0 justify-center items-center w-12 h-12 rounded-full">
          <svg className='text-green-500 w-8 h-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L9.00004 18L3.99994 13" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </div> 
        <div className="mt-3 text-center">
          <span className="text-green-800 text-lg font-semibold leading-6">Verification email has been sent</span> 
          <p className="mt-2 text-gray-600 text-sm leading-5">Please check your email address and verify the account.</p> 
        </div> 
      </div> 
    </div>
  ) : null;
}

export default EmailVerificationCard