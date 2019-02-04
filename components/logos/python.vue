<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" version="1">
    <defs>
      <linearGradient id="c">
        <stop offset="0" stop-color="#b8b8b8" stop-opacity=".498" />
        <stop offset="1" stop-color="#7f7f7f" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="a">
        <stop offset="0" stop-color="#ffd43b" />
        <stop offset="1" stop-color="#ffe873" />
      </linearGradient>
      <linearGradient id="b">
        <stop offset="0" stop-color="#5a9fd4" />
        <stop offset="1" stop-color="#306998" />
      </linearGradient>
      <linearGradient
        id="e"
        x1="150.961"
        x2="112.031"
        y1="192.352"
        y2="137.273"
        gradientTransform="matrix(2.56272 0 0 2.58746 -65.492 -51.623)"
        gradientUnits="userSpaceOnUse"
        xlink:href="#a"
      />
      <linearGradient
        id="d"
        x1="26.649"
        x2="135.665"
        y1="20.604"
        y2="114.398"
        gradientTransform="matrix(2.56272 0 0 2.58746 -65.492 -51.623)"
        gradientUnits="userSpaceOnUse"
        xlink:href="#b"
      />
    </defs>
    <path id="snake2" style="opacity: 0;" fill="url(#d)" d="M252.99 1.692c-20.881.097-40.822 1.878-58.368 4.983-51.69 9.132-61.074 28.245-61.074 63.494v46.552h122.147v15.518H87.708c-35.5 0-66.584 21.337-76.307 61.928-11.215 46.526-11.713 75.559 0 124.14 8.683 36.162 29.418 61.928 64.917 61.928h41.997v-55.807c0-40.316 34.883-75.879 76.307-75.879h122.004c33.962 0 61.074-27.963 61.074-62.07V70.169c0-33.103-27.926-57.97-61.074-63.494-20.983-3.493-42.754-5.08-63.636-4.983zm-66.056 37.442c12.617 0 22.92 10.471 22.92 23.347 0 12.83-10.303 23.205-22.92 23.205-12.662 0-22.92-10.375-22.92-23.205 0-12.876 10.258-23.347 22.92-23.347z" transform="translate(-.006 -1.688)" />
    <path id="snake1" style="opacity: 0;" fill="url(#e)" d="M392.933 132.239v54.24c0 42.052-35.652 77.445-76.307 77.445H194.622c-33.42 0-61.074 28.603-61.074 62.07v116.31c0 33.103 28.785 52.574 61.074 62.07 38.665 11.37 75.742 13.425 122.004 0 30.752-8.903 61.074-26.82 61.074-62.07v-46.552H255.695v-15.517h183.079c35.499 0 48.728-24.762 61.073-61.928 12.753-38.262 12.21-75.057 0-124.14-8.773-35.34-25.529-61.928-61.073-61.928zm-68.619 294.548c12.662 0 22.92 10.375 22.92 23.205 0 12.876-10.258 23.348-22.92 23.348-12.617 0-22.92-10.472-22.92-23.348 0-12.83 10.303-23.205 22.92-23.205z" transform="translate(-.006 -1.688)" />
    <animate
      xlink:href="#snake1"
      attributeType="CSS"
      begin="500ms"
      from="0"
      to="1"
      dur="250ms"
      attributeName="opacity"
      fill="freeze"
    />
    <animate
      xlink:href="#snake2"
      attributeType="CSS"
      begin="0s"
      from="0"
      to="1"
      dur="1s"
      attributeName="opacity"
      fill="freeze"
    />
  </svg>
</template>
<script>
import logos from '~/mixins/logos.js'
export default {
  mixins: [logos]
}
</script>
