const redirectProduct = (from, entity_id, url) => {
    let encoded_url = encodeURIComponent(url)
    return `http://hsmoa.com/redirect?type=buyclick&from=${from}&entity_id=${entity_id}&hsuri=${encoded_url}`
}

export default redirectProduct