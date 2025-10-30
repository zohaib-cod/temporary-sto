// "use client";
// import { motion } from "framer-motion";

// export default function ProductCard({ product, onClick }) {
//   return (
//     <motion.div
//       layoutId={product.id}
//       whileHover={{ scale: 1.05 }}
//       onClick={() => onClick(product)}
//       className="bg-white rounded-2xl shadow-md p-3 cursor-pointer relative overflow-hidden"
//     >
//       <img
//         src={product.image}
//         alt={product.title}
//         className="w-full h-56 object-cover rounded-xl"
//       />
//       <div className="mt-3">
//         <h3 className="text-lg font-semibold">{product.title}</h3>
//         <p className="text-sm text-gray-500">{product.inStock ? "✅ In Stock" : "❌ Out of Stock"}</p>
//         <div className="flex items-center gap-2 mt-1">
//           <p className="text-gray-400 line-through">Rs {product.originalPrice}</p>
//           <p className="text-black font-bold">Rs {product.discountPrice}</p>
//         </div>
//         {product.discount && (
//           <span className="absolute top-3 right-3 bg-red-600 text-white text-xs px-2 py-1 rounded-lg">
//             {product.discount}% OFF
//           </span>
//         )}
//       </div>
//     </motion.div>
//   );
// }














// "use client";
// import { motion } from "framer-motion";

// export default function ProductCard({ product, onClick }) {
//   return (
//     <motion.div
//       layoutId={product.id}
//       whileHover={{ rotateY: 15, scale: 1.05 }}
//       whileTap={{ rotateY: -15 }}
//       onClick={() => onClick(product)}
//       className="bg-white rounded-2xl shadow-lg p-3 cursor-pointer relative overflow-hidden"
//     >
//       <img
//         src={product.image}
//         alt={product.title}
//         className="w-full h-56 object-cover rounded-xl"
//       />
//       <div className="mt-3">
//         <h3 className="text-lg font-semibold">{product.title}</h3>
//         <p className="text-gray-500">{product.inStock ? "✅ In Stock" : "❌ Out of Stock"}</p>
//         <div className="flex items-center gap-2 mt-1">
//           <p className="text-gray-400 line-through">Rs {product.originalPrice}</p>
//           <p className="text-black font-bold">Rs {product.discountPrice}</p>
//         </div>
//         {product.discount && (
//           <span className="absolute top-3 right-3 bg-red-600 text-white text-xs px-2 py-1 rounded-lg">
//             {product.discount}% OFF
//           </span>
//         )}
//         <p className="mt-1 text-xs text-gray-400">{product.category}</p>
//       </div>
//     </motion.div>
//   );
// }

















"use client";
import { motion } from "framer-motion";

export default function ProductCard({ product, onClick }) {
  return (
    <motion.div
      layoutId={product.id}
      whileHover={{ rotateY: 15, scale: 1.05 }}
      whileTap={{ rotateY: -15 }}
      onClick={() => onClick(product)}
      className="bg-white rounded-2xl shadow-lg p-3 cursor-pointer relative overflow-hidden w-full max-w-xs mx-auto"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="mt-3 space-y-2">
        {/* Title - Responsive text and truncate */}
        <h3 className="text-sm sm:text-base font-semibold line-clamp-2 min-h-[3rem]">
          {product.title}
        </h3>

        {/* Stock Status */}
        <p className={`text-sm ${product.inStock ? "text-green-600" : "text-red-600"}`}>
          {product.inStock ? "✅ In Stock" : "❌ Out of Stock"}
        </p>

        {/* Price Section */}
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-gray-400 line-through text-sm">Rs {product.originalPrice}</p>
          <p className="text-black font-bold text-base">Rs {product.discountPrice}</p>
        </div>

        {/* Discount Badge */}
        {product.discount && (
          <span className="absolute top-3 right-3 bg-red-600 text-white text-xs px-2 py-1 rounded-lg z-10">
            {product.discount}% OFF
          </span>
        )}

        {/* Category */}
        <p className="text-xs text-gray-400 capitalize">{product.category}</p>
      </div>
    </motion.div>
  );
}