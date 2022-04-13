import fastify from 'fastify'
import { NotionAPI } from 'notion-client'
import esMain from 'es-main'

const app = fastify()

// CORS setting
app.addHook('preHandler', (req, reply, done) => {
  reply.header("Access-Control-Allow-Origin", "*")
  done()
})

// Response JSON Serializer setting
app.setSerializerCompiler(({ schema, method, url, httpStatus }) => {
  return data => JSON.stringify(data)
})

app.get('/', (request, reply) => reply.send({ desc: 'aws lambda notion api' }))
app.route({
  method: 'GET',
  url: '/notion/page/:pageId',
  schema: {
    // request needs to have a querystring with a `name` parameter
    querystring: {
      name: { type: 'string' }
    },
    // the response needs to be an object with an `hello` property of type 'string'
    response: {
      200: {
        type: 'object',
        properties: {
          pageId: { type: 'string' },
          recordMap: { type: 'object' },
        }
      }
    }
  },
  // this function is executed for every request before the handler is executed
  preHandler: async (request, reply) => {
    // E.g. check authentication
  },
  handler: async (request, reply) => {
    const notionApi = new NotionAPI()
    const recordMap = await notionApi.getPage(request.params.pageId)

    return { pageId: request?.params?.pageId, recordMap }
  }
})

if (esMain(import.meta)) {
  // called directly i.e. "node app"
  app.listen(3000, (err) => {
    if (err) console.error(err)
    console.log('server listening on 3000')
  })
}

export default app

