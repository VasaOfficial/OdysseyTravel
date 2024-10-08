import Image from 'next/image'
import plusIcon from '@/public/assets/plus.webp'

function Faq() {
  return (
    <section>
      <div className="mx-auto my-20 flex w-full max-w-[80%] flex-col justify-center">
        <div className="flex flex-col">
          <h1 className="mb-2 text-3xl font-extrabold">FAQs</h1>
          <p className="mb-10 text-lg">
            Find answers to frequently asked questions about our travel agency services.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="mb-5 flex flex-col border-4 p-6 max-sm:items-center max-sm:text-center">
            <div className="mb-4 flex justify-between">
              <h1 className="text-xl font-extrabold">How do I book?</h1>
              <Image
                src={plusIcon}
                alt="plus icon"
                width={40}
                height={40}
                className="max-sm:hidden"
              />
            </div>
            <p className="max-w-[70%] text-lg">
              Booking with us is easy. Simply add to cart destinations you want to book and then
              order it or give us a call to make a reservation. Our friendly team will assist you
              every step of the way.
            </p>
          </div>
          <div className="mb-5 flex flex-col border-4 p-6 max-sm:items-center max-sm:text-center">
            <div className="mb-4 flex justify-between">
              <h1 className="text-xl font-extrabold">What destinations do you offer?</h1>
              <Image
                src={plusIcon}
                alt="plus icon"
                width={40}
                height={40}
                className="max-sm:hidden"
              />
            </div>
            <p className="max-w-[70%] text-lg">
              We offer a wide range of destinations, both domestic and international. From exotic
              beach getaways to adventurous mountain hikes, we have something for everyone.
            </p>
          </div>
          <div className="mb-5 flex flex-col border-4 p-6 max-sm:items-center max-sm:text-center">
            <div className="mb-4 flex justify-between">
              <h1 className="text-xl font-extrabold">Do you offer travel insurance?</h1>
              <Image
                src={plusIcon}
                alt="plus icon"
                width={40}
                height={40}
                className="max-sm:hidden"
              />
            </div>
            <p className="max-w-[70%] text-lg">
              Yes, we offer travel insurance to provide you with peace of mind during your trip. Our
              insurance plans cover various aspects such as trip cancellation, medical emergencies,
              and lost luggage. Contact us for more details.
            </p>
          </div>
          <div className="mb-5 flex flex-col border-4 p-6 max-sm:items-center max-sm:text-center">
            <div className="mb-4 flex justify-between">
              <h1 className="text-xl font-extrabold">What is your cancellation policy?</h1>
              <Image
                src={plusIcon}
                alt="plus icon"
                width={40}
                height={40}
                className="max-sm:hidden"
              />
            </div>
            <p className="max-w-[70%] text-lg">
              Our cancellation policy varies depending on the type of booking and the specific terms
              and conditions of the travel package. Please refer to our terms and conditions or
              contact our customer support for more information.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
