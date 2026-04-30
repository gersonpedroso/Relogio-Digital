const updateTime = () => {
    const now = new Date();
    const hour = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const timeElement = document.getElementById('time');
    timeElement.textContent = `${hour}:${minutes}:${seconds}`;
};

setInterval(updateTime, 1000);

window.addEventListener("load", updateTime);