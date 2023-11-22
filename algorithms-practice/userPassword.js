function authEvents(events) {
  function hash(s) {
    const p = 131;
    const M = Math.pow(10, 9) + 7;
    let result = 0;
    for (let i = 0; i < s.length; i++) {
      result = (result * p + s.charCodeAt(i)) % M;
    }
    return result;
  }

  const results = [];
  let passwordHash;

  for (const event of events) {
    const eventType = event[0];
    const eventData = event[1];

    if (eventType === "setPassword") {
      passwordHash = hash(eventData);
    } else if (eventType === "authorize") {
      const attemptHash = hash(eventData);
      const appendedAttemptHash = hash(eventData + "a");
      const isSuccessful =
        passwordHash === attemptHash || passwordHash === appendedAttemptHash;
      results.push(isSuccessful ? 1 : 0);
    }
  }

  return results;
}

const events = [
  ["setPassword", "000A"],
  ["authorize", "108738450"],
  ["authorize", "108738449"],
  ["authorize", "244736787"],
];

const output = authEvents(events);
// console.log(output);  // Expected output: [0, 1, 1]

// User
// a website is programming an authentication system that will accept a password either if it's the correct password or if it's the correct password with a single character appended to it. IN this challenge, the task is to implement such a system, specifically using a hashing function. Given a list of events in which either a password is set or authorisation is attempted, determine if each authorisation attempt will be successful or not.
// the hashing function that will be used in this problem is as follows. let f(x) be a function that takes a character and returns its decimal character code in the ASCII table. For instance f('a') = 97, f('B')= 66, and f('9') = 57. Then, let h(s) be the hashing function that takes a string and hashes it in the following way, where p = 131 and M = 10 square 9 +7:
// h(s) := (stor p(n-1) + s[11+p(n-2) + s[21+p(n-3) + . + sír-21*P sin-11) mod M For instance,
//if s = "CAr1" then the formula would be as follows:
// h(s) = (f(c'*1313 + F(A1*1312 + f(ri*131 + f(17) mod
//10°* = 223691457 Your system will be tested on g event types,
//each of which will be one of the following:
//1. setPassword(s) := sets the password to s 2. authorize(x) =
//tries to sign in with integer x. This event mu return 1 if x is
//either the hash of the current password or the hash of the current password with a single character appended to it. Otherwise, this event must return O. Consider the following example. There are 6 events to be handled: 1. setPassword( cArt") 2. authorize(223691457) 3. authorize(303580761) 4. authorize(100) 5. setPassword("d") 6. authorize(100) As we know from the above example, h(cAr1") = 223691457 HILI 18 Shall

