export default function decorate(block){
    function getbannerData(block){
        const[bannerimg , bannerpara, bannerdes, descbanner] = block.children;

        const dispimg = bannerimg.querySelector('picture');

        const predisp = bannerpara.querySelector('p');

        const dese1 = bannerdes.querySelector('p');

        const nexadesc = descbanner.querySelector('p');

        // const nexadesc = bannerpara.querySelector('p');

        const prenexa = predisp?.textContent.trim();

        const scrolnexa = Array.from(dese1 ? [dese1]:[]).map ((p) =>p.outerHTML).join('');

        const descnexa = Array.from(nexadesc ? [nexadesc]:[]).map ((p) =>p.outerHTML).join('');

        // console.log("bye",scrolnexa);

        return{
            dispimg,
            prenexa,
            scrolnexa,
            descnexa
        };

    }
    const bannernexa = getbannerData(block);

    const htmlbanner = `
    <div class="banner-main">
       <div class="banner-img">
       ${bannernexa.dispimg ? bannernexa.dispimg.outerHTML : ''}
      </div>

         <div class="banner-sub">
         ${bannernexa.prenexa ? `<p class = "def">${bannernexa.prenexa}</p>` : ''}

          <div class="banner-descone">
          ${bannernexa.scrolnexa ? `${bannernexa.scrolnexa}` : ''}
          </div>

           <div class="banner-destwo">
          ${bannernexa.descnexa ? `${bannernexa.descnexa}` : ''}
          </div>

         </div>


    </div>

    `;
    block.innerHTML = htmlbanner;
}