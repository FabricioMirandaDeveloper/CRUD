export const helpHttps = () => {
    const customFetch = (endpoint, options) => {
        const defaultHeader = {
            accept: "application/json",
        };
        const controller = new AbortController();
        options.signal = controller.signal;

        options.method = options.method || "GET";
        options.headers = options.headers
            ? { ...defaultHeader, ...options.body }
            : defaultHeader;

        options.body = JSON.stringify(options.body) || false;
        if (!options.body) delete options.body;

        console.log(options)
    };
};

const get = () => { };

const post = () => { };

const put = () => { };

const del = () => { };
