import type { Post } from "@/entities/post/types"
import { useEffect, useState } from "react"
import { postsService } from "../api/post.service"

export default function PostList() {
    const [posts, setPosts] = useState<Post[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setError(null)
        const controller = new AbortController()
        async function loadPosts() {
            try {
                const data = await postsService.getPostList(controller.signal)
                if (!controller.signal.aborted) setPosts(data)
            } catch (error) {
                if (error instanceof DOMException && error.name === "AbortError") return;
                if (error instanceof Error) setError(error.message)
            } finally {
                if (!controller.signal.aborted) setLoading(false)
            }
        }
        loadPosts()

        return () => {
            controller.abort()
        }
    }, [])

    async function onClickDelete(id: number) {
        try {
            await postsService.deletePost(id)
            setPosts((prev) => prev.filter((p) => p.id !== id))
        } catch (error) {
            alert("Failed to delete")
        }
    }

    if (loading) return <div>...</div>
    if (error) return <div>{error}</div>

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Posts</h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <article
                        key={post.id}
                        className="border rounded-xl p-5 shadow-sm hover:shadow-md transition bg-white"
                    >
                        <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                            {post.title}
                        </h2>

                        <p className="text-gray-600 text-sm line-clamp-4">
                            {post.body}
                        </p>

                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-xs text-gray-400">Post #{post.id}</span>

                            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                                Read more
                            </button>
                        </div>
                        <button onClick={() => onClickDelete(post.id)}>Delete</button>
                    </article>
                ))}
            </div>
        </div>
    )
}