const updates = [
    { 
        title: "Team XYZ signs new player for Valorant roster", 
        timestamp: "2024-12-21 14:00", 
        category: "Valorant" 
    },
    { 
        title: "League of Legends Patch 13.24 released", 
        timestamp: "2024-12-21 10:30", 
        category: "League of Legends" 
    },
    { 
        title: "Counter Strike 2 introduces new map in latest update", 
        timestamp: "2024-12-20 18:45", 
        category: "Counter Strike 2" 
    }
];

const updatesContainer = document.getElementById('updates');

updates.forEach(update => {
    const updateDiv = document.createElement('div');
    updateDiv.className = 'update';

    updateDiv.innerHTML = `
        <h3>${update.title}</h3>
        <p class="timestamp">${update.timestamp}</p>
        <p><strong>Category:</strong> ${update.category}</p>
    `;

    updatesContainer.appendChild(updateDiv);
});



