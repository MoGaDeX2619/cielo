function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = (Math.random() * 5 + 5) + "s";
    snowflake.style.width = snowflake.style.height = (Math.random() * 5 + 5) + "px";
    document.body.appendChild(snowflake);
  
    setTimeout(() => {
      snowflake.remove();
    }, 10000);
  }
  
  setInterval(createSnowflake, 150);
  