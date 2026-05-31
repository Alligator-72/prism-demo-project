export async function getUserAvatar(id: string) {
  const response = await fetch(`/api/users/${id}`)
  return response.json()
}