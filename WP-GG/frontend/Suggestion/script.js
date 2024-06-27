// 
  // دکمه اسکرول به بالا 
  const scrollTopBtn = document.getElementById("scrollTopBtn"); 
 
  // نمایش یا مخفی کردن دکمه براساس اسکرول 
  window.onscroll = function() { 
      toggleScrollTopBtn(); 
  }; 
 
  function toggleScrollTopBtn() { 
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) { 
          scrollTopBtn.style.display = "block"; 
      } else { 
          scrollTopBtn.style.display = "none"; 
      } 
  } 
 
  // اسکرول به بالای صفحه با کلیک روی دکمه 
  scrollTopBtn.onclick = function() { 
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }; 
 
console.log("helo");
document.getElementById('plant-form').addEventListener('submit', function(event) {
event.preventDefault();
// Capture form data
const formData = new FormData(event.target);
const formProps = Object.fromEntries(formData);

// Prepare data for the API request
const requestData = {
    type: formProps['plant-type'],
    environment: formProps['environment-type'],
    light: formProps['light-level'],
    temperature: formProps['temperature'],
    humidity: formProps['humidity-level'],
    growthStage: formProps['growth-stage'],
    scent: formProps['scent'],
    season: formProps['season'],
    edible: formProps['edible'],
    harvestTime: formProps['harvest-time'],
    allergies: formProps['allergies'],
    petFriendly: formProps['pet-friendly']
};

// Send data to the API
fetch('http://localhost:3000/api/suggest-plant', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData)
})
.then(response => response.json())
.then(data => {
    console.log('Success client:', data);
    const resultDiv = document.getElementById('suggestion-result');
    let environment = "";
    let light = "";
    let temperature = "";
    console.log(data.name)
    console.log(data.imageUrl)
    if (data.name) {
    //resultDiv.innerHTML = `<p>پیشنهاد ما: ${data.name}</p>`;
        if(data.environment == "indoor"){
            environment = "داخل ساختمان";
        }else{
            environment = "بیرون از ساختمان";
        }
        if(data.light == "low"){
            light = "کم";
        }else if(data.light == "medium"){
            light = "متوسط";
        }else{
            light = "زیاد";
        }
        if(data.temperature == "cold"){
            temperature = "سرد";
        } else if (data.temperature == "moderate"){
            temperature = "متوسط";
        } else {
            temperature = "گرم";
        }
        resultDiv.innerHTML = `
                <h2>پیشنهاد ما:</h2>
                <h3><< ${data.name} >></h3>
                <h5>این گیاه باید در ${environment} نگهداری شود و دمای محل نگهداری آن ${temperature} باشد. همچنین نیازمند نور ${light} است.</h5>
                <img src="${data.imageUrl}" alt="${data.name}" />
        `;
    } else {
    resultDiv.innerHTML = `<p> گیاهی با این مشخصات یافت نشد.</p>`;
    }
})
.catch(error => {
    console.error('Error:', error);
});
});
