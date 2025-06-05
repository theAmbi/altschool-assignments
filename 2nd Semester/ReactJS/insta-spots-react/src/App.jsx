import './App.css'

// import React, { useState } from 'react';
// import GalleryList from './assets/components/galleryList';
// import GalleryForm from './assets/components/galleryForm';
// import { initialGalleryItems } from './data/gallery';
// import { IoMdClose } from "react-icons/io";

// const App = () => {
//   const [galleryItems, setGalleryItems] = useState(initialGalleryItems);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [formVisible, setFormVisible] = useState(false);
//   const [editingItem, setEditingItem] = useState(null);

//   const handleAdd = () => {
//     setEditingItem(null);
//     setFormVisible(true);
//   };

//   const handleEdit = (item) => {
//     setEditingItem(item);
//     setFormVisible(true);
//   };

//   const handleFormSubmit = (item) => {
//     if (item.id) {
//       // Editing existing
//       setGalleryItems(prev =>
//         prev.map(i => (i.id === item.id ? item : i))
//       );
//     } else {
//       // Adding new
//       setGalleryItems(prev => [
//         ...prev,
//         { ...item, id: Date.now() }
//       ]);
//     }
//   };

//   return (
//     <div className="min-h-screen px-6 py-10 bg-gray-100">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">My Gallery</h1>
//         <button onClick={handleAdd} className="bg-blue-600 text-white px-4 py-2 rounded">
//           + Add New
//         </button>
//       </div>

//       <GalleryList
//         items={galleryItems}
//         onImageClick={setSelectedImage}
//         onEdit={handleEdit}
//       />

//       {formVisible && (
//         <GalleryForm
//           initialData={editingItem}
//           onSubmit={handleFormSubmit}
//           onClose={() => setFormVisible(false)}
//         />
//       )}

//       {selectedImage && (
//         <div className="fixed inset-0 bg-black/70 backdrop-blur-xl flex items-center justify-center z-50 transition ease-in-out duration-300">
//           <div className="relative max-w-3xl w-full p-4">
//             <button
//               onClick={() => setSelectedImage(null)}
//               className="absolute top-4 right-2 text-white text-2xl p-5 bg-black/40 rounded-lg cursor-pointer"
//             >
//               <IoMdClose />
//             </button>
//             <img src={selectedImage} alt="Preview" className="w-full rounded-2xl" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

import Nav from './assets/components/nav'
import Profile from './assets/components/profile'
import GalleryList from './assets/components/galleryList'
import Footer from './assets/components/footer'


function App() {
  return (
    <div className='font-poppins bg-main-bg w-full min-h-screen'>
      <Nav />
      <div className='max-w-[80%] m-auto'>
        <Profile />
        <GalleryList />
        <Footer />
      </div>
    </div>
  )
}

export default App
