import Header from "@/components/Header";
import { juices } from "@/dataset/items";

export default function test(){
    return (<>
        <Header />
    
        <div className="from m-3 rounded-xl bg-gradient-to-br from-red-600 to-yellow-300 p-5">
          <h1 className="font-serif text-3xl font-bold text-white">
            sip it <br />
            scoop it <br />
            love it!
          </h1>
        </div>
    
        <div className="m-2">
          <h1 className="mt-8 px-2 font-serif text-4xl uppercase">juices</h1>
          <div className="grid grid-cols-2 gap-3 p-2 md:grid-cols-3">
            {
              juices.map((juice) => (
                <div
                  key={juice.name}
                  className="space-y-2 rounded-xl border border-gray-200 p-3 text-center shadow"
                >
                  <img
                    src={juice.image}
                    alt={juice.name}
                    className="h-[150px] w-full rounded-xl object-cover"
                  />
                  <span className="space-y-0.5">
                    <p className="text-xl font-semibold">{juice.name}</p>
                    <p className="font-medium text-red-700">${juice.price}</p>
                  </span>
                </div>
              ))
            }
            </div>
    
    
        </div>
    </>)
}