import jobs from '../work/text'
import schools from '../education/text'

//FIND ALL JOBS W 'PRESENT' IN DATES AND PUSHES TO ARRAY
var bannerJobs = [];
jobs.find(job => {
  if(job.dates.includes("Present"))
    bannerJobs.push({text: job.title + " at " +job.company})
})

//FIND ALL JOBS W 'EXPECTED' IN DATES AND PUSHES TO ARRAY
var bannerSchools = [];
schools.find(school => {
  if(school.date.includes("Expected"))
    bannerSchools.push({text: school.degree + " Student at " + school.name})
})
//CONCATS SCHOOL AND JOBS ARRAYS
var bannerTitles = [...bannerSchools, ...bannerJobs];


const bannerTitle = "Jay Swanson"

module.exports = {bannerTitles, bannerTitle};
