const emailSystem = {
  send(email) {
    console.log(`From: ${email.from}
      To: ${email.to}
      Subject: ${email.subject}
      Message:
      ${email.body}`);
  },
};

// DATA
function fetchSubscribersFromDB() {
  return [
    { email: "sam@pmail.com", recCount: 16 },
  ];
}
function fetchCouponsFromDB() {
  return [
    { code: "10PERCENT", rank: "bad" },
  ];
}

// CALCULATIONS
function subCouponRank(subscriber) {
  if (subscriber.recCount >= 10) {
    return "best";
  } else {
    return "good";
  }
}

function selectCouponsByRank(coupons, rank) {
  const ret = [];
  for (coupon in coupons) {
    if (coupon.rank === rank) {
      ret.push(coupon.code);
    }
    return ret;
  }
}

function emailForSubscriber(subscriber, goods, bests) {
  const rank = subCouponRank(subscriber);
  if (rank === "best") {
    return {
      from: "newsletter@coupondog.co",
      to: subscriber.email,
      subject: "Your best weekly coupons inside",
      body: "Here are the best coupons: " + bests.join(", "),
    };
  } else {
    return {
      from: "newsletter@coupondog.co",
      to: subscriber.email,
      subject: "Your good weekly coupons inside",
      body: "Here are the good coupons: " + goods.join(", "),
    };
  }
}

function emailsForSubscribers(subscribers, goods, bests) {
  const emails = [];
  for (subscriber in subscribers) {
    const email = emailForSubscriber(subscriber, goods, bests);
    emails.push(email);
  }
  return emails;
}

// ACTIONS
function sendIssue() {
  const coupons = fetchCouponsFromDB();
  const subscribers = fetchSubscribersFromDB();
  const goodCoupons = selectCouponsByRank(coupons, "good");
  const bestCoupons = selectCouponsByRank(coupons, "best");
  const emails = emailsForSubscribers(subscribers, goodCoupons, bestCoupons);
  for (email in emails) {
    emailSystem.send(email);
  }
}

// MAIN
function main() {
  sendIssue();
}

// APPLICATION
main();