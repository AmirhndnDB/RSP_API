export default function configStartup(app, express) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static('public'));
}
//# sourceMappingURL=config.js.map