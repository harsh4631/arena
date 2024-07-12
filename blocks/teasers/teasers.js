export default function decorate(block){
    function getteaserData(block){

        // console.log("bye");
        const[main,subcard]=block.children;

        const maintitle = main?.textContent.trim();
        const image123 = subcard.querySelector('picture');
        const[subtitle,subdescription] = subcard.querySelectorAll('p')
        const pretitle = subtitle?.textContent.trim();
        const description1 = Array.from(subdescription?[subdescription]:[]).map((p) => p.outerHTML).join('');
        // const description1 = subcard?.textContent.trim();
        console.log("hello",description1);
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
       <div class="img">
       ${teaserData.image123 ? teaserData.image123.outerHTML : ''}
       </div>
       ${teaserData.pretitle ? `<p class="pre">${teaserData.pretitle}</p>` : ''}
       <div class="des">
       ${teaserData.description1 ? `${teaserData.description1}` : ''}
      </div>
       </div>
    </div>
    `;
    block.innerHTML = teasertitle;
}

