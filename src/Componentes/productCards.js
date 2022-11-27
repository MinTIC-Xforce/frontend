import toast from "react-hot-toast";
import { useProducts } from "../context/productContext";

export function ProductCard({ product }) {
  const { deleteProduct } = useProducts();

  const handlerDelete = (id, name) => {
    toast(
      (t) => (
        <div>
          <p className="text-white items-center flex justify-center">
            Do you want to delete?
          </p>
          <p className="text-white items-center flex justify-center">
            <strong>{name}</strong>
          </p>
          <div className="flex justify-center py-2">
            <button
              className="bg-red-600 hover:bg-red-400 text-sm px-3 py-1 text-white rounded-sm mx-2"
              onClick={() => {
                deleteProduct(id);
              }}
            >
              Yes
            </button>
            <button
              className="bg-slate-400 hover:bg-slate-500 px-3 py-1 text-white rounded-sm mx-2"
              onClick={() => toast.dismiss(t.id)}
            >
              Not
            </button>
          </div>
        </div>
      ),
      {
        style: {
          background: "#202020",
        },
      }
    );
  };

  return (
    <div className="bg-zinc-700 text-white rounded-sm shadow-md shadow-black hover:bg-zinc-400 hover:cursor-pointer">
      <div className="px-4 py-7">
        <div id="header" className="flex justify-between">
          <h1>{product.name}</h1>
          <button
            className="bg-red-600 text-sm px-2 py-1 rounded-sm"
            onClick={(product) => handlerDelete(product._id, product.name)}
          >
            Delete
          </button>
        </div>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>{product.stock}</p>
      </div>
    </div>
  );
}
