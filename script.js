document.addEventListener('DOMContentLoaded', () => {
    // Welcome Page
    document.getElementById('yes-btn').addEventListener('click', () => {
        showPage('secret-page');
    });

    document.getElementById('no-btn').addEventListener('click', () => {
        alert("Acha? You really wanna say no to me? 🤨");
        showPage('secret-page');
    });

    // Secret Page
    document.getElementById('tell-me-btn').addEventListener('click', () => {
        showPage('game-page');
        showEnvelopeAndPlaySong(); // Show envelope and play song when entering game page
    });

    document.getElementById('no-secret-btn').addEventListener('click', () => {
        alert("Ab toh bataunga! 😏");
        showPage('game-page');
        showEnvelopeAndPlaySong(); // Show envelope and play song when entering game page
    });

    // Mini-Game Page
    const loveMeter = document.getElementById('love-meter');
    const loveLabel = document.getElementById('love-label');
    const vintageLetter = document.getElementById('vintage-letter');
    const finalePage = document.getElementById('finale-page');
    const gamePage = document.getElementById('game-page');
    const marriageProposal = document.getElementById('marriage-proposal'); // Get the marriage proposal element
    const loveSong = document.getElementById('love-song'); // Get the audio element

    loveMeter.addEventListener('input', () => {
        const value = loveMeter.value;
        if (value <= 20) {
            loveLabel.textContent = "Bas itna? 😭";
        } else if (value <= 30) {
            loveLabel.textContent = "Are hadhh hai bada na aage??";
        } else if (value <= 40) {
            loveLabel.textContent = "badhaooo cutieee sayy u likee mee 😭😭";
        } else if (value <= 50) {
            loveLabel.textContent = "SRSLYY?? Bas 50% Yha I Justt started loving u online wala 🤣🤣🤣";
        } else if (value <= 60) {
            loveLabel.textContent = "Ahh damnn bas 60??😭😢😱";
        } else if (value <= 70) {
            loveLabel.textContent = "bass thodaaaaa saa";
        } else if (value <= 90) {
            loveLabel.textContent = "Come on justt 10 moree cutieee ";
        } else {
            loveLabel.textContent = "So will u be my valentine forever??";
            
            // Show the marriage proposal for 2 seconds
            setTimeout(() => {
                marriageProposal.style.display = 'none'; // Hide the marriage proposal immediately
                gamePage.classList.remove('active');
                finalePage.classList.add('active');
                vintageLetter.classList.remove('hidden');
            }, 2000); // Show marriage proposal for 2 seconds before showing the vintage letter
        }
    });

    // Function to show the envelope and play the song automatically
    function showEnvelopeAndPlaySong() {
        const envelope = document.querySelector('.envelope');
        envelope.style.display = 'block'; // Show the envelope

        // Create a heart element
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '❤️';
        heart.style.position = 'absolute';
        heart.style.left = '50%'; // Center horizontally
        heart.style.transform = 'translateX(-50%)'; // Adjust for centering
        heart.style.bottom = '100%'; // Position it above the envelope
        heart.style.animation = 'float 1s ease-in-out forwards'; // Add animation

        // Append the heart to the envelope's parent
        envelope.parentElement.appendChild(heart);

        // Animation to make the heart float up
        setTimeout(() => {
            heart.style.bottom = '150%'; // Move the heart up
        }, 10); // Small delay to trigger the animation

        // Play the love song automatically
        loveSong.currentTime = 0; // Reset the song to the beginning
        loveSong.play(); // Play the audio
    }

    // Falling Hearts
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('falling-heart');
        heart.textContent = '❤️';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
        document.body.appendChild(heart);
    }

    // Easter Egg
    document.querySelector('.easter-egg').addEventListener('click', () => {
        alert("You found the hidden Easter Egg! 🥚");
    });

    // Function to show a specific page
    function showPage(pageId) {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById(pageId).classList.add('active');
    }
});