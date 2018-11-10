const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const fs = require('fs');

app.use(bodyParser.json())

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Access-Token");
  res.header("Access-Control-Expose-Headers", "*");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
// app.use(devMiddleware)
// app.use(hotMiddleware)

app.get('/router.json', (req,res) => {
  let data = fs.readFileSync(`${__dirname}/../dist/bundle.js`,'utf-8')
  res.send(data)
})
app.get('/components', (req,res) => {
  let data = fs.readFileSync(`${__dirname}/../dist/bundle.js`,'utf-8')
  res.send(data)
})
// 单vue文件打包
// app.get('/router.json', (req,res) => {
//   let data = fs.readFileSync(`${__dirname}/bundle.js`,'utf-8')
//   res.send(data)
// })
// app.get(/.vue$/,(req,res) => {
//   let vue = fs.readFileSync(`${__dirname}/page/insure.js`,'utf-8')
//   res.send(insure)
// })

const map = {
  'address': 'address',
  'address-full': 'address-full',
  'button': 'button',
  'button-group': 'buttonGroup',
  'button-question': 'buttonQuestion',
  'check-sex': 'checkSex',
  'check-sex-row': 'checkSexRow',
  'check-yesno': 'checkYesno',
  'hidden': 'hidden',
  'input': 'input',
  'input-btn': 'inputBtn',
  'input-camera': 'inputCamera',
  'input-txt': 'inputTxt',
  'select': 'select',
  'text': 'text',
  'textarea': 'textarea',
  'title': 'title',
  'date': 'date',
  'nextStep': 'nextStep',
  'button_groupRow': 'buttonGroupRow',
  'yesno': 'yesnoRow',
  'text': 'textRow',
  'inputRow': 'inputRow',
  'select': 'selectRow',
  'date': 'dateRow',
  'address': 'addressRow',
  'checkList': 'checkList',
  'view-plan': 'view-plan',
}

app.get('/query', (req, res) => {
  const name = req.query.component
  res.set({ 'Content-Type': 'text/javascript' })
  res.send(fs.readFileSync(`${__dirname}/../dist/static/js/${map[name]}.js`,'utf-8'))
})

app.get('/actions', (req, res) => {
  const name = req.query.component
  res.set({ 'Content-Type': 'application/json' })
  res.send(fs.readFileSync(`${__dirname}/../dist/json/actions.json`,'utf-8'))
})

app.get('/load', (req, res) => {
  const id = req.query.id
  res.set({ 'Content-Type': 'application/json' })
  let model = "{}", value = "{}"

  try {
    model = fs.readFileSync(`${__dirname}/../dist/json/${id}.json`,'utf-8')
    value = fs.readFileSync(`${__dirname}/../dist/static/temp/${id}.json`,'utf-8')
  } catch (e) {}

  res.send(JSON.stringify({ id, model: JSON.parse(model), value: JSON.parse(value) }))
})

function save(id, value) {
  fs.writeFileSync(`${__dirname}/../dist/static/temp/${id}.json`, JSON.stringify(value), 'utf-8')
}

/**
 * === << Request Body >> ====
 * 
 * {
 *    "id": "pageId",
 *    "query": "queryStrings",
 *    "value": "{formValues}"
 * }
 */

 /**
  * === << Response Body >> ===
  * 
  * {
  *   "status": "200/302",
  *   "id": "pageId",
  *   "model": "{formModels}",
  *   "value": "{formValues}"
  * }
  */

app.post('/action/next-step', (req, res) => {
  const steps = {
    'adduser': 'makeplan',
    'makeplan': 'sales',
    'sales': 'viewplan'
  }

  save(req.body.id, req.body.value)

  res.set({'Access-Control-Allow-Headers': 'application/json'})
  res.set({'Access-Control-Allow-Origin': '*'})
  res.set({'Content-Type': 'application/json'})

  res.send(JSON.stringify({
    status: '302',
    id: steps[req.body.id]
  }))
})

app.post('/action/plan/choose', (req, res) => {
  save(req.body.id, req.body.value)

  res.set({'Access-Control-Allow-Headers': 'application/json'})
  res.set({'Access-Control-Allow-Origin': '*'})
  res.set({'Content-Type': 'application/json'})

  res.send(JSON.stringify({
    status: '302',
    id: 'chooseplan'
  }))
})

app.post('/action/plan/save', (req, res) => {
  save(req.body.id, req.body.value)

  res.set({'Access-Control-Allow-Headers': 'application/json'})
  res.set({'Access-Control-Allow-Origin': '*'})
  res.set({'Content-Type': 'application/json'})

  res.send(JSON.stringify({
    status: '302',
    id: 'makeplan'
  }))
})


app.get('*', function(req, res) {
  res.send('没有数据');
});

app.listen('1235')
console.log('服务器开启');
