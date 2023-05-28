// // import fetch from 'node-fetch';

// //const fetch = require('node-fetch');

// fetch('https://reqres.in/api/users')
//     .then((res) => {return res.json()})
//     .then((data) => 
//     {   console.log(data);
//         return data.data[0].json();}
//     )
//     .catch(error => {console.log('You have commited sins')})

// // console.log(res)

var detail = {
    name : 'Buddha',
    DOB : 2003,
    role: 'intern'
}

get_details = async () =>{
    var ans = await fetch('https://reqres.in/api/users')
    console.log('The User details are : \n\n ',await ans.json())
}

post = async () =>{
    var ans = await fetch('https://reqres.in/api/users', { 'method' : 'POST','headers' : {'Content-Type' : 'application/json'},'body' : JSON.stringify(detail)})
    console.log('The Updates User details are : \n\n',await ans.json())
}

put = async () =>{
    var ans = await fetch('https://reqres.in/api/users/1', { 'method' : 'PUT','headers' : {'Content-Type' : 'application/json'},'body' : JSON.stringify(detail)})
    console.log('The Updates User details of Id : 1 are : \n\n',await ans.json())

}

delete_things = async () =>{
    var ans = await fetch('https://reqres.in/api/users/1', { 'method' : 'DELETE'})
    console.log(await ans)

}

//fun()