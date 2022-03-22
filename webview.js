module.exports = Ferdi => {
  const getMessages = () => {
    let direct = 0;
    let indirect = 0;

    for (const element of document.querySelectorAll('.leftbar-unread-count')) {
      direct += Ferdi.safeParseInt(element.attributes['data-qa-unread-count'].value);
    }

    for (const element of document.querySelectorAll('.leftbar-section-item')) {
      if (element.attributes['data-qa-selected'] == "true") {
        indirect += 1;
      }
    }

    Ferdi.setBadge(direct, indirect);
  };

  Ferdi.loop(getMessages);
};
