import request from 'superagent'

let baseApiURL = '//ant.fe.up.pt/api/analytics/'

let fetchData = {
  queries: function (params) {
    return request.get(baseApiURL + 'top')
  }
}

export default fetchData
