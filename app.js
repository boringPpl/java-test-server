var express = require('express')
var child = require('child_process')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/api/test', function (req, res) {
  var b = req.body
  var temp = b.activity_no.lastIndexOf('/')
  var [path, file] = [b.activity_no.slice(0, temp), b.activity_no.slice(temp + 1)]

  child.exec(
    `rm -rf __users/${b.user_id} &&
     mkdir -p __users/${b.user_id} &&
     git clone ${b.github_repo} __users/${b.user_id} &&
     cp -R __tests/. __users/${b.user_id} &&
     java -cp .:__users/${b.user_id}/${path}:junit-4.12.jar:hamcrest-core-1.3.jar org.junit.runner.JUnitCore ${file}`,
    function (err, stdout, stderr) {
      if (!stdout) {
        return res.status(500).send(err || stderr)
      }

      res.send(stdout)
    })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
