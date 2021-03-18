console.log('Works fine.')

const wait = (ms = 0) =>  new Promise(resolve => setTimeout(resolve, ms));

function handleError(err) {
    console.log('Error occured:');
    console.log(err);
}

const endpoint = 'https://api.github.com/users/wesbos';
const userElement = document.querySelector('.user-data');
userElement.textContent = 'Fetching data...'

const apiPromise = fetch(endpoint);
apiPromise.then(response => {
    return response.json();
    })
    .then(async data => {
        console.log(data);
        console.log(data.name);
        console.log(data.blog);
        console.log(data.location);
        console.log(data.bio);
        await wait(2000);
        userElement.textContent = `${data.name} - ${data.bio}`;
    })
    .catch(handleError);

