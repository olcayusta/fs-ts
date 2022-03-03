import {FastifyPluginAsync} from "fastify";

const flower: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.get('/', async function (request, reply) {
        return 'Flowers route 200!'
    })
}

export default flower