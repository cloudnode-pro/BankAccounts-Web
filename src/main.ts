import Home from "./page/Home.ts";
import NotFound from "./page/NotFound.ts";
import {Component} from "@cldn/components";

const body = new Component<HTMLElement>(document.body);

const pages = [
    new Home(),
    new NotFound(),
];

async function render() {
    const url = new URL(window.location.href);
    const page = pages.find(page => page.match(url));
    document.title = page.title;
    body.empty();
    body.append(page);
    await page.open();
    if (location.hash)
        document.getElementById(location.hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
}

render().then();

document.addEventListener("click", e => {
    const link = e.target instanceof Element ? e.target.closest("a") : null;
    if (
        link === null
        || new URL(link.href).origin !== location.origin
        || !["", "_self"].includes(link.target)
        || e.ctrlKey
    ) return;
    e.preventDefault();
    history.pushState(null, "", link.href);
    render().then();
});

window.addEventListener("popstate", () => render());
