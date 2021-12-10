# fski-videoautoplay

## Fonctionnalité

- Permet d'ajouter une fonction d'autoplay pour les vidéos

## Nagivateurs testés

Chrome | Firefox| Edge | 
--- | --- | --- | 
Latest ✔ | Latest ✔ |  Latest ✔ | 

## Installation

Using npm:

```bash
$ npm install fski-videoplay
```

## Example

Activation en js des animations
```js
import { VideoAutoPlay } from "fski-videoautoplay";

VideoAutoPlay.bind();
```

Sur la page html, il est nécessaire d'indiquer l'attribut data-videoplay avec le nombre de secondes pour son déclenchement

```html
          <video controls preload='none' data-videoplay='2'>
              <source src='video/SampleVideo_360x240_1mb.mp4' 'video/mp4'>
          </video>
```

## Resources

## License
[MIT](LICENSE)