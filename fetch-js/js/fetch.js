async function getData() {
    const response = await fetch(
    'http://localhost/api/student-list.php'
    );
const data = await response.json();
console.log(data);
document.getElementById('response').innerHTML = JSON.stringify(data, null, 2);
}
async function submitData() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const data = {
        username: user,
        password: pass
    }
    const response = 
        await fetch(
        'http://localhost/api/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        });
        
        const resData = await response.json();

        console.log(resData);
};