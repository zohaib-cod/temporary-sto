// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.js file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }














// "use client";
// import { useState } from "react";
// import ProductCard from "./components/ProductCard";
// import ProductModal from "./components/ProductModal";

// export default function Home() {
//   const [selected, setSelected] = useState(null);

//   const products = [
//     {
//       id: "1",
//       title: "Oversized White Tee",
//       image: "/images/tshirt1.png",
//       description: "Soft cotton oversized white t-shirt with comfort fit.",
//       originalPrice: 1999,
//       discountPrice: 1399,
//       discount: 30,
//       inStock: true,
//     },
//     {
//       id: "2",
//       title: "Black Streetwear Tee",
//       image: "/images/tshirt2.png",
//       description: "Trendy streetwear design for casual looks.",
//       originalPrice: 2299,
//       discountPrice: 1699,
//       discount: 25,
//       inStock: true,
//     },
//     {
//       id: "3",
//       title: "Classic Grey Tee",
//       image: "/images/tshirt3.png",
//       description: "Minimalist grey t-shirt for everyday wear.",
//       originalPrice: 1899,
//       discountPrice: 1299,
//       discount: 31,
//       inStock: false,
//     },
//     {
//       id: "4",
//       title: "Printed Graphic Tee",
//       image: "/images/tshirt4.png",
//       description: "Premium print design with soft feel fabric.",
//       originalPrice: 2499,
//       discountPrice: 1799,
//       discount: 28,
//       inStock: true,
//     },
//   ];

//   return (
//     <main id="shop" className="min-h-screen py-10 px-6 max-w-6xl mx-auto">
//       <h2 className="text-3xl font-bold text-center mb-10">Shop Our Collection</h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {products.map((p) => (
//           <ProductCard key={p.id} product={p} onClick={setSelected} />
//         ))}
//       </div>
//       {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
//     </main>
//   );
// }



















// "use client";
// import { useState } from "react";
// import ProductCard from "./components/ProductCard";
// import ProductModal from "./components/ProductModal";

// export default function Home() {
//   const [selected, setSelected] = useState(null);

//   // const products = [
//   //   {
//   //     id: "1",
//   //     title: "Oversized White Tee",
//   //     image: "/images/oversize1.png",
//   //     description: "Soft cotton oversized white t-shirt.",
//   //     originalPrice: 1999,
//   //     discountPrice: 1399,
//   //     discount: 30,
//   //     inStock: true,
//   //     category: "Oversize",
//   //   },
//   //   {
//   //     id: "2",
//   //     title: "Black Oversize Tee",
//   //     image: "/images/oversize2.png",
//   //     description: "Trendy oversize design.",
//   //     originalPrice: 2299,
//   //     discountPrice: 1699,
//   //     discount: 25,
//   //     inStock: true,
//   //     category: "Oversize",
//   //   },
//   //   {
//   //     id: "3",
//   //     title: "Regular Grey Tee",
//   //     image: "/images/regular1.png",
//   //     description: "Classic regular fit.",
//   //     originalPrice: 1899,
//   //     discountPrice: 1299,
//   //     discount: 31,
//   //     inStock: true,
//   //     category: "Regular",
//   //   },
//   //   {
//   //     id: "4",
//   //     title: "Regular Printed Tee",
//   //     image: "/images/regular2.png",
//   //     description: "Premium print regular fit.",
//   //     originalPrice: 2499,
//   //     discountPrice: 1799,
//   //     discount: 28,
//   //     inStock: true,
//   //     category: "Regular",
//   //   },
//   // ];
//   const products = [
//   // Oversize
//   { id: "1", title: "Oversized White Tee", image: "/images/oversize1.png", description: "Soft cotton oversized white t-shirt.", originalPrice: 1999, discountPrice: 1399, discount: 30, inStock: true, category: "Oversize" },
//   { id: "2", title: "Black Oversize Tee", image: "/images/oversize2.png", description: "Trendy oversize design.", originalPrice: 2299, discountPrice: 1699, discount: 25, inStock: true, category: "Oversize" },
//   { id: "5", title: "Oversize Blue Tee", image: "/images/oversize3.png", description: "Cool blue oversize.", originalPrice: 2099, discountPrice: 1499, discount: 28, inStock: true, category: "Oversize" },
//   { id: "6", title: "Oversize Red Tee", image: "/images/oversize4.png", description: "Red stylish oversize.", originalPrice: 2199, discountPrice: 1599, discount: 27, inStock: true, category: "Oversize" },

//   // Regular
//   { id: "3", title: "Regular Grey Tee", image: "/images/regular1.png", description: "Classic regular fit.", originalPrice: 1899, discountPrice: 1299, discount: 31, inStock: true, category: "Regular" },
//   { id: "4", title: "Regular Printed Tee", image: "/images/regular2.png", description: "Premium print regular fit.", originalPrice: 2499, discountPrice: 1799, discount: 28, inStock: true, category: "Regular" },
//   { id: "7", title: "Regular White Tee", image: "/images/regular3.png", description: "Simple white regular tee.", originalPrice: 1799, discountPrice: 1199, discount: 33, inStock: true, category: "Regular" },
//   { id: "8", title: "Regular Black Tee", image: "/images/regular4.png", description: "Classic black regular.", originalPrice: 1999, discountPrice: 1399, discount: 30, inStock: true, category: "Regular" },
// ];

