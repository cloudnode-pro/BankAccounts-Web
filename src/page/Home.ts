import {Page} from "./Page.ts";
import {Component} from "@cldn/components";
import Icon from "../components/icon/Icon.ts";
import Lucide from "../components/icon/lucide";
import Brand from "../components/icon/brand";

export default class Home extends Page {
    public override match(url: URL) {
        return url.pathname === "/";
    }

    public override async open() {
    }

    public constructor() {
        super("BankAccounts");

        this.append(
            new Component("div")
                .class("min-h-screen", "bg-neutral-950")
                .html`
              <header class="fixed inset-x-0 bg-green-950">
                <div class="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-2 sm:px-6 lg:px-8">
                  <div class="flex">
                    <a class="block rounded-full text-xl/none font-bold tracking-tight text-green-300 outline-green-400 focus-visible:outline-2 focus-visible:outline-offset-4"
                            href="/">
                      BankAccounts
                    </a>
                  </div>
                  <div class="flex items-center justify-end gap-1">
                    <a class="rounded-full px-3 py-2 text-sm/none font-semibold text-green-300 outline-green-400 transition-colors hover:bg-green-900 focus-visible:outline-2 focus-visible:outline-offset-2"
                            href="https://modrinth.com/plugin/bankaccounts#download" target="_blank">
                      Download
                    </a>
                    <a class="rounded-full bg-green-400 px-3 py-2 text-sm/none font-semibold text-green-950 outline-green-400 transition-colors hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2"
                            href="/login">
                      Log in
                    </a>
                  </div>
                </div>
              </header>

              <section class="bg-green-950 pt-16">
                <div class="mx-auto max-w-7xl px-2 py-32 sm:px-6 lg:px-8">
                  <div class="grid grid-cols-2 gap-12">
                    <div class="flex flex-col gap-6">
                      <h1 class="font-display text-7xl font-black tracking-tight text-green-300 uppercase">
                        Unlock Financial Freedom in Your Virtual World
                      </h1>
                      <p class="text-lg text-green-300">
                        A Minecraft economy plugin that enables players to hold multiple bank accounts.
                      </p>
                      <div class="flex gap-3">
                        <a class="rounded-full bg-green-400 px-6 py-3 leading-none font-semibold text-green-950 outline-green-400 transition-colors hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2"
                                href="/login">
                          Log in
                        </a>
                        <a class="rounded-full px-6 py-3 leading-none font-semibold text-green-300 outline-green-400 transition-colors hover:bg-green-900 focus-visible:outline-2 focus-visible:outline-offset-2"
                                href="https://modrinth.com/plugin/bankaccounts#download" target="_blank">
                          Download
                        </a>
                      </div>
                    </div>
                    <div class="aspect-square rounded-2xl bg-green-900"></div>
                  </div>
                </div>
              </section>

              <section id="features">
                <div class="mx-auto max-w-7xl px-2 pt-16 pb-8 sm:px-6 sm:pt-24 lg:px-8 lg:pt-32">
                  <h2 class="text-base/7 font-semibold text-green-400">Features</h2>
                  <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-neutral-100">
                    All you need for seamless financial management
                  </p>
                  <dl class="mt-10 grid grid-cols-3 gap-8 text-base/7 text-neutral-300 lg:max-w-none">
                    ${this.feature(
                            "Multiple Accounts & Balances.",
                            "Manage your finances seamlessly with multiple independent bank accounts, including both personal and business accounts.",
                            Lucide.Coins
                    )}
                    ${this.feature(
                            "Transactions History.",
                            "Easily access a complete record of your account transactions, allowing you to review past payments, and manage your finances with confidence.",
                            Lucide.History,
                    )}
                    ${this.feature(
                            "Payment Requests & Invoices.",
                            "Send payment requests effortlessly and keep track of their status in real time, ensuring you get paid quickly and smoothly.",
                            Lucide.FileOutput
                    )}
                    ${this.feature(
                            "Vault Integration.",
                            "Seamlessly connect with Vault to enable full compatibility with third-party plugins.",
                            Lucide.Vault
                    )}
                    ${this.feature(
                            "POS & Bank Cards.",
                            "Create Point of Sale (POS) locations where players can sell items effortlessly. With support for bank cards, transactions are quick, secure, and hassle-free.",
                            Lucide.CreditCard
                    )}
                    ${this.feature(
                            "Customisable Settings.",
                            "Tailor your banking experience with flexible configuration options, allowing you to adjust preferences and functionality to suit your needs.",
                            Lucide.Settings
                    )}
                  </dl>
                </div>
              </section>

              <footer class="border-t border-neutral-800 bg-neutral-950">
                <div class="mx-auto max-w-7xl px-2 pt-16 pb-8 sm:px-6 sm:pt-24 lg:px-8 lg:pt-32">
                  <nav class="columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                    ${this.footerLink("Home", "/")}
                    ${this.footerLink("Log in", "/login")}
                    ${this.footerLink("Download", "https://modrinth.com/plugin/bankaccounts#download")}
                  </nav>
                  <div class="mt-16 flex justify-center space-x-10">
                    <a href="https://modrinth.com/plugin/bankaccounts" rel="me" target="_blank" class="text-neutral-400 rounded-full hover:text-neutral-300 outline-green-400 focus-visible:outline-2 focus-visible:outline-offset-8">
                      <span class="sr-only">Modrinth</span>
                      ${Brand.Modrinth.class("size-6").set("ariaHidden", "true")}
                    </a>
                    <a href="https://github.com/cloudnode-pro/BankAccounts" rel="me" target="_blank" class="text-neutral-400 rounded-full hover:text-neutral-300 outline-green-400 focus-visible:outline-2 focus-visible:outline-offset-8">
                      <span class="sr-only">GitHub</span>
                      ${Brand.GitHub.class("size-6").set("ariaHidden", "true")}
                    </a>
                    <a href="https://matrix.to/#/#bankaccounts:cloudnode.pro" rel="me" target="_blank" class="text-neutral-400 rounded-full hover:text-neutral-300 outline-green-400 focus-visible:outline-2 focus-visible:outline-offset-8">
                      <span class="sr-only">Matrix</span>
                      ${Brand.Matrix.class("size-6").set("ariaHidden", "true")}
                    </a>
                    <a href="https://mastodon.social/@cloudnode" rel="me" target="_blank" class="text-neutral-400 rounded-full hover:text-neutral-300 outline-green-400 focus-visible:outline-2 focus-visible:outline-offset-8">
                      <span class="sr-only">Mastodon</span>
                      ${Brand.Mastodon.class("size-6").set("ariaHidden", "true")}
                    </a>
                    <a href="https://www.spigotmc.org/resources/bankaccounts.112092/" rel="me" target="_blank" class="text-neutral-400 rounded-full hover:text-neutral-300 outline-green-400 focus-visible:outline-2 focus-visible:outline-offset-8">
                      <span class="sr-only">SpigotMC</span>
                      ${Brand.SpigotMC.class("size-6").set("ariaHidden", "true")}
                    </a>
                  </div>
                  <p class="mt-10 text-center text-xs leading-5 text-neutral-400">Copyright © 2025 Cloudnode OÜ. All rights reserved. The BankAccounts plugin is licensed under the <a class="font-semibold hover:text-neutral-100 outline-green-400 focus-visible:outline-2 focus-visible:outline-offset-2" href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank">GPL-3.0</a>.</p>
                  <p class="text-center text-xs leading-5 text-neutral-400">NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.</p>
                </div>
              </footer>
            `
        );
    }

    private feature(title: string, description: string, icon: Icon) {
        return new Component("div")
            .class("relative", "pl-9")
            .html`
          <dt class="inline font-semibold text-neutral-100">
            ${icon.class("absolute", "top-1", "left-1", "size-5", "text-green-500").set("ariaHidden", "true")}
            ${title}
          </dt>
          <dd class="inline">${description}</dd>
          </div>
        `;
    }

    private footerLink(name: string, link: string) {
        return new Component<HTMLAnchorElement>("a")
            .set("href", link)
            .class("text-sm", "leading-6", "text-neutral-300", "rounded-full", "hover:text-neutral-100", "outline-green-400", "focus-visible:outline-2", "focus-visible:outline-offset-4")
            .text(name)
            .context(a => {
                if (new URL(link, location.href).origin !== location.origin)
                    a.set("target", "_blank");
            });
    }
}
