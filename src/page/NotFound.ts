import {Page} from "./Page.ts";

export default class NotFound extends Page {
    public constructor() {
        super("BankAccounts - 404");
        this.html`
          <main class="grid min-h-screen place-items-center bg-neutral-950 px-6 py-24 sm:py-32 lg:px-8">
            <div class="text-center">
              <p class="text-base font-semibold text-green-500">404</p>
              <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-neutral-100 sm:text-7xl">
                Page not found</h1>
              <p class="mt-6 text-lg font-medium text-pretty text-neutral-400 sm:text-xl/8">Sorry, we couldn’t
                find the page you’re looking for.</p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <a href="/" class="text-sm font-semibold text-green-500"><span aria-hidden="true">←</span> Back
                  to home</a>
              </div>
            </div>
          </main>
        `;
    }

    public override match(): boolean {
        return true;
    }

    public override async open(): Promise<void> {}
}
