class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {

    }
    push(value) {

    }
    pop() {

    }
    isEmpty() {

    }
}

function stockPairs(stocksProfit, target) {
    // Write your code here
     const seen = new Set(); // Keep track of unique values
    const pairs = new Set(); // Keep track of unique pairs

    for (const x of stocksProfit) {
        const complement = target - x;

        // Check if complement is already seen
        if (seen.has(complement)) {
            // Add the pair to the set
            pairs.add([Math.min(x, complement), Math.max(x, complement)].toString());
        }

        // Add current value to the set
        seen.add(x);
    }

    // Return the number of distinct pairs
    return pairs.size;
}

Activity.prototype.setAmount = function (amount) {
    if (amount <= 0) {
        return false;
    } else {
        this.amount = amount;
        return true;
    }
};

Activity.prototype.getAmount = function () {
    return this.amount;
};

function Payment(amount, receiver) {
    this.setAmount(amount);
    this.setReceiver(receiver);
}

Payment.prototype = Object.create(Activity.prototype);

Payment.prototype.setReceiver = function (receiver) {
    this.receiver = receiver;
    return true;
};

Payment.prototype.getReceiver = function () {
    return this.receiver;
};

function Refund(amount, sender) {
    this.setAmount(amount);
    this.setSender(sender);
}

Refund.prototype = Object.create(Activity.prototype);

Refund.prototype.setSender = function (sender) {
    this.sender = sender;
    return true;
};

Refund.prototype.getSender = function () {
    return this.sender;
};