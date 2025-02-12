import {Component} from "@cldn/components";

export default class SecurityError extends Error {
    private static readonly description = new Component("p")
        .class("font-medium", "text-neutral-300");

    private static readonly stack = new Component("pre")
        .class("mt-4", "overflow-auto", "rounded-md", "bg-neutral-900", "p-2", "text-sm", "text-neutral-200", "ring-1", "ring-white/5", "ring-inset", "select-all");

    private static readonly screen = Component.from(`<div class="flex min-h-screen flex-col items-center justify-between bg-neutral-950">
  <header class="py-6">
    <a href="/" target="_self" class="rounded-full text-center text-xl/none font-bold tracking-tight text-white outline-green-400 focus-visible:outline-2 focus-visible:outline-offset-4">BankAccounts</a>
  </header>
  <div class="flex w-full max-w-lg flex-col gap-4">
    <div class="flex w-full flex-col items-center gap-8 rounded-xl bg-neutral-900 p-8 ring-1 ring-white/5 ring-inset">
      <div class="rounded-full bg-red-950 p-3 text-red-400">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="size-8" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zM12 8v4M12 16h.01" /></svg>
      </div>
      <h1 class="text-center text-2xl/9 font-semibold tracking-tight text-neutral-100">A security error occurred</h1>
      <slot name="description"></slot>
    </div>
    <details class="group">
      <summary class="flex cursor-pointer items-center gap-2 text-neutral-500">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="size-5 group-open:rotate-90" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
        <span class="text-sm font-medium">Show stack trace</span>
      </summary>
      <slot name="stack"></slot>
    </details>
  </div>
  <footer class="py-3">
    <p class="text-center text-xs leading-5 text-neutral-400">Copyright © 2025 Cloudnode OÜ. All rights reserved.</p>
  </footer>
</div>
`);

    static {
        this.description.slot("description", this.screen.node);
        this.stack.slot("stack", this.screen.node);
    }

    public override readonly name = SecurityError.name;

    public constructor(message: string) {
        super(message);
    }

    public screen() {
        SecurityError.description.text(this.message);
        SecurityError.stack.text(this.toString() + ("stack" in this ? "\n" + this.stack : ""));
        return SecurityError.screen;
    }
}
