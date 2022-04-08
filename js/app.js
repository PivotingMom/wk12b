//post 1

function makeActivity(){
  axios.request({
    url:"http://www.boredapi.com/api/activity/",
    method:"GET",
    headers: {
      'Content-Type': "application/json"
    },
    data: {
      "activity": "Learn Express.js",
	"accessibility": 0.25,
	"type": "education",
	"participants": 1,
	"price": 0.1,
	"link": "https://expressjs.com/",
	"key": "3943506"
    }}).then(makeActivitysuccess).catch(makeActivityFailed)
}

function makeActivitysuccess(response){
console.log(response.data.activity);
}

function makeActivityFailed(error){
  console.log(error);
}

document.getElementById('randomActivity').addEventListener('click', makeActivity);


onclick="myFunction()" 