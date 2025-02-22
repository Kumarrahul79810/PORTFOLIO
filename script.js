const btn=document.querySelector(".ShowOnMobile");
const sidebar=document.querySelector(".sidebar")
const cross=document.querySelector(".cross")
const auto_type=document.querySelector(".auto-type")

btn.addEventListener("click",()=>{
 sidebar.style.display="flex";
})
cross.addEventListener("click",()=>{
    sidebar.style.display="none";
   })


const skills=document.querySelector(".skills h5")
const skills_details=document.querySelector(".skills-detail")
const experience=document.querySelector(".experience h5")
const experience_info=document.querySelector(".experience-info")
const education=document.querySelector(".education h5")
const education_info=document.querySelector(".education-info")

skills.addEventListener("click",()=>{
    skills_details.style.display="inline"
    experience_info.style.display="none"
    education_info.style.display="none"


})
experience.addEventListener("click",()=>{
    experience_info.style.display="inline"
    skills_details.style.display="none"
    education_info.style.display="none"


})
education.addEventListener("click",()=>{
    education_info.style.display="inline"
    experience_info.style.display="none"
      skills_details.style.display="none"
})


