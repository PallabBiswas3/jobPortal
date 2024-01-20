function uploadJob() {
    // Get values from the form
    var jobType = document.getElementById("job-type").value;
    var jobDescription = document.getElementById("job-description").value;
    var stipend = document.getElementById("stipend").value;
    if(jobType.trim()===""|| jobDescription.trim()===""||stipend.trim()===""){alert("Provide some input value")}
    else{
    // Create a job profile HTML element
    var jobProfile = document.createElement("div");
    jobProfile.className = "job-profile";
    jobProfile.innerHTML = `
        <strong>Job Type:</strong> ${jobType}<br>
        <strong>Job Description:</strong> ${jobDescription}<br>
        <strong>Stipend:</strong> ${stipend}
        <button class="apply"> Apply Now</button>
        <button class="edit-btn" onclick="editJob(this)">Edit</button>
        <button class="delete-btn" onclick="deleteJob(this)">Delete</button>`;

    // Append the job profile to the job list
    document.getElementById("job-list").appendChild(jobProfile);}}



    function editJob(button) {
      var jobProfile = button.parentElement;
      var jobType = jobProfile.querySelector("strong:nth-child(1)");
      var jobDescription = jobProfile.querySelector("strong:nth-child(3)");
      var stipend = jobProfile.querySelector("strong:nth-child(5)");
  
      // Delete the current job profile
      jobProfile.remove();
  
      // Prompt for new data
      var newJobType = prompt("Edit Job Type:", jobType.textContent);
      var newJobDescription = prompt("Edit Job Description:", jobDescription.textContent);
      var newStipend = prompt("Edit Stipend:", stipend.textContent);
  
      // Create a new job profile element with the updated data
      var newJobProfile = document.createElement("div");
      newJobProfile.className = "job-profile";
      newJobProfile.innerHTML = `
          <strong>Job Type:</strong> ${newJobType}<br>
          <strong>Job Description:</strong> ${newJobDescription}<br>
          <strong>Stipend:</strong> ${newStipend}
          <button class="edit-btn" onclick="editJob(this)">Edit</button>
          <button class="delete-btn" onclick="deleteJob(this)">Delete</button>`;
  
      // Append the new job profile to the job list
      document.getElementById("job-list").appendChild(newJobProfile);
  }
  
  
    function deleteJob(button) {
      var jobProfile = button.parentElement;
      var userConfirm = confirm("Are you sure you want to delete the content?");
     if(userConfirm){
      jobProfile.remove();}
    else{
      alert("Deletion canceled.");
    }
    }

function updateWordCount() {
    var textarea = document.getElementById('job-description');
    var wordCount = document.getElementById('wordCount');
    
    // Get the content of the textarea
    var content = textarea.value.trim();
    
    // Split the content into words
    var words = content.split(/\s+/);
    
    // Filter out empty words (in case of multiple spaces)
    words = words.filter(function(word) {
      return word.length > 0;
    });
    
    // Update the word count
    var currentWordCount = words.length;
    var maxWordLimit = 200;
    
    wordCount.textContent = currentWordCount + '/' + maxWordLimit;
    
    // Check and trim the content if it exceeds the word limit
    if (currentWordCount > maxWordLimit) {
      textarea.value = words.slice(0, maxWordLimit).join(' ');
      wordCount.textContent = maxWordLimit + '/' + maxWordLimit;
    }
  }
  
  function deleteText() {
    var textarea = document.getElementById('job-description');
   
    var userConfirmation = confirm("Are you sure you want to delete the content?");
    var wordCount = document.getElementById('wordCount');
    var maxWordLimit = 200;
    if (userConfirmation) {
        textarea.value = ''; // Set the value to an empty string
        alert("Content deleted successfully!");
        wordCount.textContent= 0 +'/'+ maxWordLimit;
      } else {
        alert("Deletion canceled.");
        textarea.value = textarea.value;
      }}
    function deleteText1(){
      var textarea1 = document.getElementById('stipend');
      var userConfirmation = confirm("Are you sure you want to delete the content?");
      if (userConfirmation) {
        textarea1.value = ''; // Set the value to an empty string
        alert("Content deleted successfully!");}
      else {
          alert("Deletion canceled.");
          textarea1.value = textarea1.value;
        }}
      function deleteAll(){
          var textarea = document.getElementById('job-description');
          var textarea1 = document.getElementById('stipend');
          var userConfirmation = confirm("Are you sure you want to delete all of the content?");
          var wordCount = document.getElementById('wordCount');
          var maxWordLimit = 200;
          if (userConfirmation) {
              var selectElement = document.getElementById('job-type');
              selectElement.selectedIndex = 0;
              textarea.value = ''; 
              textarea1.value = '';// Set the value to an empty string
              alert("All Contents deleted successfully!");
              wordCount.textContent= 0 +'/'+ maxWordLimit;
            } else {
              alert("Deletion canceled.");
              textarea.value = textarea.value;
              textarea1.value = textarea1.value;
             }}
      // Assume todos is an array of objects with a 'category' property
// representing the type of job (internship, full-time, contract, etc.).



              


