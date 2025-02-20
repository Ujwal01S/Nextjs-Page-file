import { useEffect, useState } from "react";

export default function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);
  //   this sales will be overwritten by useEffect
  const [isLoading, setIsLoading] = useState();
  useEffect(() => {
    setIsLoading(true);
    fetch("https://next-80a10-default-rtdb.firebaseio.com/sales.json")
      .then((response) => response.json())
      .then((data) => {
        const transformedSales = [];
        for (const key in data) {
          console.log({ data });
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }
        setSales(transformedSales);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!sales) {
    return <p>No data Yet!</p>;
  }
  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

// this is used when you really need to fetch data from client but also have some pre-render which is eventually over written by useEffect

export async function getStaticProps() {
  const response = await fetch(
    "https://next-80a10-default-rtdb.firebaseio.com/sales.json"
  );
  const data = await response.json();

  const transformedSales = [];
  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }

  return {
    props: {
      sales: transformedSales,
    },
  };
}
