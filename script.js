document.getElementById('addAlarmButton').addEventListener('click', function() {
    let time = prompt("Gib die Uhrzeit für den Wecker ein (HH:MM):");
    if(time) {
        addAlarm(time);
    }
});

function addAlarm(time) {
    let alarmElement = document.createElement('div');
    alarmElement.textContent = `Wecker gesetzt für: ${time}`;
    alarmElement.classList.add('alarm');

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Löschen';
    deleteButton.onclick = function() {
        this.parentNode.remove();
    };

    alarmElement.appendChild(deleteButton);
    document.getElementById('alarmsList').appendChild(alarmElement);
}
