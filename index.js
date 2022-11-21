const http = require('http')
const qs = require('querystring')
const calculator = require('./function/calculator')
 
const server = http.createServer(function(request, response) {
  console.dir(request.param)
 
  if (request.method == 'POST') {
    console.log('POST')
    var body = ''
    request.on('data', function(data) {
      body += data
    })
 
    request.on('end', function() {
      const post = qs.parse(body)
      const numbers = post.numbers
      const result = calculator.add(numbers,20)
      response.writeHead(200, {'Content-Type': 'text/html'})
      response.end('Result: ' + result)
    })
  } else {
    var html = `
    <form method="POST" action="http://localhost:3000/">
    Numbers
    <input type="text" name="Numbers"/>
    <input type="submit" name="add"/>
    <title>Hello World Simple App</title>
</form>`
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end(html)
  }
})
 
const port = 3000
const host = '127.0.0.1'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)