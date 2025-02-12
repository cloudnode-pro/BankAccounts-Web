import {Component} from "@cldn/components";

export abstract class Page extends Component<HTMLDivElement> {
    protected constructor(public readonly title: string) {
        super("div");
    }

    public abstract match(url: URL): boolean;

    public abstract open(): Promise<void>;

    public url(): URL {
        return new URL(location.href);
    }
}
