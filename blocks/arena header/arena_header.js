document.addEventListener("DOMContentLoaded", function() {
    // Create arena-header-wrapper div
    const arenaHeaderWrapper = document.createElement('div');
    arenaHeaderWrapper.className = 'arena-header-wrapper';

    // Create arena-header div
    const arenaHeader = document.createElement('div');
    arenaHeader.className = 'arena-header block';
    arenaHeader.setAttribute('data-block-name', 'arena-header');
    arenaHeader.setAttribute('data-block-status', 'loaded');

    // Create inner divs and p elements
    const innerDiv1 = document.createElement('div');
    const innerDiv2 = document.createElement('div');
    const p1 = document.createElement('p');
    
    innerDiv2.appendChild(p1);

    // Create button-container p elements with links
    for (let i = 0; i < 4; i++) {
        const buttonContainer = document.createElement('p');
        buttonContainer.className = 'button-container';

        const buttonLink = document.createElement('a');
        buttonLink.href = '';
        buttonLink.title = '';
        buttonLink.className = 'button';

        buttonContainer.appendChild(buttonLink);
        innerDiv2.appendChild(buttonContainer);
    }

    innerDiv1.appendChild(innerDiv2);
    arenaHeader.appendChild(innerDiv1);
    arenaHeaderWrapper.appendChild(arenaHeader);

    // Append arena-header-wrapper to body
    document.body.appendChild(arenaHeaderWrapper);
});