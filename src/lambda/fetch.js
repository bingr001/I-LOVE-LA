import axios from "axios"
import config from "../../config"

exports.handler = function(event, context, callback) {
  const apiRoot = "https://api.unsplash.com"
  const accessKey = process.env.ACCESS_KEY || config.accessKey

  const LAEndpoint = `${apiRoot}/photos/random?client_id=${accessKey}&count=${10}&collections='3331333,2116067,1849413,1331728'`

  axios.get(LAEndpoint).then(res => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        images: res.data,
      }),
    })
  })
}