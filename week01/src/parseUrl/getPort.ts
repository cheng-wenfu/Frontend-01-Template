function getPort(url: string) {
  const regexp = /:(\d+)\//
  const result = regexp.exec(url)[1]
  if (!result) {
    return ''
  }
  return result
}

export default getPort;
