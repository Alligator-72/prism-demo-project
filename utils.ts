// src/utils.ts

export function getRandomUser(users: any[]) {
  // ⚠️ 使用 any 类型
  // ⚠️ Math.random 非确定性
  return users[Math.floor(Math.random() * users.length)]
}

export function formatUserName(name: string) {
  // ⚠️ 没有文档说明
  return name.trim().toUpperCase()
}