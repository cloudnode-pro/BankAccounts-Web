import Check from "./Check.ts";
import Coins from "./Coins.ts";
import CreditCard from "./CreditCard.ts";
import FileOutput from "./FileOutput.ts";
import History from "./History.ts";
import Settings from "./Settings.ts";
import Vault from "./Vault.ts";
import X from "./X.ts";

export default class Lucide {
    public static readonly Check = Check;
    public static readonly Coins = Coins;
    public static readonly CreditCard = CreditCard;
    public static readonly FileOutput = FileOutput;
    public static readonly History = History;
    public static readonly Settings = Settings;
    public static readonly Vault = Vault;
    public static readonly X = X;

    private constructor() {
    }
}
