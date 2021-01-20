document.querySelector('#moreBaconButton').addEventListener('click', () => {
    let img =  document.querySelector('#baconImage');
    
    img.parentElement.append(img.cloneNode(true));
});

