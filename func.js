function toast({
    title ='',
    message ='',
    type='',
    duration= 3000

}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');
       // auto re,ove 
        const timeOut = duration + 1000;
        const autoRemove = setTimeout(function() {
            main.removeChild(toast);
        }, timeOut);
       
        // remove toast when clicked 

        toast.onclick = function(e) {
            // console.log(e.target);
            if ( e.target.closest('.toast__close')){
                main.removeChild(toast);
                clearTimeout(autoRemove);
            }
        }
        const icons = {
            success: 'fa-solid fa-circle-check',
            info:'fa-solid fa-circle-info',
            warning:'fa-solid fa-triangle-exclamation',
            error:'fa-solid fa-triangle-exclamation',
        };

        const icon = icons[type];
        // toFixed lấy 2 số thập phân
        const delay = (duration /1000 ).toFixed(2);
        toast.classList.add('toast' , `toast--${type}`);
        toast.style.animation = `sliderInRight ease 0.3s, fadeOut  linear 1s ${delay}s forwards`
        toast.innerHTML =  `
            
                <div class="toast__icon">
                    <i class="${icon}"></i>
                </div>
                <div class="toast__body">
                    <h3 class="toast__title">${title}</h3>
                    <p class="toast__msg">
                        ${message}
                    </p>
                </div>
                <div class="toast__close">
                    <i class="fa-solid fa-xmark"></i>
                </div>
           
        `;
        main.appendChild(toast);
        
    }
}

// function showSuccessToast(){
                        
//     toast ({
//         title:'Thành công!',
//         message:'Bạn đã hoàn tất việc tạo Thông báo thành công!',
//         type:'success',
//         duration:3000
//     });
// }

// function showErrorToast() {

                
//     toast ({
//         title:'Thất bại ?!',
//         message:'Bạn đã hoàn tất việc tạo Thông báo thành công nhưng nó mà đỏ ?!',
//         type:'error',
//         duration:3000
//     });
// }