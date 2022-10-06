resolvedPromise = () => {
    let resMsg = { 'message': 'delayed success!' }
    let resProm = new Promise((resolve, reject) => {
        setTimeout(() => (resolve(resMsg), 500))
    })
    return resProm
}

rejectPromise = () => {
    let rejMsg = { 'error': 'delayed exception!' }
    let rejProm = new Promise((resolve, reject) => {
        setTimeout(reject(rejMsg), 500)
    })
    return rejProm
}

resolvedPromise().then((success) => {
    console.log(success)
})

rejectPromise().catch((reject) => {
    console.error(reject)
})