export default function decorate(block){
    function getbannerData(block){
        const[bannerimg , bannerpara, bannerdes, descbanner, listbanner] = block.children;

        const dispimg = bannerimg.querySelector('picture');

        const predisp = bannerpara.querySelector('p');

        const dese1 = bannerdes.querySelector('p');

        // const [onedesc,bantwo] = descbanner.querySelectorAll('p');

        // const nexadesc = bannerpara.querySelector('p');

        const prenexa = predisp?.textContent.trim();

        const scrolnexa = Array.from(dese1 ? [dese1]:[]).map ((p) =>p.outerHTML).join('');

        // const descnexa = Array.from(nexadesc ? [nexadesc]:[]).map ((p) =>p.outerHTML).join('');

        const des1 = descbanner?.textContent.trim();

        const des2 = listbanner?.textContent.trim();

        // console.log("bye",des2);

        return{
            dispimg,
            prenexa,
            scrolnexa,
            des1,
            des2
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
    ${bannernexa.des1 ? `<p class = "ds1">${bannernexa.des1}</p>` : ''}

    ${bannernexa.des2 ? `<p class ="ds2">${bannernexa.des2}</p>` : ''}
    </div>

    <div class="black-bar"></div>

    
    <div class="white-section"></div>
    
    
 </div>



    

    `;
    block.innerHTML = htmlbanner;



}

// const section = document.getElementsByClassName('destwo').querySelector('.block.destwo');
//             for (let i = 1; i <= 10; i++) {
//                 const p = document.createElement('p');
//                 p.textContent = `Additional content line ${i}`;
//                 section.appendChild(p);
//             }