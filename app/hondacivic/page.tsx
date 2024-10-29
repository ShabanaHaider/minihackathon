import Link from "next/link";

export default function Car() {
  return (
    <div className="flex justify-center mt-20 items-center">
      <img
        src="./4-Honda civic.png"
        alt="HONDA CIVIC"
        className="w-200 h-200" // Updated to a valid Tailwind size class
      />

      <div className="flex justify-center items-center text-2xl  rounded-lg bg-blue-500 text-white py-3 px-7  mb-4"> {/* Added margin for spacing */}
        <Link href="/checkout" passHref>
          
            <b>&rdquo;"CLICK HERE TO CHECKOUT"&rdquo;</b>
                      
        </Link>
      </div>
    </div>
  );
}
