// src/avatar.ts

export async function getAvatar(id: string) {
  const response = await fetch(`/api/avatar/${id}`)
  // ⚠️ 没有 try/catch，也没有检查 response.ok
  return response.json()
}