import Player from "../models/player.js";

export async function getPlayers(req, res) {
    try {
        const players = await Player.find().populate("team");
        res.status(200).json(players);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function getActivePlayers(req, res) {
    try {
        const activePlayers = await Player.find({ active: true }).populate("team");
        res.status(200).json(activePlayers);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function getOnePlayer(req, res) {
    try {
        const player = await Player.findById(req.params.id).populate("team");
        res.status(200).json(player);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function postPlayer(req, res) {
    try {
        const player = new Player(req.body);
        const newPlayer = await player.save();
        res.status(201).json(newPlayer);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function updatePlayer(req, res) {
    try {
        const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(player);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function togglePlayerActiveState(req, res) {
    try {
        const { updatedBy } = req.body;
        const player = await Player.findById(req.params.id);
        if (player.active) {
            player.active = false;
            player.updatedBy = updatedBy;
            player.updatedAt = Date.now();
            await player.save();
            res.status(200).json({ message: "Player deactivated" });
        }
        else {
            player.active = true;
            player.updatedBy = updatedBy;
            player.updatedAt = Date.now();
            await player.save();
            res.status(200).json({ message: "Player activated" });
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}