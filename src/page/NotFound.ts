import {Page} from "./Page.ts";

export default class NotFound extends Page {
    public constructor() {
        super("BankAccounts - 404");
        this.text("Page not found");
    }

    public override match(url: URL): boolean {
        return true;
    }

    public override async open(): Promise<void> {}
}
