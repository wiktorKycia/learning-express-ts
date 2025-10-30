import express, { Express, NextFunction, Request, Response } from 'express'
import path from 'path'

const app: Express = express()

// middleware:
app.use('/static', express.static(path.join(__dirname, '..', '/static')))

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(req.path)
    next()
})

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '..', 'static', 'index.html'))
})

app.listen(3000, () => {
    console.log('App is running on http://localhost:3000')
})
