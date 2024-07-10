// import utility from '../../utility/utility.js';
export default function decorate(block){
    function getArena_HeaderData(block){
    const[logo, listtitle] = block.children;

     const logotitle = logo?.textContent.trim();
    //const listName = Array.from(listtitle?[listtitle]:[]).map((p) => p.outerHTML).join('');

    console.log("my current title value is+++++",logotitle);
    // console.log("my new valu is *****************",listName);


    //const logotitle=logo?.querySelector('p').textContent.trim();
    // const listName=listtitle?.textContent.trim();
    // const sublist = listtitle.querySelectorAll('p');
    // console.log("hello",sublist);



    // console.log("my name",listName);
    return {
        logotitle
        //listName
    };
    
}


const arenaData = getArena_HeaderData(block);
    // console.log(arenaData.logotitle);
    // console.log(arenaData.listName);
const areanaHtml = `
    <div class="arena_header">
    ${arenaData.logotitle ? `<h1 class = "abc">${arenaData.logotitle}</h1>` : ''}

   
    </div>
`;
    block.innerHTML = areanaHtml;
} 