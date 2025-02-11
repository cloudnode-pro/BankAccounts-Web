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
    await page.open();
    body.append(page);
}

render().then();
