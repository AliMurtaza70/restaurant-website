import { notFound } from "next/navigation";
import "../menu.css";

interface Product {
  id: number;
  title: string;
  price: number;
  ingredients: string;
  image: string;
  description: string;
}

async function fetchProduct(menuId: string): Promise<Product | null> {
  try {
    const response = await fetch("http://localhost:3000/data/db.json", {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Failed to fetch data:", response.statusText);
      return null;
    }

    const data = await response.json();
    const product = data.products.find(
      (product: Product) => product.id.toString() === menuId
    );

    return product || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default async function ProductPage({
  params,
}: {
  params: { menuId: string };
}) {
  const product = await fetchProduct(params.menuId);

  if (!product) {
    notFound();
  }

  return (
    <div className="menuitem-page">
      <div className="container">
        <div className="menuitems-content">
          <img src={product.image || "/placeholder.jpg"} width='550px' height='600px' alt={product.title} />
          <div className="menuitem-text">
          <h1 className="menuitem-text1">{product.title}</h1>
          <p className="menuitem-text2">{product.ingredients}</p>
          <p className="menuitem-text3">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
