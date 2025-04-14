'use client';
export default function NavBar({navitems}:{navitems:string[]}) {
    function navigateTo(category:string){
        const ele = document.getElementById(category)
        if (ele)
        ele.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <div className="flex space-x-2 m-3">
        {navitems.map((item) => (
            <button
            key={item}
            className="rounded-xl bg-orange-600 px-2 py-1 text-white hover:bg-orange-700 capitalize"
            onClick={() => navigateTo(item)}
            >
            {item}
            </button>
        ))}
        </div>
    );
}