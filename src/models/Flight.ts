import mongoose from 'mongoose'

interface IFlight {
    company: string,
    destination: string,
    pointOfDeparture: string,
    startDate: Date,
    startTime: string,
    arrivingTime: string,
    arrivingDate: Date,
    timeSpent: Date,
    seats: [Number]
}

const FlightSchema = new mongoose.Schema({
    company: String,
    destination: String,
    pointOfDeparture: String,
    startDate: Date,
    startTime: String,
    arrivingTime: String,
    arrivingDate: Date,
    timeSpent: Date,
    seats: [Number]
})

export default mongoose.model<IFlight & mongoose.Document>('Flight', FlightSchema)