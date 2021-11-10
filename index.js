function getUser() {
    const url = "https://ohh5.herokuapp.com/users"
    const result = document.getElementById("resultDiv")




    // axios({
    //     url: url,
    //     meth: "get",

    // }).then((res) => {
    //     console.log(res);
    // }).catch((err) => {

    //     console.log(err);
    // })

    //  axios({
    //     url: url,
    //     meth: "post",
    //     data={ name : name, email : email, address: address}
    // }).then((res))

    axios.get(url).then((response) => {
        // console.log(response)

        const users = response.data
        // console.log(users)
        const userList = users.map((user) => {
            return ` <tr> <td> ${user.name} </td> <td> ${user.email} </td> <td> ${user.address} </td> <td> ${user.id} </td></tr> `

        })
        result.innerHTML = ""
        result.innerHTML = userList.join("")
    })


}

getUser()
const url2 = "https://ohh5.herokuapp.com/user"



function addUser() {
    const name1 = document.getElementById("name").value
    const email = document.getElementById("email").value
    const address = document.getElementById("address").value
    const id = document.getElementById("id").value

    if (name1 === "" || email === "" || address === "" || id === "") {
        alert("Donot left empty field")

    }
    else {
        const userData = {
            name: name1,
            email: email,
            address: address,
            id: id
        }
        axios.post(url2, userData).then(() => {

            getUser();
        })
    }


}

function updateUser() {
    const url3 = "https://ohh5.herokuapp.com/user"
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const address = document.getElementById("address").value
    const id = document.getElementById("id").value

    axios.put(url3,{
        name: name1,
        email: email,
        address: address,
        id: id
    })
        .then(res => {
            this.setState({
                cat: res
            });
        })
        .catch((err) => {
            console.log(err);
        })


}

function deleteUser() {
    let id = document.getElementById('id').value
    axios.delete('https://bro-007.herokuapp.com/user/'+id)
    
    .then(function(response){
        alert(response.data)
    })
    .catch(function(error){
        console.log(error);
    })
}