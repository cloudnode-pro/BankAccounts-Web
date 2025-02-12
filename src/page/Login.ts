import {Component} from "@cldn/components";
import Lucide from "../components/icon/lucide";
import SecurityError from "../SecurityError.ts";
import {Page} from "./Page.ts";

export default class Login extends Page {
    private readonly main = new Component("main")
        .class("flex", "min-h-screen", "flex-col", "bg-neutral-950");
    private readonly cancel = Component.from<HTMLAnchorElement>(
        `<a class="text-neutral-400 hover:text-neutral-100 block p-2 rounded-full transition-colors outline-green-400 focus-visible:outline-2 focus-visible:outline-offset-2" href="/">${new Lucide.X().class(
            "size-6")}</a>`);
    private readonly header = Component.from(`<header class="bg-neutral-950 border-b border-neutral-800">
      <div class="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-2 sm:px-6 lg:px-8">
        <div class="flex">
          <a class="block rounded-full text-xl/none font-bold tracking-tight text-white outline-green-400 focus-visible:outline-2 focus-visible:outline-offset-4" href="/">BankAccounts</a>
        </div>
        <div><slot name="cancel"></slot></div>
      </div>
    </header>`);
    private readonly mainScreen = Component.from(`<div class="flex grow items-center justify-center bg-neutral-950">
      <div class="w-xl rounded-xl bg-neutral-900 p-10 ring-1 ring-inset ring-white/5">
        <h1 class="text-center text-2xl/9 font-bold tracking-tight text-neutral-100">Welcome back!</h1>
        <p class="mt-10 font-medium text-neutral-400">To access your bank accounts, join a Minecraft server and run the following command.</p>
        ${new Component<HTMLButtonElement>("button")
        .set("id", "copy")
        .class("mt-10", "flex", "w-full", "cursor-pointer", "rounded-md", "bg-white/5", "px-3", "py-1.5", "text-white",
            "ring-1", "shadow-sm", "ring-white/10", "transition-colors", "ring-inset", "select-text",
            "hover:bg-white/10", "focus-visible:ring-2", "focus-visible:ring-green-500", "focus-visible:outline-none",
            "focus-visible:ring-inset", "sm:text-sm", "sm:leading-6")
        .text("/bank login")
        .on("click", async (_, btn) => {
            const prompt = new Component(btn.node.nextElementSibling as HTMLElement);
            prompt.text("Copying…");
            await navigator.clipboard.writeText("/bank login");
            prompt.class("hidden");
            prompt.text("Click to copy.");
            const copied = new Component("div")
                .class("mt-2", "flex", "items-center", "gap-2", "text-green-500", "opacity-0", "transition-opacity",
                    "duration-300")
                .append(new Lucide.CircleCheck()
                    .class("size-4"))
                .append(new Component("span")
                    .class("text-sm/6")
                    .text("Copied!"));
            btn.node.after(copied.node);
            setTimeout(() => copied.class("opacity-100"), 10);
            setTimeout(() => {
                copied.remove();
                prompt.removeClass("hidden");
            }, 5000);
        })}
        <label for="copy" class="block mt-2 text-sm/6 text-neutral-500">Click to copy.</label>
      </div>
    </div>`);
    private readonly authLoadingScreen = Component.from(`<div class="flex grow items-center justify-center bg-neutral-950">
      <div class="w-xl rounded-xl bg-neutral-900 p-10 ring-1 ring-inset ring-white/5 flex flex-col items-center">
        <p class="text-2xl/9 font-semibold tracking-tight text-neutral-100">Authenticating with server…</p>
        <p class="mt-4 font-medium text-neutral-400">Please wait while we authenticate your request.</p>
        <div class="mt-10 size-12 rounded-full border-2 border-neutral-700 border-r-green-500 animate-spin"></div>
      </div>
    </div>`);

    public constructor() {
        super("BankAccounts - Sign in");
        this
            .append(this.main).html`
          <footer class="py-6 bg-neutral-950 border-t border-neutral-800">
            <p class="text-center text-xs leading-5 text-neutral-400">Copyright © 2025 Cloudnode OÜ. All rights
              reserved.</p>
          </footer>
        `;
        this.cancel.slot("cancel", this.header.node);
    }

    public override match(url: URL): boolean {
        return url.pathname === "/login";
    }

    public override async open(): Promise<void> {
        this.main
            .empty()
            .append(this.header);

        const returnUrl = new URL(this.url().searchParams.get("return") ?? "/", this.url());
        if (returnUrl.protocol !== "https:" && returnUrl.protocol !== this.url().protocol)
            throw new SecurityError(`Disallowed return URL protocol ${returnUrl.protocol} in ${returnUrl.toString()}`);
        this.cancel.set("href", returnUrl.toString());

        const token = this.url().searchParams.get("token");
        if (token === null) {
            this.main.append(this.mainScreen);
            return;
        }
        this.main.append(this.authLoadingScreen);

    }
}
