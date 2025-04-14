import Category from "@/components/Categories";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import { falooda, iceCream, juices, MilkShake } from "@/dataset/items";

interface catDetails {
  category:string, 
  itemList:Product[]
}

export default function Home() {
  const data:catDetails[] = [
    {category:"juice", itemList: juices},
    {category:"iceCream", itemList:iceCream},
    {category:"falooda", itemList:falooda},
    {category:'milkshakes', itemList:MilkShake}
  ]
  const navItems:string[] = ['juice', 'iceCream', 'falooda', 'milkshakes']
  return (
    <>
    <Header />

    <div className="from m-3 rounded-xl bg-gradient-to-br from-red-600 to-yellow-300 p-5">
      <h1 className="font-serif text-3xl font-bold text-white">
        sip it <br />
        scoop it <br />
        love it!
      </h1>
    </div>

    <NavBar navitems={navItems} />
    
    {data.map(category => <Category itemsList={category.itemList} category={category.category} key={category.category}/>)}
    
    </>
  );
}
