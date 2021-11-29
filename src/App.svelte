<script lang="ts">
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  import { initialize } from "@ionic/core/components";
  import { IonApp } from "@ionic/core/components/ion-app";
  import { IonButton } from "@ionic/core/components/ion-button";
  import { IonButtons } from "@ionic/core/components/ion-buttons";
  import { IonIcon } from "@ionic/core/components/ion-icon";
  import { IonCard } from "@ionic/core/components/ion-card";
  import { IonToolbar } from "@ionic/core/components/ion-toolbar";
  import { IonHeader } from "@ionic/core/components/ion-header";
  import { IonContent } from "@ionic/core/components/ion-content";
  import { IonCardHeader } from "@ionic/core/components/ion-card-header";
  import { IonCardTitle } from "@ionic/core/components/ion-card-title";
  import { IonCardSubtitle } from "@ionic/core/components/ion-card-subtitle";
  import { IonCardContent } from "@ionic/core/components/ion-card-content";
  import { IonRippleEffect } from "@ionic/core/components/ion-ripple-effect";
  import { onMount } from "svelte";

  import { defineCustomElements } from '@ionic/pwa-elements/loader';

  onMount(() => {
    initialize();

    tryDefine("ion-app", IonApp);
    tryDefine("ion-button", IonButton);
    tryDefine("ion-buttons", IonButtons); 
    tryDefine("ion-card", IonCard);
    tryDefine("ion-icon", IonIcon);
    tryDefine("ion-toolbar", IonToolbar);
    tryDefine("ion-header", IonHeader);
    tryDefine("ion-content", IonContent);
    tryDefine("ion-card-header", IonCardHeader);
    tryDefine("ion-cart-title", IonCardTitle);
    tryDefine("ion-card-subtitle", IonCardSubtitle);
    tryDefine("ion-card-content", IonCardContent);
    tryDefine("ion-ripple-effect", IonRippleEffect);


    function tryDefine(tag, impl) {
      try {
        customElements.define(tag, impl);
      } catch (error) {}
    }

    document.documentElement.classList.add('ion-ce');

    defineCustomElements(window);
  });
</script>

<ion-app>
  <Router {routes} />
</ion-app>

<style @global>
</style>
