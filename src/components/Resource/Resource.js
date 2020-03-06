function readableCommentCount(number) {
    switch (number) {
        case 0:
            return 'no comments yet';

        case 1:
            return 'based on 1 review';

        default:
            return `based on ${number} reviews`;
    }
}

function truncate(text) {
    const words = text.split(' ');

    if (words.length > 10) {
        return `${words.slice(0, 10).join(' ')} ...`;
    }

    return text;
}