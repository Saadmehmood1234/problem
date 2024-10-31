"use client";
import { useState, ChangeEvent, FormEvent } from 'react';

interface Comment {
  id: number;
  text: string;
  imageUrl: string;
}

const initialComments: Comment[] = [
  { id: 1, text: "This is a great post!", imageUrl: "https://avatar.iran.liara.run/public/boy" },
  { id: 2, text: "I found this really helpful, thanks!", imageUrl: "https://avatar.iran.liara.run/public/girl" },
  { id: 3, text: "Can you provide more details on this topic?", imageUrl: "https://avatar.iran.liara.run/public" },
];

const Comments: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [comment, setComment] = useState<string>('');

  const handleCommentSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComment: Comment = {
        id: Date.now(),
        text: comment,
        imageUrl: "/images/default.jpg", 
      };
      setComments([newComment, ...comments]);
      setComment('');
    }
  };

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  return (
    <div className="max-w-5xl w-full mx-auto p-4 bg-white rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>

      <form onSubmit={handleCommentSubmit} className="mb-4">
        <textarea
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows={3}
          placeholder="Write your comment..."
          value={comment}
          onChange={handleCommentChange}
        ></textarea>
        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-indigo-600"
        >
          Submit
        </button>
      </form>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Others Comments</h2>
        {comments.map((c) => (
          <div key={c.id} className="p-4 bg-gray-100 rounded-lg shadow-sm flex items-start space-x-4">
            <img
              src={c.imageUrl}
              alt="User avatar"
              className="w-12 h-12 rounded-full object-cover"
            />
            <p>{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
