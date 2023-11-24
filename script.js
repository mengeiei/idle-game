let points = 0;
let upgradeCost = 10;
let pointsPerClick = 1;

document.getElementById('points').textContent = points;
document.getElementById('upgradeCost').textContent = upgradeCost;

document.getElementById('clickme').addEventListener('click', function() {
 points += pointsPerClick;
 document.getElementById('points').textContent = points;
});

document.getElementById('upgrade').addEventListener('click', function() {
 if (points >= upgradeCost) {
    points -= upgradeCost;
    pointsPerClick += 1;
    upgradeCost *= 2;
    document.getElementById('points').textContent = points;
    document.getElementById('upgradeCost').textContent = upgradeCost;
 }
});
