import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
    firstName: {required: true, type: String},
    lastName: {required: true, type: String},
    dateOfBirth: {required: true, type: Date},
    active: {type: Boolean, default: true},
    team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team'},
    createdAt: {type: Date, default: Date.now},
    createdBy: {type: String, required: true},
    updatedAt: {type: Date, default: null},
    updatedBy: {type: String, default: null}
})

const Player = mongoose.model("Player", playerSchema);
export default Player;