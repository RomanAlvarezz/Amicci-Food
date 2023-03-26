export const ajax = (props) => {
    let {url, callback} = props;

    fetch(url)
    .then(res => res.ok? res.json(): Promise.reject(res))
    .then(data => callback(data))
    .catch(err => console.log(err));
}