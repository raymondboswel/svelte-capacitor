<script lang="ts">
  var name = "svelte";
  var image = "svelte_cap.png";

  import Text from "@components/Text.svelte";
import {
  modalController,
} from '@ionic/core';

import '@components/ModalGreeting';

import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { IonicShowModal, IonicShowToast } from "@utils/IonicHelper";
import Header from "@components/Header.wc.svelte";

  try {
      customElements.define(
        "modal-page",
        class extends HTMLElement {
          connectedCallback() {
            this.innerHTML = `
                <ion-header>
                <ion-toolbar>
                    <ion-title>Modal Header</ion-title>
                    <ion-buttons slot="primary">
                    <ion-button onClick="dismissModal()">
                        <ion-icon slot="icon-only" name="close"></ion-icon>
                    </ion-button>
                    </ion-buttons>
                </ion-toolbar>
                </ion-header>
                    <ion-content class="ion-padding">
                <Text></Text>
                </ion-content>`;
          }
        }
      );

  } catch(e) {}

  async function presentModal() {
    // create the modal with the `modal-page` component
/*     const modalElement = document.createElement('ion-modal');
    (modalElement as any).component = 'modal-page';
    (modalElement as any).cssClass = 'my-custom-class';

    // present the modal
    document.body.appendChild(modalElement);
    return (modalElement as any).present();
 */

    /* const popover = await modalController.create({
      component: 'simple-greeting'      
    })
 
    await popover.present();
    const {data} = await popover.onDidDismiss();
    console.log(data);
    } */

    IonicShowModal('wc-header', Header, {});
    IonicShowToast({message: "Ionic woo!"})
  }

  function wooo() {
    alert("Wooo!");
  }
</script>

<div class="main">
  <img src={image} />

  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
      <ion-card-title
        ><div class="ion-activatable ripple-parent">
          <ion-ripple-effect />Card Title
        </div></ion-card-title
      >
    </ion-card-header>

    <ion-card-content>
      Keep close to Nature's heart... and break clear away, once in awhile, and
      climb a mountain or spend a week in the woods. Wash your spirit clean.
    </ion-card-content>
  </ion-card>

  <ion-button on:click={presentModal} class="ion-activatable ripple-parent"
    ><ion-ripple-effect />Woo!</ion-button
  >
</div>

<style>
  .main {
    text-align: center;
    margin: 50px auto;
  }

  img {
    max-width: 100%;
  }
</style>
