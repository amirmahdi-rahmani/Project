import { places } from "@/data"
import Card from "@/Components/Card"

const page = () => {
  return (
    <div>
        <h1 className="my-10 text-center text-3xl font-bold">
            {
                places.title
            }
        </h1>
        {places.items.map(item=><Card 
        key={item.id}
        title={item.name}
        description={item.description}
        btnLink={item.link}
        />)}
    </div>
  )
}
export default page