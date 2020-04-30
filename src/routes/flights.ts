import { Application, Request, Response } from 'express'
import Flight from '../models/Flight'
import argon2 from 'argon2'


export default (app: Application) => {
    
    app.post('/flights/', async (req: Request, res: Response) => {
        const { 
            company,
            destination,
            pointOfDeparture,
            date, 
            token,
            startDate,
            startTime,
            arrivingTime,
            arrivingDate,
            timeSpent,
            seats
        } = req.body

        let emptySeats = []
        let i = 0
        while(i < seats){
            emptySeats.push(0)
            i += 1
        }
        try {
            let flight = await Flight.create({
                company, 
                destination, 
                pointOfDeparture, 
                startDate,
                startTime,
                arrivingTime,
                arrivingDate,
                timeSpent,
                seats: emptySeats
            })  
            return res.status(200).json(flight).end()
        } catch (err) {
            return res.status(500).json(err).end()
        }
    })

    app.get('/flights/', async (req: Request, res: Response) => {
        try{
            let flights = await Flight.find()
            return res.status(200).json(flights)
        } catch (err) {
            return res.status(500).json(err)
        }
    })

    app.put('/flights/', async (req: Request, res: Response) => {
        try {
            const flightDTO = req.body
            console.log(flightDTO)
            const flight = Flight.findByIdAndUpdate({ _id: flightDTO.id }, req.body, function(err, post) {
                if (err) return res.json(err)
                return res.json(post) 
            })
            
            // return res.json(flight).status(200)
        } catch (err) {
            return res.json(err).status(500)
        }
    })

    app.delete('/flights/:id/', async (req: Request, res: Response) => {
        try {
            const _id  = req.params.id
            const flight = Flight.findByIdAndDelete(req.params.id, req.body, function(err, post) {
                if (err) return res.json(err);
                res.json(post);
               });
            // return res.json(flight).status(200)
        } catch (err) {
            return res.json(err).status(500)
        }
    })
}