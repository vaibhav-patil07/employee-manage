const employeesData = [
    {
      id: "1",
      name: "Vibhuti Bajaj",
      profileImage: "assets/images/Vibhuti.jpg",
      introduction:
        "I like playing cricket and travelling. I'm always focused on the task which I take at hand.",
      profileLink: "https://vibhi24.github.io/Personal-Website/",
    },
    {
      id: "2",
      name: "Varun Athreya",
      profileImage: "assets/images/varun.jpg",
      introduction:
        "I am a passionate coder who loves capturing memories and exploring new places.",
      profileLink: "https://varunsathreya.github.io/contentstack-training/",
    },
    {
      id: "3",
      name: "Priya NB",
      profileImage: "assets/images/Priya.jpeg",
      introduction:
        "I'm enthusiastic to learn new things and I don't give up until i achieve it.",
      profileLink: "https://priya-nb.github.io/personalweb/index.html",
    },
    {
      id: "4",
      name: "Rangaswamy Vikas",
      profileImage: "assets/images/vikas.jpg",
      introduction:
        "I enjoy balancing my love for learning with my passion for gaming and a fit lifestyle.",
      profileLink: "https://vikasrangaswamy.github.io/portfolio/main.html",
    },
    {
      id: "5",
      name: "Deepak Chaturvedi",
      profileImage: "assets/images/deepak.png",
      introduction:
        "Believer, Dedicated. I am a curious developer that loves to convert ideas into code.",
      profileLink: "https://thedeepakchaturvedi.github.io/Portfolio/",
    },
    {
      id: "6",
      name: "Rakshitha S",
      profileImage: "assets/images/Rakshitha.jpg",
      introduction:
        "I'm passionate to meet people, learn new things. I love challenges and interested in travelling.",
      profileLink: "#",
    },
    {
      id: "7",
      name: "Kashmeera Raychoty",
      profileImage: "assets/images/Kashmeera.jpg",
      introduction: "I am a creative person and like to explore new things.",
      profileLink: "https://kashmeeraraychoty.github.io/Kashmeera-s-Portfolio/",
    },
    {
      id: "8",
      name: "Harshitha D",
      profileImage: "assets/images/Harshitha D.png",
      introduction: "I'm a partical person and like to travel and listen K-pop.",
      profileLink: "https://harshithad0703.github.io/individual_website/",
    },
    {
      id: "9",
      name: "Sanika Pareek",
      profileImage: "assets/images/sanika.jpeg",
      introduction:
        "I'm curious to learn and explore new things and like to paint.",
      profileLink:
        "https://sanikapareek-contentstack.github.io/sanika-portfolio/",
    },
    {
      id: "9",
      name: "Raj Pandey",
      profileImage: "assets/images/Raj.png",
      introduction: "Computer Engineer, Painter, Poet, Reader",
      profileLink: "https://cs-raj.github.io/pw-2/",
    },
    {
      id: "10",
      name: "Viraj Yadav",
      profileImage: "assets/images/Viraj.jpg",
      introduction:
        "I'm a sincere lunatic curious about technology and like playing cricket.",
      profileLink: "https://vikasrangaswamy.github.io/Contentstack/#",
    },
    {
      id: "11",
      name: "Faraaz Biyabani",
      profileImage: "assets/images/faraaz.webp",
      introduction:
        "I am always curious about technology and I love writing code to create purposeful things.",
      profileLink: "https://faraazb.github.io/cs-personal-website/",
    },
    {
      id: "12",
      name: "Vaibhav Patil",
      profileImage: "assets/images/Vaibhav.png",
      introduction:
        "I'm a true technophile. I love to talk about Physics and Spirituality.",
      profileLink: "https://vaibhav-patil07.github.io/portfolio/#",
    },
    {
      id: "13",
      name: "Soumik Paul",
      profileImage: "assets/images/Soumik.png",
      introduction: "2x ICPC regionalist and first runner-up at Techsurf 2022.",
      profileLink: "https://soumik43.github.io/Portfolio/",
    },
  ];

const Employee = function(id, name, profileImage, introduction, profileLink){
    this.id=id;
    this.name=name;
    this.profileImage=profileImage;
    this.introduction=introduction;
    this.profileLink=profileLink;
}


let employeeCards = employeesData.map((employee) =>  new Employee(employee.id,employee.name,employee.profileImage,employee.introduction,employee.profileLink));

const findEmployeeById = (employeesData,id)=>{
    if(employeesData.length == 0){
        console.log("No employee data found");
        return;
    }
    let result= employeesData.find( (employee) => employee.id === id);
    if(result === undefined){
        console.log(`No search result found for id ${id}`);
        return;
    }
    return result;
}

const searchEmployee = (employeesData,searchObject) =>{
    let searchKey = Object.keys(searchObject);
    if(searchKey.length < 1 || searchKey.length > 1){
        console.log("Invalid search object");
        return;
    }
    let result = employeesData.filter( (employee) => {
        return employee[searchKey[0]] == searchObject[searchKey[0]];
    })
    if(result.length == 0){
        console.log(`No search result found for ${searchObject}`);
        return;
    }
    return result;
}

const updateEmployeeById=(employeeCards, id, updateObject)=>{
    let updateKeys = Object.keys(updateObject);
    if(updateKeys.length == 0){
        console.log("Invalid update object");
        return false;
    }
    let employee=findEmployeeById(employeeCards,id);
    if(employee === undefined){
        return false;
    }
    updateKeys.forEach((updateKey)=>{
        if(updateKey == "id"){
            console.log("Warning! Id update restricted (ignoring id update).");
        }
        else{
            employee[updateKey] = updateObject[updateKey]
        }
    })
    console.log("Search result -> ",employee);
    return true;
}

const deleteEmployeeCardById = (employeeCards, id) =>{
    let index = employeeCards.findIndex( (employee)=> employee.id === id);
    if(index == -1){
        console.log(`No search result found for id ${id}`);
        return;
    }
    return employeeCards.splice(index,1);
}
let result0;

// result = findEmployeeById(employeeCards,"1");
// console.log(result0);

let result1 = searchEmployee(employeeCards, {name: "Vaibhav Patil"});
console.log(result1);

let result2=updateEmployeeById(employeeCards, "12", {id:"2",name: "Vaibhav B. Patil", introduction: "test"});
console.log(result2);
console.log(result1);


result = deleteEmployeeCardById(employeeCards,"1");
console.log(result);
// console.log(employeeCards);


