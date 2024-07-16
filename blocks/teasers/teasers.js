export default function decorate(block){
    function getteasercardData(block){
        const[toparea,bottomarea,desbottom]=block.children;

        const mainheading = toparea?.textContent.trim();
        const imague23 = bottomarea.querySelector('picture');
        const belowdes = desbottom.querySelector('p');
        const viewtitle = bottomarea?.textContent.trim();
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
    const htmlteaser = `
    <div class="view-teaser">
       <div class="viemain-teaser">
       ${teascarData.mainheading? `<h1>${teascarData.mainheading}</h1>` : ''}
      </div>


    <div class="viewsub-teaser">
    
    <div class="viewimg-teaser">
    ${teascarData.imague23 ? teascarData.imague23.outerHTML : ''}
    </div>
    <div class="viewpara-teaser">
    ${teascarData.viewtitle ? `${teascarData.viewtitle}` : ''}
     </div> 

     <div class="viewdes-teaser">
    ${teascarData.viewdesc ? `<p>${teascarData.viewdesc}</p>` : ''}
    </div>
    </div>
    </div>
    `;
    block.innerHTML = htmlteaser;
}