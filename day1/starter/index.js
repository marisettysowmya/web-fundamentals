  function fetchDataFromServer() {
    fetch("https://dummyjson.com/users", { method: "GET" })
      .then((response) => response.json())
      .then((json) => dataFilter(json));
  }
  
  function dataFilter(data) {
    let { users } = data;
    users = users.filter((d) => d.age < 50);
    users.map((d) => {
      d.name = d.firstName + " " + d.lastName;
      return d;
    });
    console.log(users);
    makingCards(users);
    //   return users;
  }
  
  function makingCards(data) {
    let cardsDiv = document.getElementsByClassName("main-container")[0];
    
    data.forEach((d) => {
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card");
      const imgele = document.createElement("img");
      imgele.src = d.image;
      imgele.alt = "";
      const name = document.createElement("p");
      name.innerText = `Name: ${d.name}`;
      const Age = document.createElement("p");
      Age.innerText = `Age: ${d.age}`;
      const Phone = document.createElement("p");
      Phone.innerText = `Phone: ${d.phone}`;
      const BloodGroup = document.createElement("p");
      BloodGroup.innerText = `Blood Group: ${d.bloodGroup}`;
      const Company = document.createElement("p");
      Company.innerText = `Company: ${d.company.name}`;
      const Position = document.createElement("p");
      Position.innerText = `Position: ${d.company.title}`;
      const weight = document.createElement("p");
      weight.innerText = `Weight: ${d.weight}`;
  
      cardDiv.append(imgele);
      cardDiv.append(name);
      cardDiv.append(Age);
      cardDiv.append(Phone);
      cardDiv.append(BloodGroup);
      cardDiv.append(Company);
      cardDiv.append(Position);
      cardDiv.append(weight);
  
      cardsDiv.append(cardDiv);
    });
  }
  
  fetchDataFromServer();
  