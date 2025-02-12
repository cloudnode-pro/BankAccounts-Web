import {Component} from "@cldn/components";
import Home from "./page/Home.ts";
import Login from "./page/Login.ts";
import NotFound from "./page/NotFound.ts";
import {Page} from "./page/Page.ts";
import SecurityError from "./SecurityError.ts";

async function render(pages: Page[]) {
    const body = new Component<HTMLElement>(document.body);
    const url = new URL(window.location.href);
    const page = pages.find(page => page.match(url));
    if (page === undefined) throw new Error(`No page found for ${url.toString()}`);
    document.title = page.title;
    body.empty();
    body.append(page);
    await page.open();
    if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView(); else window.scrollTo(0, 0);
}

(async () => {
    const pages = [new Home(), new Login(), new NotFound()];

    document.addEventListener("click", async e => {
        const link: HTMLAnchorElement | null = e.target instanceof Element ? e.target.closest("a") : null;
        if (link === null || new URL(link.href).origin !== location.origin || link.target !== "" || e.ctrlKey) return;
        e.preventDefault();
        history.pushState(null, "", link.href);
        await render(pages);
    });

    window.addEventListener("popstate", () => render(pages));

    await render(pages);
})().catch(e => {
    console.error("Uncaught", e);
    const body = new Component<HTMLElement>(document.body);
    if (e instanceof SecurityError) {
        body.empty().append(e.screen());
        return;
    }
    body.empty().append(new Component("div")
        .class("p-6").html`
      <p class="text-xl font-medium">An unexpected error occurred.</p>
      <pre class="text-xs mt-6">${e instanceof Error ? e.toString() + "\n" + e.stack : e}</pre>
    `);
});
