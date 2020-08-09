// 不考虑IPV6
function getHost(url: string) {
  const regexp = /\/\/([A-Za-z0-9:.]+)\//
  const result = regexp.exec(url)[1];
  if (result.includes(":")) {
    const re = /(^[A-Za-z0-9.]+):\d+/
    const res = re.exec(result)[1]
    return res;
  }
  return result;
}

export default getHost;
