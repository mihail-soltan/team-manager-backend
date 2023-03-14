import { Router } from "express";
import { getTeams, postTeam, updateTeam, getActiveTeams, toggleTeamActiveState, getOneTeam } from '../controllers/teams.js';

const teamRouter = Router();

teamRouter.route("/")
    .get(getTeams)
    .post(postTeam)

teamRouter.route("/active")
    .get(getActiveTeams)

teamRouter.route("/:id")
    .get(getOneTeam)
    .put(updateTeam)

teamRouter.route("/:id/active")
    .put(toggleTeamActiveState)

export default teamRouter;