import {model, Schema} from 'mongoose'

const TimeSchema = new Schema ({
    trainerName: {type: String},
    team: [{name: String}]
})

export default model('Team', TimeSchema)