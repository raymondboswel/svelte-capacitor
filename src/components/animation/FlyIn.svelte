<script>
  import { quintOut } from "svelte/easing";
  import { fly } from "svelte/transition";
</script>

<article
  in:fly={{
    delay: 300,
    duration: 300,
    x: 300,
    opacity: 0,
    easing: quintOut,
  }}
  
>
  <slot />
</article>
