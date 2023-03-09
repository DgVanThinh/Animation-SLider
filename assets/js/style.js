window.addEventListener('load', function(){
    const slider = document.querySelector('#slider');
    const sliderWap = document.querySelector('.slider-wap');
    const nextBtn = document.querySelector('.slider-next');
    const prevBtn = document.querySelector('.slider-prev');
    const sliderItems = document.querySelectorAll('.slider-item');
    const dotItems = document.querySelectorAll('.slider-dot-item');
    const sliderMain = document.querySelector('.slider-main');
    const sliderItemWidth = sliderItems[0].offsetWidth;
    let sliderLength = sliderItems.length;
    let positionX = 0;
    let index = 0;
    // ====================================================
    const hotProduct = document.querySelector('#hot-product');
    const hotProductWapper = document.querySelector('.hot-product-wapper');
    const hotProductMain = document.querySelector('.hot-product-main');
    const hotProductItems = document.querySelectorAll('.hot-product-item');
    const hotItemWidth = hotProductItems[0].offsetWidth;
    const marginHotItemWidth = hotProductItems[0].style;
    console.log(marginHotItemWidth)
    let hotProductLength = hotProductItems.length;
    let positionXHotProduct = 0;
    let indexHotProduct = 0;

    // ===================================================
    nextBtn.addEventListener('click',function () {
        handleChangeSlide(1);
    });
    prevBtn.addEventListener('click',function () {
        handleChangeSlide(-1);
    });
    [ ...dotItems].forEach((item) => 
        item.addEventListener ("click", function (e){
            [ ...dotItems].forEach((el) => el.classList.remove("active"));
            e.target.classList.add("active");
            const slideIndex = parseInt(e.target.dataset.index);
            index = slideIndex;
            positionX = -1 * index * sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;

    }));

    function handleChangeSlide(direction) {
        if (direction === 1)
        {
            if ( index >= sliderLength - 1) 
            {
                index = sliderLength -1;
                return
            } 
            positionX = positionX - sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)` ;
            index ++ ;

        }
        else if (direction ===-1)
        {
            if(index <= 0) 
            {
                 index = 0;
                return ;
            }
            positionX = positionX + sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            index -- ;

        }
        [ ...dotItems].forEach((el) => el.classList.remove("active"));
        dotItems[index].classList.add('active')
    }
    function sliderMove () {
            index++;
            if(index >= sliderLength) 
            {
                index = 0 ;
            }
                positionX = index *  - sliderItemWidth;
                sliderMain.style = `transform: translateX(${positionX}px)`;
                [ ...dotItems].forEach((el) => el.classList.remove("active"));
                dotItems[index].classList.add('active')   
    }
   // AUTO-MOVE-SLIDER
    this.setInterval(sliderMove, 3000)

    function hotProductMove (){
        indexHotProduct ++ ;
        if (indexHotProduct >= hotProductLength -2)
        {
            indexHotProduct = 0;
        }
        positionXHotProduct = (indexHotProduct * - (hotItemWidth + 10))  ;
        hotProductMain.style = `transform: translateX(${positionXHotProduct}px)`;
    }
    //AUTO-MOVE-HOTPROD
    this.setInterval(hotProductMove,2000)
})