"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PostDetail({ params }) {
    const id = params.id;
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true); // State untuk menandai loading
    const [error, setError] = useState(null); // State untuk menangani error

    useEffect(() => {
        if (id) {
            fetchPost();
        }
    }, [id]);

    const fetchPost = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/posts/${id}`);
            setPost(response.data);
            setLoading(false); // Mengubah loading menjadi false setelah data diambil
        } catch (err) {
            setError('Failed to fetch post.'); // Menangani error
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Loading...</div>; // Menampilkan loading jika data sedang dimuat
    }

    if (error) {
        return <div>{error}</div>; // Menampilkan error jika terjadi kesalahan
    }

    if (!post) {
        return <div>Post not found.</div>; // Menampilkan pesan jika post tidak ditemukan
    }

    return (
        <div> 
            {post && (
                <div>
                     <h3 className="text-2xl font-bold">{post.title}</h3>
                     <p className="mt-2">{post.content}</p>
                </div>
            )}
        </div>
    );
}
