const distractions = [
  "youtube.com",
  "twitch.tv",
  "reddit.com",
  "instagram.com",
  "checkboxrace.com",
  "onesquareminesweeper.com",
  "puginarug.com",
  "hooooooooo.com",
  "potatoortomato.com",
  "mondrianandme.com",
  "longdogechallenge.com",
  "facebook.com",
  "hackertyper.com",
  "onefishstudio.net",
  "cat-bounce.com",
  "pointerpointer.com",
  "ffffidget.com",
  "trypap.com",
  "smashthewalls.com",
  "thezen.zone",
  "creativetechguy.com",
  "tiktok.com",
  "discord.com/app",
  "4chan.org",
  "digg.com",
  "quora.com",
  "news.google.com",
  "myspace.com",
  "hulu.com",
  "netflix.com",
  "tumblr.com",
  "twitter.com",
  "vimeo.com",
  "en.wikipedia.org/wiki/Special:Random",
  "agar.io",
  "diep.io",
  "imgur.com",
  "imdb.com",
  "deviantart.com",
  "theonion.com",
  "soundcloud.com",
  "rottentomatoes.com",
  "ebay.com",
  "craigslist.org",
  "amazon.com",
  "foxnews.com",
  "buzzfeed.com",
  "cnet.com",
  "bleacherreport.com",
  "espn.com",
  "foxsports.com",
  "cbssports.com",
  "mlb.com",
  "nfl.com",
  "nhl.com",
  "nba.com",
  "techcrunch.com",
  "mashable.com",
  "engadget.com",
  "medium.com",
  "techmeme.com",
  "news.ycombinator.com",
  "wattpad.com",
];

chrome.webRequest.onBeforeRequest.addListener(
  function () {
    let queryOptions = { active: true, lastFocusedWindow: true };
    chrome.tabs.query(queryOptions, ([tab]) => {
      if (chrome.runtime.lastError) console.error(chrome.runtime.lastError);
      // `tab` will either be a `tabs.Tab` instance or `undefined`.
      tabToKeep = tab;
      chrome.tabs.getAllInWindow(tabToKeep.windowId, function (tabs) {
        chrome.tabs.remove(
          tabs.map((tab) => tab.id).filter((tabId) => tabId !== tabToKeep.id)
        );
      });
    });
    return {
      redirectUrl:
        "https://" +
        distractions[Math.floor(Math.random() * distractions.length)],
    };
  },
  {
    urls: ["<all_urls>"],
    types: [
      "main_frame",
      "sub_frame",
      "stylesheet",
      "script",
      "image",
      "object",
      "xmlhttprequest",
      "other",
    ],
  },
  ["blocking"]
);
