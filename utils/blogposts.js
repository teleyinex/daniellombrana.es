function getUrl(key, locale) {
  const tmp = key.split('-')
  const date = tmp.slice(0, 3)
  const rest = tmp.slice(3)
  let href = `/blog/${date[0]}/${date[1]}/${date[2]}/${rest.join('-')}`
  if (locale === 'es') {
    href = `/es${href}`
  }
  href = href.replace('.md', '.html')
  return href
}

function isRelated(origTags, tags) {
  if (origTags && tags) {
    origTags = origTags.split(',')
    origTags = origTags.map(o => o.toLowerCase().replace(/ /g, ''))
    tags = tags.split(',')
    tags = tags.map(o => o.toLowerCase().replace(/ /g, ''))
    const res = origTags.filter(value => tags.indexOf(value) !== -1)
    console.log(res)
    if (res.length > 0) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}
export { getUrl, isRelated }
