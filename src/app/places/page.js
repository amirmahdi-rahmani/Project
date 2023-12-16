"use client";
import { places } from "@/data"
import Card from "@/Components/Card"
import { useEffect, useState } from "react";
import axios from "axios";


const Page = () => {

  const [places,setPlaces]=useState()
  useEffect(() => {
    axios
      .get("http://localhost:5288/api/places")
      .then((res) => setPlaces(res.data));
  }, []);

  return (
    <div>
        <h1 className="my-10 text-center text-3xl font-bold">
          In Yek Title Asb :♥
        </h1>
        {places?.map(item=><Card 
        key={item.id}
        name={item.name}
        description={item.description}
        imageOne={item.imageOne}
        imageTwo={item.imageTwo}
        />)}
    </div>
  )
}
export default Page