// Rappel: imports dataMapper + index

const storyController = {
    // Pour récupérer toutes les histoires proposées sur l'appli.
    async getAllStories(req, res, next) {
        const { result, error } = await storyDatamapper.findAll();

        // Vérification d'erreur
        if (error) {
            next(error);
        }
        else {
            res.json(result);
        }
    },

    async getAllStoriesByGenre(req, res, next) {
        const { result, error } = await storyDatamapper.findByGenre();

        // Vérification d'erreur
        if (error) {
            next(error);
        }
        else {
            res.json(result);
        }
    },

    async getAllStoriesByLevel(req, res, next) {
        const { result, error } = await storyDatamapper.findByLevel();

        // Vérification d'erreur
        if (error) {
            next(error);
        }
        else {
            res.json(result);
        }
    },

    async getOneStory(req, res, next) {
        const { result, error } = await storyDatamapper.findById(req.params.id);

    // Vérification d'erreur
    if (error) {
        next(error);
    }
    else {
        res.json(result);
        }
    }
};

export default storyController;