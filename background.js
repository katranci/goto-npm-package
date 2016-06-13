function goToPackage() {
  const packageName = window.prompt('npm package name:');

  if (packageName) {
    const url = `https://www.npmjs.com/package/${packageName}`;
    chrome.tabs.create({url: url});
  }
}

chrome.browserAction.onClicked.addListener(goToPackage);
