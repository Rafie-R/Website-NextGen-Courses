
    const searchInput = document.getElementById("mentorSearch");
    const mentors = document.querySelectorAll(".mentor-item");

    searchInput.addEventListener("keyup", function () {

        let keyword = searchInput.value.toLowerCase();

        mentors.forEach(function(mentor){

            let text = mentor.innerText.toLowerCase();

            if(text.includes(keyword)){
                mentor.style.display = "block";
            }else{
                mentor.style.display = "none";
            }

        });

    });
