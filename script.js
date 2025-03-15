document.addEventListener('DOMContentLoaded',() =>{
    const faqContainer=document.querySelector('.faq-accordion');

    
    faqContainer.addEventListener('click',(e)=>{

        const gruopHeader= e.target.closest('.faq-dropdown-header');
        if(!gruopHeader)return;

        const group=gruopHeader.parentElement;
        const gruopbody=group.querySelector('.faq-dropdown-body');
        const icon=gruopHeader.querySelector('.faq-icon');

        icon.classList.toggle('open');
        gruopbody.classList.toggle('open');

        const otherGroups= faqContainer.querySelectorAll('.faq-dropdown');

        otherGroups.forEach((otherGroup)=>{
            if(otherGroup!==group){
            const otherGroupBody=otherGroup.querySelector('.faq-dropdown-body');
            const otherIcon=otherGroup.querySelector('.faq-icon');

            otherGroupBody.classList.remove('open')
            otherIcon.classList.remove('open');
            }
        })



    })

});