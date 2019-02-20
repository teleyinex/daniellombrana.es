export default function({ route, params, redirect }) {
  if (params.hasOwnProperty('slug') && params.slug.indexOf('.html') >= 0) {
    return redirect(route.fullPath.replace('.html', ''))
  }
}
