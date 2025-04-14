
export default function Category({itemsList, category}:{itemsList:Product[], category:string}) {
  return (
    <div className="m-2 rounded-xl py-3" id={category}>
      <h1 className="mt-8 px-2 font-serif text-4xl uppercase">{category}</h1>

      <div className="space-y-2 p-2">
        {itemsList.map((item) => (
          <div
            key={item.name}
            className="flex space-x-2 rounded-xl border border-gray-200 p-2"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-[60px] w-[60px] rounded-xl object-cover"
            />
            <span className="space-y-0.5">
              <p className="text-xl font-semibold">{item.name}</p>
              <p className="font-medium text-red-700">${item.price}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );

}


/**
 *     function navigateTo(category:string){
        document.getElementById(category).scrollIntoView({ behavior: "smooth" });
    }
 */