import { ref } from 'vue'

export default function usePost() {
    const posts = ref([])

    const fetchAll = async () => {
        const response = await("https://jsonplaceholder.typicode.posts")
        posts.value = await response.json()
    }

    return {
        posts,
        fetchAll
    }
}