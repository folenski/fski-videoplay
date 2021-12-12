# fski-videoautoplay

## Fonctionnalité

- Permet d'ajouter une fonction d'autoplay sur les vidéos, lorsque l'utilisateur laisse sa souris sur une vidéo un temps donné.

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
import { VideoAutoPlay } from "fski-videoplay";

VideoAutoPlay.bind();
```

Sur la page html, il est nécessaire d'indiquer l'attribut "data-videoplay" avec le nombre de secondes souhaité avant son déclenchement si la souris reste sur la vidéo

```html
          <video controls preload='none' data-videoplay='2'>
              <source src='video/SampleVideo_360x240_1mb.mp4' type='video/mp4'>
          </video>
```

## Resources

## License
[MIT](LICENSE)