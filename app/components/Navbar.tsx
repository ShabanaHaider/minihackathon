import Image from 'next/image';

function Yamin() {
  return (
    <div>
      <div className="flex bg-black h-6">
        <div className="flex justify-center w-1/3 text-white">
          <p>Download App Via SMS</p>
        </div>
        <div className="flex justify-end w-2/3 mr-32 gap-4 text-white">
          <p>Sign In</p>
          <p>Sign Up</p>
        </div>
      </div>

      <div>
        <nav className="flex w-full bg-black h-32">
          <div className="flex justify-center w-1/5 items-center">
            <Image src="/logo.png" alt="logo" width={200} height={100} />
          </div>

          <div className="flex justify-center mt-6 text-white items-center w-4/5">
            <div className="flex gap-8">
              <div><b>USED CARS</b></div>
              <div>NEW CARS</div>
              <div>BIKES</div>
              <div>AUTOSTORE</div>
              <div>VIDEOS</div>
              <div>FORUM</div>
              <div>MORE</div>
              <div>
                <button className="py-5 px-7 justify-center mb-12 items-center rounded-lg bg-red-700 text-white">
                  <b>Post an Ad</b>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Yamin
