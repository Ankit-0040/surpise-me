export const getRandomColor = () => {
    const colors = ["red", "blue", "green", "yellow", "purple", "pink", "orange"];
    return colors[Math.floor(Math.random() * colors.length)];
};
