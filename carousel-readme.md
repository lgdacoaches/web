# Homepage photo carousel: where the images go

The carousel is the photo block on the right of the top section of the homepage (`index.html`). It fades between photos every 5 seconds. There are no arrows or buttons. Visitors who have reduced motion turned on in their device settings see the first photo only.

## Where to put the files
Save the images in `assets/images/carousel/`, for example `carousel-1.jpg` to `carousel-4.jpg`.

## How to add them
In `index.html`, find `<div class="carousel__stage">`. It holds four `<figure class="slide">` blocks, each with a dashed placeholder. Replace each placeholder like this:

```html
<figure class="slide is-active">
  <img src="assets/images/carousel/carousel-1.jpg" alt="Describe the photo" width="1200" height="900">
</figure>
<figure class="slide">
  <img src="assets/images/carousel/carousel-2.jpg" alt="Describe the photo" width="1200" height="900" loading="lazy">
</figure>
```

- Only the first slide has `is-active`. Keep it that way.
- The first image loads straight away. Add `loading="lazy"` to the others, as above.
- Write a short `alt` description for each photo (for screen readers). Never leave it empty.

## Image restrictions
- **Shape:** landscape, 4:3 (for example 1200 × 900 px). The photo area is about 560 × 420 px on desktop and full width × 300 px on phones. Photos are cropped to fill it, never stretched.
- **Safe area:** crops differ between desktop and phones, so keep faces and the main action in the middle of the photo, at least 10% in from every edge.
- **Size:** minimum 1200 px wide, at most 1600 px wide. This keeps them sharp on high-resolution screens.
- **File weight:** aim for under 300 KB each (four photos load on the homepage). Use JPG or WebP; do not use PNG for photos.
- **No text or logos baked in:** they will be cropped on some screens.
- **File names:** lowercase, no spaces (for example `u14-finals-day.jpg`).
- **Permission:** only use photos of players where the club's Photography Guidelines have been followed and parents or carers have given consent.

## Number of photos
The design uses 4. You can use 3 to 6. Add or remove a `<figure class="slide">` for each photo, and keep the same number of `<span></span>` dots inside `<div class="dots">` (the first dot has `class="is-active"`). The dots are only an indicator and cannot be clicked.

## Timing
Change `5000` (milliseconds) near the top of `js/main.js` to speed up or slow down the fade.
