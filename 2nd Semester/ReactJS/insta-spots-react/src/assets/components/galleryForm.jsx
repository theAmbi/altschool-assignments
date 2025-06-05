import React, { useState, useEffect } from 'react';

const GalleryForm = ({ initialData = {}, onSubmit, onClose }) => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title || '');
            setImage(initialData.image || '');
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && image) {
            onSubmit({ ...initialData, title, image });
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur flex items-center justify-center z-50">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg w-full max-w-md space-y-4">
                <h2 className="text-xl font-semibold">{initialData.id ? 'Edit Item' : 'Add Item'}</h2>
                <input
                    type="text"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border p-2 rounded"
                    required
                />
                <div className="flex justify-end gap-2">
                    <button type="button" onClick={onClose} className="px-4 py-2 border rounded">
                        Cancel
                    </button>
                    <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
                        {initialData.id ? 'Update' : 'Add'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default GalleryForm;
