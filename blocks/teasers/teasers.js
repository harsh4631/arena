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
    const htmlteaser = `
    <div class="view-teaser">
       <div class="viemain-teaser">
       ${teascarData.mainheading? `<h1>${teascarData.mainheading}</h1>` : ''}
      </div>


    <div class="viewsub-teaser">
    
    <div class="viewimg-teaser">
    ${teascarData ? teascarData.imague.outerHTML : ''}
    </div>
    <div class="viewpara-teaser">
    ${teascarData ? `<p>${teascarData.viewtitle}</p>` : ''}
     </div> 

     <div class="viewdes-teaser">
    ${teascarData ? `<p>${teascarData.viewdesc}</p>` : ''}
    </div>
    </div>
    </div>
    `;
    block.innerHTML = htmlteaser;
}