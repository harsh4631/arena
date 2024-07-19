export default function decorate(block){
    function getteasercardData(block){
        const[toparea, bottomarea]=block.children;

        const mainheading = toparea?.textContent.trim();

        const imague23 = bottomarea.querySelector('picture');
     
        const [belowdes,titleh1] = bottomarea.querySelectorAll('p');

        const viewtitle = titleh1?.textContent.trim();

        const viewdesc = Array.from(belowdes?[belowdes]:[]).map((p) => p.outerHTML).join('');

        console.log("hello",viewdesc);
        return{
            mainheading,
            imague23,
            viewtitle,
            viewdesc
        };

    }
    const teascarData = getteasercardData(block);
    
}