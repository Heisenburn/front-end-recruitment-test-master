document.querySelector('#moreBaconButton').addEventListener('click', () => {
  const img = document.querySelector('#baconImage');
  img.parentElement.append(img.cloneNode(true));
});

