import Coins from "./Coins.ts";
import CreditCard from "./CreditCard.ts";
import FileOutput from "./FileOutput.ts";
import History from "./History.ts";
import Settings from "./Settings.ts";
import Vault from "./Vault.ts";

export default class Lucide {
    private constructor() {
    }

    public static readonly Coins = new Coins();
    public static readonly CreditCard = new CreditCard();
    public static readonly FileOutput = new FileOutput();
    public static readonly History = new History();
    public static readonly Settings = new Settings();
    public static readonly Vault = new Vault();
}
