module.exports = (Franz) => {
  function getMessages() {
    var unreadCount = 0;
    $.each($('[data-qa-has-unreads]'), (idx, item) => unreadCount += parseInt(item.attributes["data-qa-has-unreads"].value, 10));

    Franz.setBadge(unreadCount, 0);
  }

  Franz.loop(getMessages);
};
