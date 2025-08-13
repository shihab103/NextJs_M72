import Link from "next/link";
import React from "react";

const ServicesPage = () => {
  const data = [
    {
      _id: "686ba3651c2a339fae1b9f0e",
      title: "Cappuccino",
      image: "https://i.ibb.co/5gn1RgkC/pexels-pixabay-414628.jpg",
      company: "Cannon Joseph Trading",
      website: "https://www.modevyhaferibe.org.uk",
      description: "Equal parts espresso, steamed milk, and foam.",
      category: "Milk Coffee",
      price: "220",
      email: "salad@gmail.com",
    },
    {
      _id: "686e0be7fb4cd8b830cf56a1",
      title: "Coffee",
      image: "https://i.ibb.co/8Dz367Wt/pexels-chevanon-302905.jpg",
      company: "Nasa",
      website: "https://www.vajuvequrabimad.com",
      description: "This is a best coffee in this country.",
      category: "milk",
      price: "200",
      email: "ccc@gmail.com",
    },
    {
      _id: "686e1552fb4cd8b830cf56a2",
      title: "Irish Coffee",
      image: "https://i.ibb.co/Df9wDXbZ/pexels-ekrulila-2128109.jpg",
      company: "Tate and Prince Trading",
      website: "https://www.lusesyjidita.co",
      description: "Similar to latte but with less foam and creamier texture.",
      category: "Alcoholic Coffee",
      price: "400",
      email: "ddd@gmail.com",
    },
    {
      _id: "68762536fdf17f0dd831a753",
      title: "Espresso",
      image:
        "https://i.ibb.co/Dfc4tkGy/pexels-content-pixie-1405717-2836945-1.jpg",
      company: "Jefferson Wilcox Plc ser er ta",
      website: "https://www.lefuzajo.ws",
      description: "Strong and concentrated coffee served in a small cup.",
      category: "Black Coffee",
      price: "150",
      addedDate: "2025-07-15",
      email: "shihabuddin2469@gmail.com",
    },
    {
      _id: "68762564fdf17f0dd831a754",
      title: "Americano",
      image: "https://i.ibb.co/KjxgScpr/pexels-myfoodie-2616172.jpg",
      company: "Heath Clarke Associates trrt dert",
      website: "https://www.juhogo.biz",
      description: "Espresso diluted with hot water for a lighter taste.",
      category: "Black Coffee",
      price: "180",
      addedDate: "2025-07-15",
      email: "shihabuddin2469@gmail.com",
    },
    {
      _id: "6897745918fe9485a696064e",
      title: "Flat White",
      image: "https://i.ibb.co/C3DsyyK7/pexels-myfoodie-2638019-2.jpg",
      company: "Harvey Atkinson Traders",
      website: "https://www.tywygor.us",
      description: "Similar to latte but with less foam and creamier texture.",
      category: "Milk Coffee",
      price: "198",
      addedDate: "2025-08-09",
      email: "shihab@gmail.com",
    },
    {
      _id: "6897749d880ae45e009ee19e",
      title: "Affogato",
      image: "https://i.ibb.co/C5GDmhf6/pexels-chiecharon-1187317.jpg",
      company: "Keller and Acevedo LLC",
      website: "https://www.sogoryxedan.me.uk",
      description: "Hot espresso poured over a scoop of ice cream.",
      category: "Dessert Coffee",
      price: "226",
      addedDate: "2025-08-09",
      email: "shihab@gmail.com",
    },
    {
      _id: "6897770418fe9485a696064f",
      title: "Vietnamese Coffee",
      image: "https://i.ibb.co/CpH5x4KL/cup-coffee-with-heart-drawn-foam.jpg",
      company: "Freeman and Reilly Inc",
      website: "https://www.fuqose.info",
      description:
        "Coffee brewed strong and mixed with sweetened condensed milk.",
      category: "Traditional",
      price: "637",
      addedDate: "2025-08-09",
      email: "shihab@gmail.com",
    },
    {
      _id: "6897775618fe9485a6960650",
      title: "Turkish Coffee",
      image: "https://i.ibb.co/5gn1RgkC/pexels-pixabay-414628.jpg",
      company: "Hicks and Chandler Co",
      website: "https://www.ham.com",
      description: "Strong coffee with grounds served in a small cup.",
      category: "Traditional",
      price: "350",
      addedDate: "2025-08-09",
      email: "shihab@gmail.com",
    },
    {
      _id: "68988357ae9bc93d32b8940d",
      title: "Aliquip nobis atque",
      image: "https://i.ibb.co/Y4vZRbDT/cup-coffee.jpg",
      company: "Clarke Burnett Trading",
      website: "https://www.tumafyrecyr.ws",
      description: "Corrupti non in vol",
      category: "Sit sed est tempori",
      price: "926",
      addedDate: "2025-08-10",
      email: "shihabuddin2469@gmail.com",
    },
  ];

  return (
    <div>
      <div className="flex mt-10 justify-center flex-wrap gap-5">
        {data.map((d) => (
          <div className="w-[200px] border p-2 rounded" key={d._id}>
            <Link href={`/services/${d._id}`}>
              <img src={d.image} alt={d.title} className="w-full h-40 object-cover rounded" />
              <h2 className="mt-2 font-bold">{d.title}</h2>
              <p className="text-sm">{d.category}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
