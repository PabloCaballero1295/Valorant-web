import { useEffect, useState } from "react"

type FetchState<T> = {
  data: T | null
  loading: boolean
  error: string | null
}

export const useFetch = <T>(url: string) => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState({ data: null, loading: true, error: null })

        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`)
        }

        const result = await response.json()

        setState({ data: result.data as T, loading: false, error: null })
      } catch (error) {
        setState({
          data: null,
          loading: false,
          error: (error as Error).message,
        })
      }
    }

    fetchData()
  }, [url])

  return state
}
