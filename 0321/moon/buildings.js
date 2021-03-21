
createBuildings(document.getElementById('skyline1'), 40, 5);
createBuildings(document.getElementById('skyline2'),20,4);
createBuildings(document.getElementById('skyline3'),10,3);

function createBuildings(skyline, size, z_index) {
    let w = window.innerWidth;

    while (w > size * 2) {
        let step = 8;
        let ranW = Math.floor((0.5 + Math.random()) * 0.8 * size / step) * step;
        let ranH = Math.floor((0.8 + Math.random() * 2.5) * size / step) * step;
        let ranOffset = Math.floor((Math.random() - 0.5) * size / step) * step;
        let building = document.createElement('span');
        building.setAttribute("class", "building");
        building.style.width = ranW + 'px';
        building.style.height = ranH + 'px';
        building.style.marginRight = ranOffset + 'px';
        building.style.zIndex = z_index;
        skyline.appendChild(building);

        w -= (ranW + ranOffset);
    }

    /* 마지막 채워주기 */
    let step = 8;
    let ranW = Math.floor(w/step) * step;
    let ranH = Math.floor((0.8 + Math.random() * 2.5) * size / step) * step;
    let ranOffset = 0;
    let building = document.createElement('span');
    building.setAttribute("class", "building");
    building.style.width = ranW + 'px';
    building.style.height = ranH + 'px';
    building.style.marginRight = ranOffset + 'px';
    building.style.zIndex = z_index;
    skyline.appendChild(building);
}

function createWindows(building) {

}