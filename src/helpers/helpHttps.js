export const helpHttps = () => {
    const customFetch = (endpoint, options) = {
        const defaultHeader = {
            accept: "application/json"
        }
    }
    const controller = new AbortController()
    options.signal = controller.signal

    options.method = options.method || "GET"
    options.headers = options.headers
    ? {...defaultHeader, ...options.body}
    : defaultHeader
}

const get = () => {

}

const post = () => {

}

const put = () => {

}

const del = () => {

}