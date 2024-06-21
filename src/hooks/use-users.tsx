import { useEffect, useRef, useState } from "react"
import axios from "axios"
import type { ReqResResponse, User } from "../interfaces"

const loadUsers = async (page: number = 1): Promise<User[]> => {
  try {
    const { data } = await axios.get<ReqResResponse>(
      "https://reqres.in/api/users", {
      params: {
        page,
      }
    }
    )
    return data.data
  } catch (error) {
    console.log("Error:", error)
    return []
  }
}


export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([])
  const currentPageRef = useRef(1)

  useEffect(() => {
    loadUsers(currentPageRef.current)
      .then(setUsers)
  }, [])

  const nextPage = async () => {
    currentPageRef.current++
    const users = await loadUsers(currentPageRef.current)

    if (users.length > 0) {
      setUsers(users)
      return
    }

    currentPageRef.current--
  }

  const prevPage = async () => {
    if (currentPageRef.current < 1) return
    currentPageRef.current--
    const users = await loadUsers(currentPageRef.current)
    setUsers(users)
  }

  return {
    users,
    prevPage,
    nextPage
  }
}