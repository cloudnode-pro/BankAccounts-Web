import {GitHub} from "./GitHub.ts";
import {Mastodon} from "./Mastodon.ts";
import {Matrix} from "./Matrix.ts";
import {Modrinth} from "./Modrinth.ts";
import {SpigotMC} from "./SpigotMC.ts";

export default class Brand {
    public static readonly GitHub = GitHub;
    public static readonly Mastodon = Mastodon;
    public static readonly Matrix = Matrix;
    public static readonly Modrinth = Modrinth;
    public static readonly SpigotMC = SpigotMC;

    private constructor() {
    }
}
