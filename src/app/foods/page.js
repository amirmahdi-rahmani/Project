import Card from "@/Components/Card"
import getData from "@/functions/getData"

const Foods=async()=>{

    const foodsData = await getData('foods')
    return(
        <div>
            <h1 className="my-10 text-center text-3xl font-bold">
            معروف ترین غذا های استان آذربایجان شرقی
            </h1>
            
           
            {foodsData?.map(item=><Card 
                key={item.id}
                name={item.name}
                description={item.description}
                imageOne={item.imageOne}
                imageTwo={item.imageTwo}
                link={item.link}
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