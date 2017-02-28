const redirectSearch = (from, site, good_id, url) => {
    let encoded_url = encodeURIComponent(url)
    return `http://hsmoa.com/redirect?type=searchclick&from=${from}&site=${site}&pid=${good_id}&hsuri=${encoded_url}`
}

export default redirectSearch