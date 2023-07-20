import { ref } from 'vue'

export default function useuser() {
    const users = ref([])
    const user = ref({})

    const fetchAll = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        users.value = await response.json()
    }
    const fetchOne = async (id) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`) // insecure
        user.value = await response.json()
        return user
    }

    return {
        users,
        fetchAll,
        user,
        fetchOne
    }
}