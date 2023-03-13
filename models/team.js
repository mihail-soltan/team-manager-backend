import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
    name: {required: true, type: String},
    active: {type: Boolean, default: true},
    createdAt: {type: Date, default: Date.now},
    createdBy: {type: String, required: true},
    updatedAt: {type: Date, default: null},
    updatedBy: {type: String, default: null}
})

const Team = mongoose.model("Team", teamSchema);
export default Team;