//   const oversizeProducts = products.filter((p) => p.category === "Oversize");
//   const regularProducts = products.filter((p) => p.category === "Regular");

//   return (
//     <main className="min-h-screen py-10 px-6 max-w-6xl mx-auto">
//       <h2 className="text-3xl font-bold text-center mb-6">Oversize T-Shirts</h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {oversizeProducts.map((p) => (
//           <ProductCard key={p.id} product={p} onClick={setSelected} />
//         ))}
//       </div>

//       <h2 className="text-3xl font-bold text-center mt-12 mb-6">Regular T-Shirts</h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {regularProducts.map((p) => (
//           <ProductCard key={p.id} product={p} onClick={setSelected} />
//         ))}
//       </div>

//       {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
//     </main>
//   );
// }






















// "use client";
// import { useState } from "react";
// import ProductCard from "./components/ProductCard";
// import ProductModal from "./components/ProductModal";

// export default function Home() {
//   const [selected, setSelected] = useState(null);

//   const products = [
//     // Oversize
//     { id: "1", title: "Oversized White Tee", image: "/images/oversize1.png", description: "Soft cotton oversized white t-shirt.", originalPrice: 1999, discountPrice: 1399, discount: 30, inStock: true, category: "Oversize" },
//     { id: "2", title: "Black Oversize Tee", image: "/images/oversize2.png", description: "Trendy oversize design.", originalPrice: 2299, discountPrice: 1699, discount: 25, inStock: true, category: "Oversize" },
//     { id: "5", title: "Oversize Blue Tee", image: "/images/oversize3.png", description: "Cool blue oversize.", originalPrice: 2099, discountPrice: 1499, discount: 28, inStock: true, category: "Oversize" },
//     { id: "6", title: "Oversize Red Tee", image: "/images/oversize4.png", description: "Red stylish oversize.", originalPrice: 2199, discountPrice: 1599, discount: 27, inStock: true, category: "Oversize" },

//     // Regular
//     { id: "3", title: "Regular Grey Tee", image: "/images/regular1.png", description: "Classic regular fit.", originalPrice: 1899, discountPrice: 1299, discount: 31, inStock: true, category: "Regular" },
//     { id: "4", title: "Regular Printed Tee", image: "/images/regular2.png", description: "Premium print regular fit.", originalPrice: 2499, discountPrice: 1799, discount: 28, inStock: true, category: "Regular" },
//     { id: "7", title: "Regular White Tee", image: "/images/regular3.png", description: "Simple white regular tee.", originalPrice: 1799, discountPrice: 1199, discount: 33, inStock: true, category: "Regular" },
//     { id: "8", title: "Regular Black Tee", image: "/images/regular4.png", description: "Classic black regular.", originalPrice: 1999, discountPrice: 1399, discount: 30, inStock: true, category: "Regular" },
//   ];

//   const oversizeProducts = products.filter((p) => p.category === "Oversize");
//   const regularProducts = products.filter((p) => p.category === "Regular");

//   return (
//     <main className="min-h-screen py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//       {/* Oversize Section */}
//       <section className="mb-12 lg:mb-16">
//         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 lg:mb-8 px-2">
//           Oversize T-Shirts
//         </h2>
//         <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
//           {oversizeProducts.map((p) => (
//             <ProductCard key={p.id} product={p} onClick={setSelected} />
//           ))}
//         </div>
//       </section>

//       {/* Regular Section */}
//       <section>
//         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 lg:mb-8 px-2">
//           Regular T-Shirts
//         </h2>
//         <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
//           {regularProducts.map((p) => (
//             <ProductCard key={p.id} product={p} onClick={setSelected} />
//           ))}
//         </div>
//       </section>

//       {/* Modal */}
//       {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
//     </main>
//   );
// }











// "use client";
// import { useState } from "react";
// import ProductCard from "./components/ProductCard";
// import ProductModal from "./components/ProductModal";

// export default function Home() {
//   const [selected, setSelected] = useState(null);

//   const products = [
//     // Oversize
//     { id: "1", title: "Oversized White Tee", image: "/images/oversize1.png", description: "Soft cotton oversized white t-shirt.", originalPrice: 1999, discountPrice: 1399, discount: 30, inStock: true, category: "Oversize" },
//     { id: "2", title: "Black Oversize Tee", image: "/images/oversize2.png", description: "Trendy oversize design.", originalPrice: 2299, discountPrice: 1699, discount: 25, inStock: true, category: "Oversize" },
//     { id: "5", title: "Oversize Blue Tee", image: "/images/oversize3.png", description: "Cool blue oversize.", originalPrice: 2099, discountPrice: 1499, discount: 28, inStock: true, category: "Oversize" },
//     { id: "6", title: "Oversize Red Tee", image: "/images/oversize4.png", description: "Red stylish oversize.", originalPrice: 2199, discountPrice: 1599, discount: 27, inStock: true, category: "Oversize" },

