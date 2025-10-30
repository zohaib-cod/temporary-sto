// "use client";
// import { motion } from "framer-motion";
// import OrderForm from "./OrderForm";

// export default function ProductModal({ product, onClose }) {
//   if (!product) return null;

//   return (
//     <motion.div
//       layoutId={product.id}
//       className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4"
//       onClick={onClose}
//     >
//       <motion.div
//         onClick={(e) => e.stopPropagation()}
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         className="bg-white rounded-2xl p-6 w-full max-w-md relative"
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-600 hover:text-black"
//         >
//           ✕
//         </button>
//         <img
//           src={product.image}
//           alt={product.title}
//           className="w-full h-64 object-cover rounded-xl"
//         />
//         <h2 className="text-2xl font-bold mt-3">{product.title}</h2>
//         <p className="text-gray-500 text-sm mt-1">{product.description}</p>
//         <OrderForm product={product} />
//       </motion.div>
//     </motion.div>
//   );
// }














"use client";
import { motion } from "framer-motion";
import OrderForm from "./OrderForm";

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <motion.div
      layoutId={product.id}
      className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ rotateY: -180, scale: 0.8, opacity: 0 }}
        animate={{ rotateY: 0, scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="bg-white rounded-2xl p-6 w-full max-w-md relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          ✕
        </button>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover rounded-xl"
        />
        <h2 className="text-2xl font-bold mt-3">{product.title}</h2>
        <p className="text-gray-500 text-sm mt-1">{product.description}</p>
        <OrderForm product={product} />
      </motion.div>
    </motion.div>
  );
}
