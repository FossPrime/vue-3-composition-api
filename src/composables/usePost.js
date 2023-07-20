import { $ref } from 'vue/macros'

export default function usePost() {
    const posts = $ref([])

    const fetchAll = async () => {
        const response = await("https://jsonplaceholder.typicode.posts")
        posts = await response.json()
    }

    return {
        posts,
        fetchAll
    }
}