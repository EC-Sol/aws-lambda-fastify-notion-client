import awsLambdaFastify from 'aws-lambda-fastify'
import app from './app.js'

const proxy = awsLambdaFastify(app)
// or
// const proxy = awsLambdaFastify(app, { binaryMimeTypes: ['application/octet-stream'], serializeLambdaArguments: false /* default is true */ })

export const handler = (event, context) => {
  return proxy(event, context)
}

// or
// exports.handler = (event, context, callback) => proxy(event, context, callback)
// or
// exports.handler = (event, context) => proxy(event, context)
// or
// exports.handler = async (event, context) => proxy(event, context)