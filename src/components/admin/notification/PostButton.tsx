// PostButton.tsx
import React from 'react';

interface PostButtonProps {
    onClick: () => void;
}

const PostButton: React.FC<PostButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className='bg-[#203a87] font-semibold text-white px-10 py-3 rounded-[30px] text-[17px] max-w-[30%]'
        >
            Post
        </button>
    );
};

export default PostButton;
