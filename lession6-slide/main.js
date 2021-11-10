//load xong hình mới chạy
window.addEventListener("load",function(){
    const slider     = document.querySelector(".slider");
    const sliderMain = document.querySelector(".slider-main");
    const sliderItems = document.querySelectorAll(".slider-item")
    const nextBtn = document.querySelector(".slider-next");
    const prevBtn = document.querySelector(".slider-prev");
    const dotItems = document.querySelectorAll(".slide-dot-item")
    const slidesItemWidth = sliderItems[0].offsetWidth;
    const slidesLength = sliderItems.length;
    let postionX = 0;
    let index =0;
    nextBtn.addEventListener("click", function(){
        handleChangeSlide(1);
    });
    
    prevBtn.addEventListener("click", function(){
        handleChangeSlide(-1);
    });

    [...dotItems].forEach((item) =>
       item.addEventListener("click", function(e) {
        [...dotItems].forEach(el => el.classList.remove("active"));
        e.target.classList.add("active");

        const sliderIndex =parseInt(e.target.dataset.index);//chuyển thành số nguyên( string )
        index= sliderIndex;//click vào cái dot nào dẽ gán vào index
        postionX = -1*index*slidesItemWidth;
        sliderMain.style = `transform: translateX(${postionX}px)`;
    })
    )

    function handleChangeSlide(direction){
        if(direction === 1){
            if(index >= slidesLength-1){
              index = slidesLength -1;
              return;
            } 
            postionX = postionX - slidesItemWidth;
            sliderMain.style = `transform: translateX(${postionX}px)`;
             index++; //vị trí item
        }else if(direction === -1){
           if(index <= 0) {
            index = 0;
            return;
           }
           postionX =postionX + slidesItemWidth;
           sliderMain.style = `transform: translateX(${postionX}px)`;
             index--;
        }
       [...dotItems].forEach((item) => el.classList.remove("active"));
       dotItems[index].classList.add("active") ;
    }
});
