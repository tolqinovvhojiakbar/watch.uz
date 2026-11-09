AETHERNE Genève — watch website (plain HTML/CSS/JS)

Open index.html in a browser. No build step needed.

index.html      page shell (header, footer)
css/style.css   all styles (colors in :root)
js/app.js       products (array P), pages and cart logic
images/         watch photos

Add a watch: add an object to the P array in js/app.js.
Change colors: edit --gold, --bg, --fg in css/style.css.

Animations: js/intro.js + the "ANIMATION" block at the end of css/style.css.
Intro length: change the 3600 in setTimeout(finishIntro,3600) in js/intro.js.
Users with "reduce motion" enabled in their OS see no animation.

Languages: switcher in the header (UZ / RU / EN). The choice is saved in the browser.
New product or new text? Add its English text as a key to D.uz and D.ru in js/i18n.js.
