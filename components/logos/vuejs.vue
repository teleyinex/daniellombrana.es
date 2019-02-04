<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path id="v1" fill="#4dba87" d="M315.12 34.299L256 136.699l-59.12-102.4H0L256 477.7 512 34.3z" style="opacity: 0;" />
    <path id="v2" fill="#435466" d="M315.12 34.299L256 136.699l-59.12-102.4H102.4L256 300.339 409.6 34.3z" style="opacity: 0;" />
    <animate
      xlink:href="#v1"
      attributeType="CSS"
      begin="1s"
      from="0"
      to="1"
      dur="250ms"
      attributeName="opacity"
      fill="freeze"
    />
    <animate
      xlink:href="#v2"
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
