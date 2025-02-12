export default class SecurityError extends Error {
    public override readonly name = SecurityError.name;
    public constructor(message: string) {
        super(message);
    }
}
