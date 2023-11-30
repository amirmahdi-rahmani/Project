import { famous } from "@/data"
import Card from "@/Components/Card"

const page = () => {
  return (
    <div>
        <h1 className="my-10 text-center text-3xl font-bold">{famous.title}</h1>

        {famous.items.map(item=><Card
         key={item.id}
         title={item.name}
         description={item.description}
         btnLink={item.link}
         />)}
    </div>
  )
}
export default page