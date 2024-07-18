export default function decorate(block){
    function getbannerData(block){
        const[bannerimg , bannerpara, bannerdes, descbanner] = block.children;

        const dispimg = bannerimg.querySelector('picture');

        const predisp = bannerpara.querySelector('p');

        const dese1 = bannerdes.querySelector('p');

        const [onedesc,two] = descbanner.querySelectorAll('p');

        // const nexadesc = bannerpara.querySelector('p');

        const prenexa = predisp?.textContent.trim();

        const scrolnexa = Array.from(dese1 ? [dese1]:[]).map ((p) =>p.outerHTML).join('');

        // const descnexa = Array.from(nexadesc ? [nexadesc]:[]).map ((p) =>p.outerHTML).join('');

        const des1 = onedesc?.textContent.trim();

        const twodes = two?.textContent.trim();

        // console.log("bye",scrolnexa);

        return{
            dispimg,
            prenexa,
            scrolnexa,
            onedesc,
            two
        };

    }
    const bannernexa = getbannerData(block);

    const htmlbanner = `
    <div class="banner-main">
    
    ${bannernexa.dispimg ? bannernexa.dispimg.outerHTML : ''}
   

    <div class="sub">
    ${bannernexa.prenexa ? `<p class = "def">${bannernexa.prenexa}</p>` : ''}
    </div>

    <div class="descone">
    ${bannernexa.scrolnexa ? `${bannernexa.scrolnexa}` : ''}
    </div>

    <div class="destwo">
    ${bannernexa.onedesc ? `${bannernexa.onedesc}` : ''}

    ${bannernexa.two ? `${bannernexa.two}` : ''}
    </div>
    
    
 </div>



    

    `;
    block.innerHTML = htmlbanner;
}