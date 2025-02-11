import {DocumentComponent} from "@cldn/components";

export abstract class Page extends DocumentComponent {
    protected constructor(public readonly title: string) {
        super();
    }

    public abstract match(url: URL): boolean;

    public abstract open(): Promise<void>;
}
