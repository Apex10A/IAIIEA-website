// AdminDashboard.tsx
import React, { useState } from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi'; // For Edit and Delete icons
import { useToast } from '@radix-ui/react-toast'; // If you're using toast for notifications

import PostButton from './PostButton'; // Import the PostButton component

const AdminDashboard = () => {
    const [posts, setPosts] = useState([]); // Array of posts
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [postToEdit, setPostToEdit] = useState(null);
    const toast = useToast();

    const handlePostSubmit = (postData) => {
        if (postToEdit) {
            // Update existing post logic here
            const updatedPosts = posts.map(post => post.id === postToEdit.id ? postData : post);
            setPosts(updatedPosts);
            toast.success('Post updated successfully!');
        } else {
            // Add new post logic here
            setPosts([...posts, { id: Date.now(), ...postData }]);
            toast.success('Post created successfully!');
        }
        setIsModalOpen(false);
    };

    const handleEditClick = (post) => {
        setPostToEdit(post);
        setIsModalOpen(true);
    };

    const handleDeleteClick = (postId) => {
        const filteredPosts = posts.filter(post => post.id !== postId);
        setPosts(filteredPosts);
        toast.error('Post deleted successfully!');
    };

    return (
        <div className="admin-dashboard">
            <PostButton onClick={() => setIsModalOpen(true)} />

            <div className="posts-list">
                {posts.map(post => (
                    <div key={post.id} className="post-item">
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        {post.link && <a href={post.link}>Visit Link</a>}
                        {post.image && <img src={URL.createObjectURL(post.image)} alt="Post Image" />}
                        <div className="post-actions">
                            <FiEdit onClick={() => handleEditClick(post)} className="edit-icon" />
                            <FiTrash onClick={() => handleDeleteClick(post.id)} className="delete-icon" />
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <PostModal 
                    onClose={() => setIsModalOpen(false)} 
                    onSubmit={handlePostSubmit} 
                    postToEdit={postToEdit}
                />
            )}
        </div>
    );
};

export default AdminDashboard;
