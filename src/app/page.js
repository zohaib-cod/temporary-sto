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
    { id: "1", title: "Oversized White Tee", image: "/images/oversize1.png", description: "Soft cotton oversized white t-shirt.", originalPrice: 1999, discountPrice: 1399, discount: 30, inStock: true, category: "Oversize" },
    { id: "2", title: "Black Oversize Tee", image: "/images/oversize2.png", description: "Trendy oversize design.", originalPrice: 2299, discountPrice: 1699, discount: 25, inStock: true, category: "Oversize" },
    { id: "5", title: "Oversize Blue Tee", image: "/images/oversize3.png", description: "Cool blue oversize.", originalPrice: 2099, discountPrice: 1499, discount: 28, inStock: true, category: "Oversize" },
    { id: "6", title: "Oversize Red Tee", image: "/images/oversize4.png", description: "Red stylish oversize.", originalPrice: 2199, discountPrice: 1599, discount: 27, inStock: true, category: "Oversize" },

    // Regular
    { id: "3", title: "Regular Grey Tee", image: "/images/regular1.png", description: "Classic regular fit.", originalPrice: 1899, discountPrice: 1299, discount: 31, inStock: true, category: "Regular" },
    { id: "4", title: "Regular Printed Tee", image: "/images/regular2.png", description: "Premium print regular fit.", originalPrice: 2499, discountPrice: 1799, discount: 28, inStock: true, category: "Regular" },
    { id: "7", title: "Regular White Tee", image: "/images/regular3.png", description: "Simple white regular tee.", originalPrice: 1799, discountPrice: 1199, discount: 33, inStock: true, category: "Regular" },
    { id: "8", title: "Regular Black Tee", image: "/images/regular4.png", description: "Classic black regular.", originalPrice: 1999, discountPrice: 1399, discount: 30, inStock: true, category: "Regular" },
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
