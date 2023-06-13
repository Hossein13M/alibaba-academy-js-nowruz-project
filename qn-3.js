function calculateAge(birthday) {
    const birthDate = new Date(birthday);
    const now = new Date();
    const currentTime = now.getTime() - birthDate.getTime();
    const currentAge = now.getFullYear() - birthDate.getFullYear();
    const days = Math.floor(currentTime / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30);
    const weeks = Math.floor(days / 7);
 console.log("days:"+days,"months:"+months, "weeks:"+weeks);
  }
  
  calculateAge('1999-09-26');
  