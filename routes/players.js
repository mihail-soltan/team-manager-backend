import Router from "express";
import {
    getPlayers,
    getActivePlayers,
    getOnePlayer,
    postPlayer,
    updatePlayer,
    togglePlayerActiveState
} from "../controllers/players.js";

const playerRouter = Router();

playerRouter.route("/")
    .get(getPlayers)
    .post(postPlayer)

playerRouter.route("/active")
    .get(getActivePlayers)

playerRouter.route("/:id")
    .get(getOnePlayer)
    .put(updatePlayer)

playerRouter.route("/:id/active")
    .put(togglePlayerActiveState)

export default playerRouter;