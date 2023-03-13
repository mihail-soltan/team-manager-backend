import { Router } from "express";
import { getTeams, postTeam } from '../controllers/teams.js';

const teamRouter = Router();

teamRouter.route("/")
    .get(getTeams)
    .post(postTeam)

teamRouter.route("/:id")
    .get()
    .put()
    .delete()

export default teamRouter;