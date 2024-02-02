const getCombinePathWithLocal = (path: string, localPathCookie?: string) => {
  if (localPathCookie === 'en') {
    return `/${localPathCookie}/${path}`
  }
  return `/${path}`
}

export { getCombinePathWithLocal }
