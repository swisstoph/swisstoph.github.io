# swisstoph.github.io

Home page for Swisstoph Apps, served at https://swisstoph.github.io/.

- `index.html`: the home page, linking to the apps.
- `ScoreOnTheDoor/`: forwards the app's old address to its new one, https://swisstoph.github.io/BeforeYouEat/
  (`sw.js` switches off the offline copy on phones that installed the old version).
- `.well-known/assetlinks.json` (to come): proves the Android app and the website belong together.
- `.nojekyll`: tells GitHub Pages to publish folders starting with a dot, such as `.well-known`.
