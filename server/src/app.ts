import express from 'express'
import server from './server'

const port = 3000

try {
    server.listen(port, () => {
        console.log(`Starting server on ${port}...`)
    })
} catch (err) {
    console.log(err)
    process.exit(1)
}