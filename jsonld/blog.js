import { person } from './person.js'

const blogLd = {
  '@context': 'http://schema.org',
  '@type': 'Blog',
  name: 'Daniel Lombraña Blog',
  url: 'https://daniellombrana.es/blog/',
  description: 'blog post',
  publisher: person
}

export { blogLd }
