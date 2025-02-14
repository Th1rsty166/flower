let selectedSeed = '';
let growthStage = 1;
const maxStage = 6;
document.getElementById('bg-music').play();

function selectSeed(seed) {
    selectedSeed = seed;
    document.getElementById('seed-selection').style.display = 'none';
    document.getElementById('garden').style.display = 'block';
    document.getElementById('plant').src = `images/${seed}_stage1.png`;
}

function waterPlant() {
    document.getElementById('water-sound').play();
    if (growthStage < maxStage) {
        growthStage++;
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
        rose: { message: "กุหลาบแห่งความรัก มอบให้คนพิเศษ!", gift: "images/rose.gif" },
        tulip: { message: "ทิวลิปแสนงาม นำพาความสุขมาให้!", gift: "images/tulip_gift.png" },
        iris: { message: "ไอริสสื่อถึงความหวังและความเชื่อใจ!", gift: "images/iris_gift.png" }
    };
    
    document.getElementById('message').innerText = rewards[selectedSeed].message;
    document.getElementById('gift').src = rewards[selectedSeed].gift;

    const messages2 = [
        "ขอให้ความรักของคุณเบ่งบานเหมือนดอกไม้!", 
        "คุณทำสำเร็จแล้ว! ขอให้พบแต่ความสุข!", 
        "ดอกไม้ของคุณเติบโตแล้ว เช่นเดียวกับความรักของคุณ!"
        ];
    document.getElementById('message2').innerText = messages2[Math.floor(Math.random() * messages2.length)];
}

function shareResult() {
    alert("แชร์สำเร็จ! ไปบอกเพื่อน ๆ กันเถอะ!");
}
