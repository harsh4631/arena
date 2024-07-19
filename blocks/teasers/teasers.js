export default function decorate(block){
    function getteasercardData(block){
        const[toparea,bottomarea]=block.children;

        const mainheading = toparea?.textContent.trim();
        const imague = bottomarea.querySelector('picture');
        const [belowtitle , belowdes] = bottomarea.querySelectorAll('p');
        const viewtitle = belowtitle?.textContent.trim();
        const viewdesc = Array.from(belowdes?[belowdes]:[]).map((p) => p.outerHTML).join('');

        console.log("hello",viewdesc);
        return{
            mainheading,
            imague,
            viewtitle,
            viewdesc
        };

    }
    const teascarData = getteasercardData(block);
    
    block.innerHTML = htmlteaser;
}