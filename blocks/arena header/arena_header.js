// import utility from '../../utility/utility.js';
export default function decorate(block){
    function getArena_HeaderData(block){
    const[
        logo,
        listtitle
    ]= block.children;

    const logotitle=logo?.textContent.trim();
    const list = Array.from(listtitle?[listtitle]:[]).map((p) => p.outerHTML).join('');
  
    return {
        logotitle,
        list
    };
}


const arenaData = getArena_HeaderData(block);
const areanaHtml = `
    <div class="arena_header">
    ${arenaData.logotitle ? `<h1>${arenaData.logotitle}</h1>` : ''}
    <div class = "arena_list">
    ${arenaData.list ? `${arenaData.list}` : ''}
    </div>
    </div>
    `;
    block.innerHTML = areanaHtml;
} 