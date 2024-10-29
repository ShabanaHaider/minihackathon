import Link from "next/link";
export default function Feature() {
  return (
    <div>
      <div className="flex">
        <div className="flex justify-center w-1/4 mt-8 text-black text-3xl font-semibold">
          <h1>Featured New Cars</h1>
        </div>

        <div className="flex justify-end w-2/4 mt-8 text-blue-900 text-2xl">
          <h1>View All New Cars</h1>
        </div>
      </div>

      <div className="flex justify-center w-1/4 mt-10  text-3xl">
        <div className="flex gap-10 text-black text-2xl"> 
          <p>Popular</p>
          <p>Upcoming</p>
          <p>Newly Launched</p>
        </div>
        </div>
  
  <div className="flex">
    <div className="flex w-1/4 mt-40">
      <Link href="/toyotacorolla" passHref>
        <img
          src="./toyota-corrola.png"
          // alt="Exciting New Toyota Corolla"
          // width={500}
          // height={800}
          className="cursor-pointer"
        />
      </Link>
    </div>

      <div className="flex w-1/4 mt-40">
      <Link href="/cultus" passHref>
        <img
          src="./suzuki alto in.png"
          // alt="Cultus the Smart Choice"
          // width={500}
          // height={300}
          className="cursor-pointer"
        />
      </Link>
    </div>

    <div className="flex  w-1/4  mt-40">
      <Link href="/hondacity" passHref>
        <img
          src="./honda city in.png"
          // alt="Ultimate Choice Honda City"
          // width={500}
          // height={300}
          className="cursor-pointer"
        />
      </Link>
    </div>

    <div className="flex w-1/4 mt-40">
      <Link href="/hondacivic" passHref>
        <img
          src="./honda civic.png"
          // alt="The Luxurious Car Honda Civic"
          // width={500}
          // height={300}
          className="cursor-pointer"
        />
      </Link> 
    </div>  
</div>
    
    </div> 

  );
}




   

 
