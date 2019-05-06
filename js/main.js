(function() {
    getAuthorization();
    const buttonEl = document.querySelector(`button`);
    buttonEl.addEventListener(`click`, createOrder);
})();

function getAuthorization() {
    Trello.authorize({
        type: 'popup',
        name: 'Getting Started Application',
        scope: {
            read: 'true',
            write: 'true' },
        expiration: 'never',
    });
}

function createOrder(e) {
    e.preventDefault();
    const ORDER_LIST_ID = '5ccfd9f8815c4b0f75edd821';

    const creationSuccess = function () {
        window.alert(`주문완료되었습니다 :)`);
    };
    const creationError = function () {
        window.alert(`주문 전송에 실패했습니다.\n다시 주문해주세요.`);
    };

    var newCard = {
        name: 'New Test Card',
        desc: 'This is the description of our new card.',
        // Place this card at the top of our list
        idList: ORDER_LIST_ID,
        pos: 'top'
    };

    window.Trello.post('/cards/', newCard, creationSuccess, creationError);
}