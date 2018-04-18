module.exports = (Franz) => {
  function getMessages() {
    let unreadCount = 0;
    $.each($('.cr-unread-count'), (idx, item) => unreadCount += Number(item.innerHTML));

    Franz.setBadge(unreadCount, 0);
  }

  Franz.loop(getMessages);
}
