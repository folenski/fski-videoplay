/**
 * Class VideoAutoPlay pour gerer les vidéos en AutoPlay
 *
 * le 27/11 - re ecriture en typescript
 */
export class VideoAutoPlay {
    /**
     * @param {HTMLElement} el
     */
    constructor(el) {
        this._stopDemande = false;
        this._duree = 0; // (en ms)
        this._playtimer = -1;
        this.dureeDef = 1000;
        /**
         * Event sur l'entree de la souris sur la video
         */
        this.onMouseOver = () => {
            if (!this._element)
                return;
            const el = this._element;
            if (this._playtimer == -1) {
                this._playtimer = window.setInterval(() => {
                    el.play();
                    this._stopDemande = true;
                }, this._duree);
            }
            else {
                el.play();
                this._stopDemande = true;
            }
        };
        /**
         * Event sur la sortie de la souris sur la video
         */
        this.onMouseOut = () => {
            if (!this._element)
                return;
            if (this._stopDemande) {
                this._stopDemande = false;
                this._element.pause();
            }
            if (this._playtimer > 0) {
                window.clearInterval(this._playtimer);
                this._playtimer = 0;
            }
        };
        if (!el.dataset.videoplay)
            return;
        this._element = el;
        this._duree = parseInt(el.dataset.videoplay) * 1000;
        if (this._duree == 0)
            this._duree = this.dureeDef;
        el.addEventListener("mouseenter", this.onMouseOver);
        el.addEventListener("mouseleave", this.onMouseOut);
    }
    static async bind() {
        return Array.from(document.querySelectorAll("[data-videoplay]")).map((element) => {
            if (element instanceof HTMLVideoElement)
                return new VideoAutoPlay(element);
        });
    }
}
