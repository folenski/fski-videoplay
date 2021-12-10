(() => {
  // dist/VideoAutoPlay.js
  var VideoAutoPlay = class {
    constructor(el) {
      this._stopDemande = false;
      this._duree = 0;
      this._playtimer = -1;
      this.dureeDef = 1e3;
      this.onMouseOver = () => {
        if (!this._element)
          return;
        const el2 = this._element;
        if (this._playtimer == -1) {
          this._playtimer = window.setInterval(() => {
            el2.play();
            this._stopDemande = true;
          }, this._duree);
        } else {
          el2.play();
          this._stopDemande = true;
        }
      };
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
      this._duree = parseInt(el.dataset.videoplay) * 1e3;
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
  };

  // tests/test-app.js
  VideoAutoPlay.bind();
})();
