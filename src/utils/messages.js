export const getRandomMessage = () => {
    const messages = [
        "Nope! 😆",
        "Too slow! 😂",
        "Catch me if you can! 😜",
        "Almost had me! 🤪",
        "Try again! 😛",
        "Not today! 😏",
    ];
    return messages[Math.floor(Math.random() * messages.length)];
};
