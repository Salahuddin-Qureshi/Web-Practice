document.addEventListener('DOMContentLoaded', function () {
    const count = document.querySelector('.count');
    const plusBtn = document.querySelector('.plus');
    const minusBtn = document.querySelector('.minus');

    let counter = 0;

    // Increment counter
    plusBtn.addEventListener('click', function() {
        counter++;
        count.textContent = counter;
    });

    // Decrement counter
    minusBtn.addEventListener('click', function() {
        if (counter > 0) {
            counter--;
            count.textContent = counter;
        }
    });
});
