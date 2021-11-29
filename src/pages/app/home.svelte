<script>
import { Camera, CameraResultType } from "@capacitor/camera";
import FlyIn from "@components/animation/FlyIn.svelte";
let imageElement;

async function takePicture() {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri,
  });

  // image.webPath will contain a path that can be set as an image src.
  // You can access the original file using image.path, which can be
  // passed to the Filesystem API to read the raw data of the image,
  // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
  var imageUrl = image.webPath;

  // Can be set to the src of an image now
  imageElement.src = imageUrl;
}
</script>

<FlyIn>
  <article>
    <header>Quest</header>
    <section>
      <h1>Capture progress</h1>
      <div>
        <ion-button on:click={takePicture}>Take photo</ion-button>
      </div>
      <div>
        <h2>Preview</h2>
        <div>
          <img bind:this={imageElement} src="" alt="" />
        </div>
      </div>
    </section>
  </article>
</FlyIn>
