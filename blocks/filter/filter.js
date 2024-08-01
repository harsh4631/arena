export default async function decorate(block){
    // async function getfilterData(block){

        const [pagelink] = block.children;

        const placeholder  = await placeholder();
        const homepage = pagelink?.querySelector('a')?.href || '#';

        // const pincode = `<div class ="filter-pincoce">
        // ${placeholder.pincodeId ? `<input type = "text"
        //    onkeypress="return event.charCode >= 97 &amp;&amp; event.charCode <= 122 || event.charCode >= 65 &amp;&amp; event.charCode <= 90 || event.charCode >= 48 &amp;&amp; event.charCode <= 57"
        //    class = "filter-control" placeholde="${placeholder.pincodeId}" id = "pinId" tabindex="1">`
        //    :''
        // }
        // </div>`;
        function backButton() {
            let currentUrl = window.location.href;
            currentUrl = currentUrl.substring(currentUrl, currentUrl.lastIndexOf('/'));
            return currentUrl;
        }

        function getFormHtml() {
            return `
          <div class="New">
            <div class="container">
              <ul class="cd_breadcrumb">
                <li><a href="${homepage}" class="home-icon"></a></li>
                <li><a href="${backButton()}" class="back-icon">Back</a></li>
              </ul>
            </div>
            <div class="container">
              
              <div class="search-form-wrapper">
                <form class="cd_form" id="filter_form">
                  <div class="row">
                    <div class="col-xs-12 col-md-3 form-group">
                      ${placeholder.pincode
                    ? `<input type="text" class="form-control mobileNumber valid" name="mobileNumber" maxlength="10" placeholder="${placeholder.pincode}" id="pincodenum" tabindex="1" aria-invalid="false">`
                    : ''
                }
                      <em id="pincodenum-error" class="error invalid-feedback" style="display:none;">Please enter valid Number</em>
                    </div>
                   
                    <div class="col-xs-12 col-md-3 form-group btn-group">
                    ${placeholder.searching
                    ? `<button type="button" class="btn btn--primary-solid btn-dealer" id="dealer_filter_search">${placeholder.searching}</button>`
                    : ''
                }
                    ${placeholder.clearAll
                    ? `<button type="button" class="btn btn--primary-solid btn-dealer" id="clear_filter">${placeholder.clearAll}</button>`
                    : ''
                }
                    </div>
                  </div>
                </form>
               
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="row">
                    <div class="col-sm-6"><p class="result-count">0 Total</p></div>
                    <div class="col-sm-6">
                      <ul class="pagination" id="myPager">
                        <li><a href="#" class="prev_link">«</a></li>
                        <li class="active"><a href="#" class="page_link active">1</a></li>
                        <li><a href="#" class="next_link">»</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
        }

        block.innerHTML = getFormHtml;

        // const searchButton = document.getElementById('dealer_filter_search');
        // const clearButton = document.getElementById('clear_filter');
        // const resultCount = document.querySelector('.result-count');
        // const paginationContainer = document.getElementById('myPager');


     
    
    // }
}