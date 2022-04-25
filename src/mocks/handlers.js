import {rest} from 'msw'

export const handlers = [
    rest.get('http://url.com/temas', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                data: 'smth'
            }))
    })
]