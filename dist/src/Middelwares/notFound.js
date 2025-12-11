export default function notFoundHandler(req, res) {
    res.status(404).json({
        message: 'Rout not found',
        data: null
    });
}
//# sourceMappingURL=notFound.js.map