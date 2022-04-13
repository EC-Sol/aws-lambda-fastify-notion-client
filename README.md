# Fastify Notion Client Server for AWS Lambda

## Dependencies

- [fastify](https://github.com/fastify/fastify)
- [aws-lambda-fastify](https://github.com/fastify/aws-lambda-fastify)
- [notion-client](https://github.com/NotionX/react-notion-x/tree/master/packages/notion-client)
- [es-main](https://github.com/tschaub/es-main)

## API description

### /notion/page/:pageId

Get recordMap from Notion docs.

response: { pageId: string, recordMap: object }


## Command

`$ npm start`: Local server start

## Deploy AWS Lambda

1. `$ zip -r ../aws-lambda-fastify-notion-client.zip *`
2. To upload a .zip file on the Lambda console 
   1. Open the Functions page on the Lambda console. 
   2. Select a function. 
   3. In the Code Source pane, choose Upload from and then .zip file. 
   4. Choose Upload to select your local .zip file. 
   5. Choose Save.
3. Setting runtime Setting on Lambda console
   1. Click edit button on Lambda console
   2. Input `lambda.handler` on Handler input. 
