let selectedSeed = '';
let growthStage = 1;
const maxStage = 7;


function selectSeed(seed) {

    selectedSeed = seed;
    document.getElementById('seed-selection').style.display = 'none';
    document.getElementById('garden').style.display = 'block';
    document.getElementById('plant').src = `images/${seed}_stage1.png`;
    document.getElementById('bg-music').play();
}

function waterPlant() {
    document.getElementById('water-sound').play();
    if (growthStage < maxStage) {
        growthStage++;
        document.getElementById('plant').src = `images/${selectedSeed}_stage${growthStage}.png`;
        document.getElementById('plant').src = `images/${selectedSeed}_stage${growthStage}.png`;
    }
    if (growthStage === maxStage) {
        showReward();
    }
}

function showReward() {
    document.getElementById('garden').style.display = 'none';
    document.getElementById('reward').style.display = 'block';
    document.getElementById('reward-sound').play();
    const rewards = {
        rose: { message: "The rose, given to someone special!", gift: "images/rose.png" },
        tulip: { message: "A beautiful tulip that brings happiness!", gift: "images/tulip.png" },
        iris: { message: "The iris symbolizes hope and trust!", gift: "images/iris.png" }
    };
    
    document.getElementById('message').innerText = rewards[selectedSeed].message;
    document.getElementById('gift').src = rewards[selectedSeed].gift;

    const messages2 = [
        "May your happiness bloom like a flower!", 
        "You did it! May you find endless happiness!", 
        "Your flower has grown, just like your dreams!"
        ];
    document.getElementById('message2').innerText = messages2[Math.floor(Math.random() * messages2.length)];
}

function shareResult() {
    alert("ຍິນດີດ້ວຍຍຍຍ");
}
