(function(){

    const buttons = document.querySelectorAll('.btn'); // Corrected selector syntax
    const storeimages = document.querySelectorAll('.store-item');

    buttons.forEach((button) => {
        button.addEventListener('click', (e) =>{
            e.preventDefault();
            
            const filter = e.target.dataset.filter;

            storeimages.forEach((item) =>{
                if (filter === 'all'){
                    item.style.display = 'block';
                } else {
                    if(item.classList.contains(filter)){ // Corrected method name
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
        
    });

})();
