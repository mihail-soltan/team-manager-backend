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

export async function getActiveTeams(req, res) {
    try {
        const teams = await Team.find({ active: true });
        res.status(200).json(teams);
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export async function getOneTeam(req, res){
    try {
        const team = await Team.findById(req.params.id);
        res.status(200).json(team);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function postTeam(req, res) {
    try {
        // const { name, createdBy } = req.body;
        const team = new Team(req.body);
        const newTeam = await team.save();
        res.status(201).json(newTeam);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function updateTeam(req, res) {
    try {
        const team = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(team);
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message });
    }
}

export async function toggleTeamActiveState(req, res) {
    try {
        const { updatedBy } = req.body;
        const team = await Team.findById(req.params.id);
        if (team.active) {
            team.active = false;
            team.updatedAt = Date.now();
            team.updatedBy = updatedBy;
            await team.save();
            res.json({ message: "Team has been deactivated" })
        }
        else {
            team.active = true;
            team.updatedAt = Date.now();
            team.updatedBy = updatedBy;
            await team.save()
            res.json({ message: "Team has been activated" })
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message });
    }
}