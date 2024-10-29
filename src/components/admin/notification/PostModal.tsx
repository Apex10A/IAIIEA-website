import React, { useState } from 'react';

const PostModal = ({ onClose, onSubmit, postToEdit }) => {
    // Initializing the form fields
    const [title, setTitle] = useState(postToEdit?.title || '');
    const [description, setDescription] = useState(postToEdit?.description || '');
    const [link, setLink] = useState(postToEdit?.link || '');
    const [image, setImage] = useState(postToEdit?.image || null);
    const [isEditing, setIsEditing] = useState(!!postToEdit);

    // Handling image upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    // Form submission handler
    const handleSubmit = () => {
        const postData = { title, description, link, image };
        onSubmit(postData);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{isEditing ? 'Edit Post' : 'Make a Post'}</h2>
                
                <input 
                    type="text" 
                    placeholder="Title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    className="input-field"
                />
                
                <textarea 
                    placeholder="Description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    className="textarea-field"
                />
                
                <input 
                    type="text" 
                    placeholder="Link (optional)" 
                    value={link} 
                    onChange={(e) => setLink(e.target.value)} 
                    className="input-field"
                />
                
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageUpload} 
                    className="file-input"
                />

                {/* Show image preview if an image is uploaded */}
                {image && <img src={URL.createObjectURL(image)} alt="Preview" className="image-preview" />}
                
                <div className="modal-buttons">
                    <button onClick={handleSubmit} className="submit-button">
                        {isEditing ? 'Update Post' : 'Make Post'}
                    </button>
                    <button onClick={onClose} className="cancel-button">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostModal;
