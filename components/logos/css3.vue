<template>
  <svg v-observe-visibility="{callback: visibilityChanged, once: true}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
    <g id="shieldCss" style="opacity: 0;">
      <path fill="#264de4" d="M100.916 441.447L69.968 94.331h340.064L379.05 441.393 239.79 480z" />
      <path fill="#2965f1" d="M240 122.713V450.49l112.528-31.197 26.475-296.58z" />
    </g>
    <path id="css" style="opacity: 0;" d="M150 0h51.562v21.563h-30v21.562h30v21.563H150zM211.875 0h51.562v18.75h-30v3.75h30v43.125h-51.562V45.937h30v-3.75h-30zM273.75 0h51.562v18.75h-30v3.75h30v43.125H273.75V45.937h30v-3.75h-30z" />
    <g id="three" style="opacity: 0;">
      <path id="three" fill="#ebebeb" d="M240 294.025v-42.572h-99.084l3.815 42.572zM137.119 207.859H240v-42.573H133.249zM240 406.312v-44.294l-.187.05-47.413-12.802-3.03-33.954H146.632l5.965 66.845 87.206 24.209z" />
      <path id="threeRight" fill="#fff" d="M239.853 406.345l87.275-24.188.64-7.193 10.005-112.079 1.039-11.432 7.685-86.167H239.853v42.573h59.989l-3.874 43.594h-56.115v42.572h52.423l-4.942 55.213-47.481 12.816z" />
    </g>
    <animate
      id="shieldAnim"
      ref="animate"
      xlink:href="#shieldCss"
      attributeType="CSS"
      begin="indefinite"
      from="0"
      to="1"
      dur="250ms"
      attributeName="opacity"
      fill="freeze"
    />
    <animate
      id="threeAnim"
      xlink:href="#three"
      attributeType="CSS"
      begin="shieldAnim.end"
      from="0"
      to="1"
      dur="250ms"
      attributeName="opacity"
      fill="freeze"
    />
    <animate
      xlink:href="#css"
      attributeType="CSS"
      begin="threeAnim.end"
      from="0"
      to="1"
      dur="250ms"
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
