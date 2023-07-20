import { ref } from 'vue'

export default function usePost() {
    const posts = ref([])
    const post = ref({})

    const fetchAll = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        posts.value = await response.json()
    }
    const fetchOne = async (id) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`) // insecure
        post.value = await response.json()
        return post
    }

    return {
        posts,
        fetchAll,
        post,
        fetchOne
    }
}