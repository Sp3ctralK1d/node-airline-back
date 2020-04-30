import user from './user'
import flight from './flights'
import express, { Application } from 'express'

const app: Application = express()

user(app)
flight(app)

export default app
