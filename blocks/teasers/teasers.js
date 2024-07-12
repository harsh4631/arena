export default function decorate(block){
    function getteaserData(block){

        // console.log("bye");
        const[main,subcard]=block.children;

        const maintitle = main?.textContent.trim();
        const image123 = subcard.querySelector('picture');
        const pretitle = subcard?.textContent.trim();
        const description1 = Array.from(subcard?[subcard]:[]).map((p) => p.outerHTML).join('');

        console.log("hello",pretitle);
        return{
            maintitle,
            image123,
            pretitle,
            description1
        };
    }
    const teaserData = getteaserData(block);
    const teasertitle = `
    <div class="main-teaser">
       <div class ="main-title">
       ${teaserData.maintitle ? `<h1>${teaserData.maintitle}</h1>` : ''}
       </div>
       
       <div class="sub-teaser">
       ${teaserData.image123 ? teaserData.image123.outerHTML : ''}
       ${teaserData.pretitle ? `<p class="pre">${teaserData.pretitle}</p>` : ''}
       ${teaserData.description1 ? `<p class = "des">${teaserData.description1}</p>` : ''}
       </div>
    </div>
    `;
    block.innerHTML = teasertitle;
}

