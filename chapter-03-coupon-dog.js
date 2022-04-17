// Utility Functions
function fetchSubscribersFromDB(page) {
  return [
    {
      email: "john@coldmail.com",
      rec_count: 2,
    },
    {
      email: "sam@pmail.com",
      rec_count: 16,
    },
    {
      email: "linda1989@hola.com",
      rec_count: 1,
    },
    {
      email: "jan1940@ahoy.com",
      rec_count: 0,
    },
    {
      email: "mrbig@pmail.com",
      rec_count: 25,
    },
    {
      email: "lol@lol.lol",
      rec_count: 0,
    },
  ].slice(page * 2, (page * 2) + 2);
}
function fetchCouponsFromDB() {
  return [
    {
      code: "MAYDISCOUNT",
      rank: "good",
    },
    {
      code: "10PERCENT",
      rank: "bad",
    },
    {
      code: "PROMOTION45",
      rank: "best",
    },
    {
      code: "IHEARTYOU",
      rank: "bad",
    },
    {
      code: "GETADEAL",
      rank: "best",
    },
    {
      code: "ILIKEDISCOUNTS",
      rank: "good",
    },
  ];
}
function formatEmail(email) {
  return `From: ${email.from}
  To: ${email.to}
  Subject: ${email.subject}
  ------------------------
  ${email.body}`;
}

// Calculation
function subCouponRank(subscriber) {
  if (subscriber.rec_count >= 10) {
    return "best";
  } else {
    return "good";
  }
}

// Calculation
function selectCouponsByRank(coupons, rank) {
  let ret = [];
  for (let c = 0; c < coupons.length; c++) {
    let coupon = coupons[c];
    if (coupon.rank === rank) {
      ret.push(coupon.code);
    }
  }
  
  return ret;
}

// Calculation
function emailForSubscriber(subscriber, goods, bests) {
  let rank = subCouponRank(subscriber);

  if (rank === "best") {
    return {
      from: "newsletter@coupondog.co",
      to: subscriber.email,
      subject: "Your best weekly coupons inside",
      body: "Here are the best coupons: " + bests.join(', '),
    };
  } else { // rank = "good"
    return {
      from: "newsletter@coupondog.co",
      to: subscriber.email,
      subject: "Your weekly coupons inside",
      body: "Here are the coupons: " + goods.join(', '),
    };
  }
}

// Calculation
function emailsForSubscribers(subscribers, goods, bests) {
  let emails = [];
  for (let s = 0; s < subscribers.length; s++) {
    let subscriber = subscribers[s];
    let email = emailForSubscriber(subscriber, goods, bests);
    emails.push(email);
  }

  return emails;
}

// Action
function sendIssue() {
  let coupons = fetchCouponsFromDB();
  let subscribers = fetchSubscribersFromDB();

  let goodCoupons = selectCouponsByRank(coupons, "good");
  let bestCoupons = selectCouponsByRank(coupons, "best");

  let page = 0;

  while(subscribers.length > 0) {
    let emails = emailsForSubscribers(subscribers, goodCoupons, bestCoupons);

    console.log(`Sending email batch ${page + 1}`);
    for (let e = 0; e < emails.length; e++) {
      let email = emails[e];
      // send emails
      console.log(formatEmail(email));
    }

    page++;
    subscribers = fetchSubscribersFromDB(page);
  }
}