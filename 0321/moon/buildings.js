
createBuildings(document.getElementById('skyline1'), 60, 5);
//createBuildings(document.getElementById('skyline2'),60,4);
//createBuildings(document.getElementById('skyline3'),40,3);

function createBuildings(skyline, size, z_index) {
    let w = window.innerWidth;
    
    while (w > size * 2) {
        let step=parseInt(size/10);
        let ranW = Math.floor((0.5 + Math.random()))*step;
        let ranH =Math.floor((0.5 + Math.random() * 1.5))*step;
        let ranOffset = Math.floor((Math.random() - 0.5))*step;
        let building = document.createElement('span');
        building.setAttribute("class", "building");
        building.style.width = ranW + 'px';
        building.style.height = ranH + 'px';
        building.style.marginRight = ranOffset + 'px';
        building.style.zIndex = z_index;
        skyline.appendChild(building);

        w -= (ranW + ranOffset);
    }
    skyline.querySelector('.building').style.marginRight=w/2;
}
function createWindows(building) {

}