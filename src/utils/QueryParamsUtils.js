class QueryParamsUtils {
    static toQueryParams = (data) => {
        const queryParams =  [];
        for(let i in data) {
            QueryParamsUtils.appendQueryParams(queryParams,i,data[i])
        }
        return queryParams;
    }

    static appendQueryParams = (queryParams,key,value) => {
        return queryParams.push(encodeURIComponent(key) + '=' + encodeURIComponent(value))
    }

    static queryParamsToString = (queryParams) => {
        return queryParams.join('&');
    }

    static toObject = (queryParams) => {
        const query = new URLSearchParams(queryParams)
        const dataObject = {};
        for(let param of query.entries()) {
            dataObject[param[0]] = +param[1];
        }
        return dataObject;
    }
}

export default QueryParamsUtils;