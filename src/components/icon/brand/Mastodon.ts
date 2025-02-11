import Icon from "../Icon.ts";

export class Mastodon extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M23.27 5.31c-.35-2.57-2.62-4.6-5.3-5C17.5.24 15.78 0 11.8 0h-.03C7.8 0 6.95.24 6.5.3 3.88.7 1.5 2.53.92 5.14a15.7 15.7 0 0 0-.26 4c.07 1.88.09 3.75.26 5.61.12 1.24.33 2.47.62 3.68.55 2.24 2.78 4.1 4.96 4.86a13.41 13.41 0 0 0 8.04.17c.59-.19 1.27-.4 1.78-.76a.06.06 0 0 0 .02-.04v-1.8a.05.05 0 0 0-.02-.05.05.05 0 0 0-.05 0 20.28 20.28 0 0 1-4.7.54c-2.73 0-3.47-1.29-3.68-1.82a5.6 5.6 0 0 1-.32-1.43.05.05 0 0 1 .07-.06c1.52.36 3.07.55 4.63.55l1.13-.01c1.57-.05 3.22-.13 4.76-.42l.11-.03c2.44-.46 4.76-1.92 5-5.6l.02-1.67c0-.51.17-3.63-.02-5.55zm-3.75 9.2h-2.56V8.29c0-1.3-.55-1.98-1.67-1.98-1.23 0-1.85.8-1.85 2.35v3.4H10.9v-3.4c0-1.56-.62-2.35-1.85-2.35-1.11 0-1.67.67-1.67 1.98v6.22H4.82V8.1a4.6 4.6 0 0 1 1.01-3.13 3.53 3.53 0 0 1 2.74-1.16c1.31 0 2.3.5 2.97 1.5l.63 1.06.64-1.06c.66-1 1.65-1.5 2.96-1.5 1.13 0 2.04.4 2.74 1.16a4.57 4.57 0 0 1 1.01 3.12z"/></svg>`
        ).node);
    }
}
