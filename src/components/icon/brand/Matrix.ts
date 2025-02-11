import Icon from "../Icon.ts";

export class Matrix extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M.63.55v22.9h1.65V24H0V0h2.28v.55zm7.04 7.26v1.16h.04c.3-.45.68-.79 1.12-1.03a3.49 3.49 0 0 1 2.98-.05c.44.21.78.58 1.02 1.11.25-.37.6-.7 1.03-1 .43-.28.95-.42 1.55-.42.45 0 .87.05 1.26.16.38.11.71.3.99.53.27.25.49.56.64.96.16.39.23.86.23 1.41v5.73H16.2v-4.85c0-.29-.01-.56-.04-.81a1.75 1.75 0 0 0-.18-.66 1.1 1.1 0 0 0-.43-.45 1.6 1.6 0 0 0-.79-.17c-.33 0-.6.07-.8.2a1.38 1.38 0 0 0-.48.5 1.95 1.95 0 0 0-.23.69 5.56 5.56 0 0 0-.06.78v4.77h-2.35v-4.8c0-.25 0-.5-.02-.75a2.07 2.07 0 0 0-.14-.69 1.05 1.05 0 0 0-.42-.5c-.2-.13-.48-.2-.85-.2a1.8 1.8 0 0 0-.97.36c-.17.14-.32.34-.44.6-.12.26-.18.6-.18 1.02v4.96H5.46V7.81zm15.7 15.64V.55h-1.65V0H24v24h-2.28v-.55z"/></svg>`
        ).node);
    }
}
