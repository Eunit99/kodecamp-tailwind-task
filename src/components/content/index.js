import { useExport } from '../../hooks/useExport';
import Button from '../../components/button';

export default function Navigation() {

  const { sideImg } = useExport();


  return (
    <>
      <div className="container p-10 md:px-14  w-full xs:h-[calc(100vh-95px)] h-[calc(100vh-145px)]  block lg:flex  md:items-center lg:space-x-16 md:justify-center">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl sm:text-5xl  font-medium">Decentralized Fund Me,</h1>
          <p className="text-blue-400 xs:px-16 mt-4 sm:p-0">A new way to requesting <strong>funding</strong> from the friends and the public.</p>
          <p className="text-blue-400 mb-4">To get started click the button below.</p>

          <Button
            text="Connect"
          />

          <span className="block text-sm mt-3 text-blue-400">We rise by lifting others</span>
        </div>
        <div className=" my-0 xs:m-0 sm:mx-0 text-center lg:text-left">
          <img
            src={sideImg}
            className="  w-full  px-6 md:w-full lg:w-96"
            alt="sideImg"
          />
        </div>
      </div>
    </>
  )
}