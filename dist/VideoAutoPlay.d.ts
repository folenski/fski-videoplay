/**
 * Class VideoAutoPlay pour gerer les vidéos en AutoPlay
 *
 * le 27/11 - re ecriture en typescript
 */
export declare class VideoAutoPlay {
    private _element?;
    private _stopDemande;
    private _duree;
    private _playtimer;
    dureeDef: number;
    /**
     * @param {HTMLElement} el
     */
    constructor(el: HTMLVideoElement);
    /**
     * Event sur l'entree de la souris sur la video
     */
    onMouseOver: () => void;
    /**
     * Event sur la sortie de la souris sur la video
     */
    onMouseOut: () => void;
    static bind(): Promise<any>;
}
