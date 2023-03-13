import Team from "../models/team.js";

export async function getTeams(req, res) {
    try {
        const teams = await Team.find();
        res.status(200).json(teams);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function postTeam(req, res) {
    try {
        const { name, createdBy } = req.body;
        const team = new Team({ name, createdBy });
        const newTeam = await team.save();
        res.status(201).json(newTeam);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}