<script>
  import { quintOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  import FlyIn from "@components/animation/FlyIn.svelte";
  import {goto, isActive, url} from '@roxi/routify'
</script>

<FlyIn>
  <article class="p-4">
    <header class="text-center">
      <h2 class="text-lg font-bold">Create account</h2>
      <h3 class="text-md">Please enter your account details</h3>
    </header>

    <section class="mt-5 border shadow rounded-md bg-grey-100 p-2">
      <input placeholder="Name" />
      <input placeholder="Surname" />
      <input placeholder="Email address" />
      <section class="mt-4">
        <ion-button on:click="{ $goto('./')}">Back</ion-button>
        <ion-button>Create Account</ion-button>
      </section>
    </section>
  </article>
</FlyIn>
