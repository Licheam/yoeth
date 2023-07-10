export const type = 'ctx'
export const name = 'example'

export function apply({ context, config, segment })  {
    context.middleware(async (session, next) => {
        next()
        if(session.content === 'Hello') {
            session.send = 'World'
        }
    })
}