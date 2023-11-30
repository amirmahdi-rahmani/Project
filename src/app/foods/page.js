import { foods } from "@/data"
import Card from "@/Components/Card"

const Foods=()=>{
    return(
        <div>
            <h1 className="my-10 text-center text-3xl font-bold">
                {foods.title}
            </h1>
            
            {foods.items.map(item=><Card 
            key={item.id}
            title={item.name}
            description={item.description}
            btnLink={item.link}
            />
            )}
            
        </div>
    )
}
export default Foods






// for (let index = 0; index < foods.items.length; index++) 
// {
//     <h2>{foods.items.map(val=>val.name)}</h2>,
//     <p>{foods.items.map(val=>val.description)}</p>

    
// }