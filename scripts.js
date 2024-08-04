function updateTime() {
    const now = new Date();

    // 获取当前时间和日期
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    
    // 这里可以添加农历和公历日期的计算代码
    // 例如：获取农历和公历日期

    document.getElementById('current-time').textContent = currentTime;
    // document.getElementById('lunar-date').textContent = lunarDate;
    // document.getElementById('solar-date').textContent = solarDate;
    // document.getElementById('current-hour').textContent = currentHour;
}

// 更新页面上的时间
setInterval(updateTime, 1000);
updateTime(); // 初始化时立即更新时间