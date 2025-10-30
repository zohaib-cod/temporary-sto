// "use client";
// import { useState } from "react";

// export default function OrderForm({ product }) {
//   const [form, setForm] = useState({ name: "", phone: "", address: "", quantity: 1 });

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const sendToWhatsApp = () => {
//     const msg = `*Order Details:*\n
// Product: ${product.title}
// Price: Rs ${product.discountPrice}
// Quantity: ${form.quantity}
// Name: ${form.name}
// Phone: ${form.phone}
// Address: ${form.address}
// \nTotal: Rs ${product.discountPrice * form.quantity}`;

//     const url = `https://wa.me/923290010909?text=${encodeURIComponent(msg)}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <div className="mt-4 space-y-3">
//       <input name="name" placeholder="Your Name" onChange={handleChange} className="w-full border p-2 rounded-lg" />
//       <input name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full border p-2 rounded-lg" />
//       <input name="address" placeholder="Address" onChange={handleChange} className="w-full border p-2 rounded-lg" />
//       <input name="quantity" type="number" min="1" value={form.quantity} onChange={handleChange} className="w-full border p-2 rounded-lg" />
//       <button onClick={sendToWhatsApp} className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
//         Confirm Order via WhatsApp
//       </button>
//     </div>
//   );
// }

















// "use client";
// import { useState } from "react";

// export default function OrderForm({ product }) {
//   const [form, setForm] = useState({ name: "", phone: "", address: "", quantity: 1 });

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const sendToWhatsApp = () => {
//     const msg = `*Order Details:*\n
// Product: ${product.title}
// Price: Rs ${product.discountPrice}
// Quantity: ${form.quantity}
// Name: ${form.name}
// Phone: ${form.phone}
// Address: ${form.address}
// \nTotal: Rs ${product.discountPrice * form.quantity}`;

//     const url = `https://wa.me/923290010909?text=${encodeURIComponent(msg)}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <div className="mt-2 space-y-2"> {/* Reduced vertical spacing */}
//       <input
//         name="name"
//         placeholder="Your Name"
//         onChange={handleChange}
//         className="w-full border p-1.5 rounded-md text-sm"
//       />
//       <input
//         name="phone"
//         placeholder="Phone Number"
//         onChange={handleChange}
//         className="w-full border p-1.5 rounded-md text-sm"
//       />
//       <input
//         name="address"
//         placeholder="Address"
//         onChange={handleChange}
//         className="w-full border p-1.5 rounded-md text-sm"
//       />
//       <input
//         name="quantity"
//         type="number"
//         min="1"
//         value={form.quantity}
//         onChange={handleChange}
//         className="w-full border p-1.5 rounded-md text-sm"
//       />
//       <button
//         onClick={sendToWhatsApp}
//         className="w-full bg-black text-white py-1.5 rounded-md text-sm hover:bg-gray-800"
//       >
//         Confirm Order via WhatsApp
//       </button>
//     </div>
//   );
// }

















// "use client";
// import { useState } from "react";

// export default function OrderForm({ product }) {
//   const [form, setForm] = useState({ name: "", phone: "", address: "", quantity: 1 });

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const sendToWhatsApp = () => {
//     const msg = `*Order Details:*\n
// Product: ${product.title}
// Price: Rs ${product.discountPrice}
// Quantity: ${form.quantity}
// Name: ${form.name}
// Phone: ${form.phone}
// Address: ${form.address}
// \nTotal: Rs ${product.discountPrice * form.quantity}`;

//     const url = `https://wa.me/923290010909?text=${encodeURIComponent(msg)}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <div className="mt-2 space-y-2 w-full max-w-lg md:max-w-xl mx-auto">
//       <input
//         name="name"
//         placeholder="Your Name"
//         onChange={handleChange}
//         className="w-full border rounded-md p-2 md:p-1.5 text-sm md:text-base"
//       />
//       <input
//         name="phone"
//         placeholder="Phone Number"
//         onChange={handleChange}
//         className="w-full border rounded-md p-2 md:p-1.5 text-sm md:text-base"
//       />
//       <input
//         name="address"
//         placeholder="Address"
//         onChange={handleChange}
//         className="w-full border rounded-md p-2 md:p-1.5 text-sm md:text-base"
//       />
//       <input
//         name="quantity"
//         type="number"
//         min="1"
//         value={form.quantity}
//         onChange={handleChange}
//         className="w-full border rounded-md p-2 md:p-1.5 text-sm md:text-base"
//       />
//       <button
//         onClick={sendToWhatsApp}
//         className="w-full bg-black text-white rounded-md py-2 md:py-1.5 text-sm md:text-base hover:bg-gray-800 transition"
//       >
//         Confirm Order via WhatsApp
//       </button>
//     </div>
//   );
// }
























// "use client";
// import { useState } from "react";

// export default function OrderForm({ product }) {
//   const [form, setForm] = useState({ name: "", phone: "", address: "", quantity: 1 });

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const sendToWhatsApp = () => {
//     const msg = `*Order Details:*\n
// Product: ${product.title}
// Price: Rs ${product.discountPrice}
// Quantity: ${form.quantity}
// Name: ${form.name}
// Phone: ${form.phone}
// Address: ${form.address}
// \nTotal: Rs ${product.discountPrice * form.quantity}`;

//     const url = `https://wa.me/923290010909?text=${encodeURIComponent(msg)}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <div className="mt-2 space-y-2 w-full max-w-md md:max-w-lg mx-auto">
//       <input
//         name="name"
//         placeholder="Your Name"
//         onChange={handleChange}
//         className="w-full border rounded-md px-2 py-1 text-sm md:text-base md:py-1"
//       />
//       <input
//         name="phone"
//         placeholder="Phone Number"
//         onChange={handleChange}
//         className="w-full border rounded-md px-2 py-1 text-sm md:text-base md:py-1"
//       />
//       <input
//         name="address"
//         placeholder="Address"
//         onChange={handleChange}
//         className="w-full border rounded-md px-2 py-1 text-sm md:text-base md:py-1"
//       />
//       <input
//         name="quantity"
//         type="number"
//         min="1"
//         value={form.quantity}
//         onChange={handleChange}
//         className="w-full border rounded-md px-2 py-1 text-sm md:text-base md:py-1"
//       />
//       <button
//         onClick={sendToWhatsApp}
//         className="w-full bg-black text-white rounded-md py-1 text-sm md:py-1 md:text-base hover:bg-gray-800 transition"
//       >
//         Confirm Order via WhatsApp
//       </button>
//     </div>
//   );
// }
















"use client";
import { useState } from "react";

export default function OrderForm({ product }) {
  const [form, setForm] = useState({ name: "", phone: "", address: "", quantity: 1 });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const sendToWhatsApp = () => {
    const msg = `*Order Details:*\n
Product: ${product.title}
Price: Rs ${product.discountPrice}
Quantity: ${form.quantity}
Name: ${form.name}
Phone: ${form.phone}
Address: ${form.address}
\nTotal: Rs ${product.discountPrice * form.quantity}`;

    const url = `https://wa.me/923290010909?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="mt-2 space-y-2 w-full max-w-md md:max-w-lg mx-auto">
      <input
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        className="w-full border rounded-md px-2 py-0.5 text-xs md:py-1 md:text-sm"
      />
      <input
        name="phone"
        placeholder="Phone Number"
        onChange={handleChange}
        className="w-full border rounded-md px-2 py-0.5 text-xs md:py-1 md:text-sm"
      />
      <input
        name="address"
        placeholder="Address"
        onChange={handleChange}
        className="w-full border rounded-md px-2 py-0.5 text-xs md:py-1 md:text-sm"
      />
      <input
        name="quantity"
        type="number"
        min="1"
        value={form.quantity}
        onChange={handleChange}
        className="w-full border rounded-md px-2 py-0.5 text-xs md:py-1 md:text-sm"
      />
      <button
        onClick={sendToWhatsApp}
        className="w-full bg-black text-white rounded-md py-1 text-xs md:py-1 md:text-sm hover:bg-gray-800 transition"
      >
        Confirm Order via WhatsApp
      </button>
    </div>
  );
}





























// "use client";
// import { useState } from "react";

// export default function OrderForm({ product }) {
//   const [form, setForm] = useState({ name: "", phone: "", address: "", quantity: 1 });

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const sendToWhatsApp = () => {
//     const msg = `*Order Details:*\n
// Product: ${product.title}
// Price: Rs ${product.discountPrice}
// Quantity: ${form.quantity}
// Name: ${form.name}
// Phone: ${form.phone}
// Address: ${form.address}
// \nTotal: Rs ${product.discountPrice * form.quantity}`;

//     const url = `https://wa.me/923290010909?text=${encodeURIComponent(msg)}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <div className="w-full max-w-md mx-auto">
//       <input
//         name="name"
//         placeholder="Your Name"
//         onChange={handleChange}
//         className="w-full border rounded-md px-2 py-1 text-xs md:py-1 md:text-sm mb-1"
//       />
//       <input
//         name="phone"
//         placeholder="Phone Number"
//         onChange={handleChange}
//         className="w-full border rounded-md px-2 py-1 text-xs md:py-1 md:text-sm mb-1"
//       />
//       <input
//         name="address"
//         placeholder="Address"
//         onChange={handleChange}
//         className="w-full border rounded-md px-2 py-1 text-xs md:py-1 md:text-sm mb-1"
//       />
//       <input
//         name="quantity"
//         type="number"
//         min="1"
//         value={form.quantity}
//         onChange={handleChange}
//         className="w-full border rounded-md px-2 py-1 text-xs md:py-1 md:text-sm mb-1"
//       />
//       <button
//         onClick={sendToWhatsApp}
//         className="w-full bg-black text-white rounded-md py-1 text-xs md:py-1 md:text-sm hover:bg-gray-800 transition"
//       >
//         Confirm Order via WhatsApp
//       </button>
//     </div>
//   );
// }
