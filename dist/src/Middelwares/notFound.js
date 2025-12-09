export default function notFoundHandler(req, res) {
    res.status(404).json({
        success: false,
        message: 'Rout not found',
        data: null
    });
}
//# sourceMappingURL=notFound.js.map