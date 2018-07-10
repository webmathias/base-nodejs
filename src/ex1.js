let https = require("https")
module.exports = {
    get: () => {
        return new Promise((done, reject) => {
            https.get("https://jsonplaceholder.typicode.com/posts/1", (res => {
                const { statusCode } = res
                if (statusCode != 200) {
                    throw new Error(statusCode)
                }
                let body = ""
                res.on("data", data => {
                    body += data
                })
                res.on("end", () => {
                    let json = JSON.parse(body)
                    done(json)
                })
                res.on("error", (err) => {
                    reject(err)
                })
            }))
        })
    }
}
