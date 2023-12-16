import Image from "next/image";
import plusIcon from '@/public/assets/plus.webp'

function Faq() {
    return ( 
      <section>
        <div className="flex flex-col max-w-[90%] mx-auto justify-center my-20 w-full">
          <div className="flex flex-col">
            <h1 className="font-extrabold text-3xl mb-2">FAQs</h1>
            <p className="mb-10 text-lg">Find answers to frequently asked questions about our travel agency services.</p>
          </div>
          <div className="flex flex-col">
            <div className="border-4 p-6 mb-5">
              <div className="flex justify-between mb-4">
                <h1 className="font-extrabold text-xl">How do I book?</h1>
                <Image src={plusIcon} alt="plus icon" width={40} height={40}/>
              </div>
              <p className="max-w-[70%] text-lg">Booking with us is easy. Simply visit our website or give us a call to make a reservation. Our friendly team will assist you every step of the way.</p>
            </div>
            <div className="border-4 p-6 mb-5">
              <div className="flex justify-between mb-4">
                <h1 className="font-extrabold text-xl">What destinations do you offer?</h1>
                <Image src={plusIcon} alt="plus icon" width={40} height={40}/>
              </div>
              <p className="max-w-[70%] text-lg">We offer a wide range of destinations, both domestic and international. From exotic beach getaways to adventurous mountain hikes, we have something for everyone.</p>
            </div> 
            <div className="border-4 p-6 mb-5">
              <div className="flex justify-between mb-4">
                <h1 className="font-extrabold text-xl">Do you offer travel insurance?</h1>
                <Image src={plusIcon} alt="plus icon" width={40} height={40}/>
              </div>
              <p className="max-w-[70%] text-lg">Yes, we offer travel insurance to provide you with peace of mind during your trip. Our insurance plans cover various aspects such as trip cancellation, medical emergencies, and lost luggage. Contact us for more details.</p>
            </div> 
            <div className="border-4 p-6 mb-5">
              <div className="flex justify-between mb-4">
                <h1 className="font-extrabold text-xl">What is your cancellation policy?</h1>
                <Image src={plusIcon} alt="plus icon" width={40} height={40}/>
              </div>
              <p className="max-w-[70%] text-lg">Our cancellation policy varies depending on the type of booking and the specific terms and conditions of the travel package. Please refer to our terms and conditions or contact our customer support for more information.</p>
            </div> 
            <div className="border-4 p-6 mb-5">
              <div className="flex justify-between mb-4">
                <h1 className="font-extrabold text-xl">Do you provide discounts?</h1>
                <Image src={plusIcon} alt="plus icon" width={40} height={40}/>
              </div>
              <p className="max-w-[70%] text-lg">Yes, we offer discounts on global holiday's and for kid's. There are also discounts for specific packages trough the year. Check out our destinations section for more info.   </p>
            </div>    
          </div>
        </div>
      </section>  
    );
}

export default Faq;