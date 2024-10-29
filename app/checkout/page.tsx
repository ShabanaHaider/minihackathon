export default function Forms(){
    return(
        <div>
            <h1 className="text-5xl font-semibold mt-16 text-center uppercase">
                enter your details
            </h1>

            <div>
            <form className="mt-30 flex gap-5 justify-center items-center flex-col border">
                
                <input type="text" className="p-4 rounded-2xl w-2/5 border border-red-800"
                 placeholder="Enter your Name" />

                 <input type="email" className="p-4 rounded-2xl w-2/5 border border-red-800"
                 placeholder="Enter your Email" />                 

                <input type="number" className="p-4 rounded-2xl w-2/5 border border-red-800" 
                placeholder="Enter your Card Number" />

                <input type="text" className="p-4 rounded-2xl w-2/5 border border-red-800" 
                placeholder="Enter your Address" />


                {/* <button className=" py-3 px-7 rounded-lg bg-blue-500 text-white">Place your order</button> */}

                <a href="/thankyou" className="inline-flex items=center text-4xl
                 text-blue-700 font-semibold">PLACE YOUR ORDER</a>



            </form>
            </div>

        </div>
    )
}
    
