function readHost(value: string | undefined): string {
  const host = (value ?? '127.0.0.1').trim()
  if (host.length === 0) throw new Error('HOST inválido')
  return host
}

function readPort(value: string | undefined): number {
  const port = Number(value ?? 3333)
  if (!Number.isInteger(port) || port <= 0) throw new Error('PORT inválida')
  return port
}

export const env = {
  HOST: readHost(process.env.HOST),
  PORT: readPort(process.env.PORT)
} as const