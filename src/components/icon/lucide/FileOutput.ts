import Icon from "../Icon.ts";

export default class FileOutput extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2v4a2 2 0 0 0 2 2h4M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2"/><path d="M4.06 21a2 2 0 0 0 2 1H18a2 2 0 0 0 2-2V7l-5-5H6M5 11l-3 3"/><path d="m5 17-3-3h10"/></svg>`).node);
    }
}