//     // Regular
//     { id: "3", title: "Regular Grey Tee", image: "/images/regular1.png", description: "Classic regular fit.", originalPrice: 1899, discountPrice: 1299, discount: 31, inStock: true, category: "Regular" },
//     { id: "4", title: "Regular Printed Tee", image: "/images/regular2.png", description: "Premium print regular fit.", originalPrice: 2499, discountPrice: 1799, discount: 28, inStock: true, category: "Regular" },
//     { id: "7", title: "Regular White Tee", image: "/images/regular3.png", description: "Simple white regular tee.", originalPrice: 1799, discountPrice: 1199, discount: 33, inStock: true, category: "Regular" },
//     { id: "8", title: "Regular Black Tee", image: "/images/regular4.png", description: "Classic black regular.", originalPrice: 1999, discountPrice: 1399, discount: 30, inStock: true, category: "Regular" },
//   ];

//   const oversizeProducts = products.filter((p) => p.category === "Oversize");
//   const regularProducts = products.filter((p) => p.category === "Regular");

//   return (
//     <main className="min-h-screen py-4 sm:py-8 lg:py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//       {/* Oversize Section */}
//       <section className="mb-10 lg:mb-16">
//         <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 lg:mb-8">
//           Oversize T-Shirts
//         </h2>
//         <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {oversizeProducts.map((p) => (
//             <ProductCard key={p.id} product={p} onClick={setSelected} />
//           ))}
//         </div>
//       </section>

//       {/* Regular Section */}
//       <section>
//         <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 lg:mb-8">
//           Regular T-Shirts
//         </h2>
//         <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {regularProducts.map((p) => (
//             <ProductCard key={p.id} product={p} onClick={setSelected} />
//           ))}
//         </div>
//       </section>

//       {/* Modal */}
//       {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
//     </main>
//   );
// }


















"use client";
import { useState } from "react";
import ProductCard from "./components/ProductCard";
import ProductModal from "./components/ProductModal";

export default function Home() {
  const [selected, setSelected] = useState(null);

  const products = [
    // Oversize
    { id: "1", title: "Oversized White Tee", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHzexTJlnT1oAr66cYzK1pulXJcGJD50QOiA&s", description: "Soft cotton oversized white t-shirt.", originalPrice: 1999, discountPrice: 1399, discount: 30, inStock: true, category: "Oversize" },
    { id: "2", title: "Black Oversize Tee", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJovfXo63k_LNH808A_PHfuwmKC3Nie5VFTg&s", description: "Trendy oversize design.", originalPrice: 2299, discountPrice: 1699, discount: 25, inStock: true, category: "Oversize" },
    { id: "5", title: "Oversize Blue Tee", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Q7gJ2y2VBJKFETrQv3VA26dWibKAGCYCow&s", description: "Cool blue oversize.", originalPrice: 2099, discountPrice: 1499, discount: 28, inStock: true, category: "Oversize" },
    { id: "6", title: "Oversize Red Tee", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzvpMjm1R2oibbiJer4Gyk8UtScudwF5e5-A&s", description: "Red stylish oversize.", originalPrice: 2199, discountPrice: 1599, discount: 27, inStock: true, category: "Oversize" },

    // Regular
    { id: "3", title: "Regular Grey Tee", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAlXyarDHZ6rSnGfoWLv9GwPJw8dh2w0eRHw&s", description: "Classic regular fit.", originalPrice: 1899, discountPrice: 1299, discount: 31, inStock: true, category: "Regular" },
    { id: "4", title: "Regular Printed Tee", image: "data:image/jpeg;base64,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", description: "Premium print regular fit.", originalPrice: 2499, discountPrice: 1799, discount: 28, inStock: true, category: "Regular" },
    { id: "7", title: "Regular White Tee", image: "data:image/jpeg;base64,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", description: "Simple white regular tee.", originalPrice: 1799, discountPrice: 1199, discount: 33, inStock: true, category: "Regular" },
    { id: "8", title: "Regular Black Tee", image: "data:image/jpeg;base64,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", description: "Classic black regular.", originalPrice: 1999, discountPrice: 1399, discount: 30, inStock: true, category: "Regular" },
  ];

  const oversizeProducts = products.filter((p) => p.category === "Oversize");
  const regularProducts = products.filter((p) => p.category === "Regular");

  return (
    <main className="min-h-screen py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Oversize Section */}
      <section className="mb-10 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 lg:mb-8">
          Oversize T-Shirts
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {oversizeProducts.map((p) => (
            <ProductCard key={p.id} product={p} onClick={setSelected} />
          ))}
        </div>
      </section>

      {/* Regular Section */}
      <section>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 lg:mb-8">
          Regular T-Shirts
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {regularProducts.map((p) => (
            <ProductCard key={p.id} product={p} onClick={setSelected} />
          ))}
        </div>
      </section>

      {/* Modal */}
      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </main>
  );
}
