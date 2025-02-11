import Coins from "./Coins.ts";
import CreditCard from "./CreditCard.ts";
import FileOutput from "./FileOutput.ts";
import History from "./History.ts";
import Settings from "./Settings.ts";
import Vault from "./Vault.ts";

export default class Lucide {
    private constructor() {
    }

    public static readonly Coins = Coins;
    public static readonly CreditCard = CreditCard;
    public static readonly FileOutput = FileOutput;
    public static readonly History = History;
    public static readonly Settings = Settings;
    public static readonly Vault = Vault;
}
