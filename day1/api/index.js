// How to fetch Data from server.

function fetchDataFromServer() {
  fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then((json) => printData(json));
}



function printData(data) {
  console.log(data);
  //let ele = document.getElementById("code");
  //let tempData = data.filter((a) => a.id < 50);
  //ele.innerHTML = JSON.stringify(tempData, null, 4);
  let {limit, skip, total, users}=data
  let res = 
    users
      .map((ele) => {
        return {name: '${ele.firstName} ${ele.lastName}', age: ele.age };
      })
      .filter((ele) => ele.age>50)
      .reduce((a, b) => {
        a.age+= b.age;
        index++
      }, {age:100,index:100})
  console.log(res);
}
 
fetchDataFromServer();
