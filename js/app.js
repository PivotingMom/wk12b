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
document.getElementById('activity').innerText=response.data.activity; //task 4
}

function makeActivityFailed(error){
  console.log(error);
}

document.getElementById('randomActivity').addEventListener('click', makeActivity);




//task 2
function showParticipantActivity()
        {
            var selectedValue = document.getElementById("options").value;
            console.log(selectedValue);
          showActivity(selectedValue);
        }


function showActivity(participants=1){
axios.request({
    url:"http://www.boredapi.com/api/activity",
    method:"GET",
    params: {
      participants: participants
    },
  }).then(showActivitySuccess).catch(showActivityFailed)
}

function showActivitySuccess(response){ 
console.log(response);
document.getElementById('activity').innerText=response.data.activity;
}//task 3

function showActivityFailed(error){
  console.log(error);
}

document.getElementById('tryActivity').addEventListener('click', showParticipantActivity)