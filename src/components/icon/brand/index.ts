import {GitHub} from "./GitHub.ts";
import {Mastodon} from "./Mastodon.ts";
import {Matrix} from "./Matrix.ts";
import {Modrinth} from "./Modrinth.ts";
import {SpigotMC} from "./SpigotMC.ts";

export default class Brand {
    private constructor() {
    }

    public static readonly GitHub = new GitHub();
    public static readonly Mastodon = new Mastodon();
    public static readonly Matrix = new Matrix();
    public static readonly Modrinth = new Modrinth();
    public static readonly SpigotMC = new SpigotMC();
}
