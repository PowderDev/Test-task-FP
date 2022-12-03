import { useEffect } from "react"

export default function useKey(
  targetKey: string,
  onKey: ((e: KeyboardEvent) => any) | undefined,
  deps: any[] = []
) {
  const handler = (e: KeyboardEvent) => {
    if (e.key === targetKey) {
      onKey?.(e)
    }
  }

  useEffect(() => {
    window.addEventListener("keypress", handler)
    return () => {
      window.removeEventListener("keypress", handler)
    }
  }, deps)
}
