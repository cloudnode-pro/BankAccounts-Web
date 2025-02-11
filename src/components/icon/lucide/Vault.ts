import Icon from "../Icon.ts";

export default class Vault extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="7.5" cy="16.5" r=".5" fill="currentColor"/><circle cx="16.5" cy="16.5" r=".5" fill="currentColor"/><circle cx="12" cy="12" r="2"/></svg>`
        ).node);
    }
}
