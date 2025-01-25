async function loadGIFs() {
    try {
        const response = await fetch('gif-list.json');
        const gifList = await response.json();

        const gallery = document.getElementById('gallery');

        gifList.forEach(gif => {
            const container = document.createElement('div');
            container.className = 'gif-container';

            const img = document.createElement('img');
            img.src = `gifs/${gif}`;
            img.alt = gif;

            const button = document.createElement('button');
            button.textContent = 'Download';
            button.className = 'btn btn-primary';
            button.onclick = () => {
                const a = document.createElement('a');
                a.href = `gifs/${gif}`;
                a.download = gif;
                a.click();
            };

            container.appendChild(img);
            container.appendChild(button);
            gallery.appendChild(container);
        });
    } catch (error) {
        console.error('Error loading GIFs:', error);
    }
}

loadGIFs();