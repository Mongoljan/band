interface Dictionary {
  products: {
    cart: string; // or whatever type cart is supposed to be
  };
}

export default function Button({ dict }: { dict: Dictionary }) {
  return (
    <button className="block mt-5 font-semibold text-slate-200 hover:text-white">
      {dict.products.cart}
    </button>
  );
}
