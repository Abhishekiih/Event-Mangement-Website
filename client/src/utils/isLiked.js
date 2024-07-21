// const isLiked = (event) => {
//     const user = JSON.parse(sessionStorage.getItem('user'));
//     const userId = user._id;

//     return event.likes.includes(userId);
// }

// export default isLiked;

const isLiked = (event) => {
    // Retrieve the user from session storage
    const user = sessionStorage.getItem('user');

    // Check if the user is null
    if (!user) {
        console.error('No user found in session storage.');
        return false;
    }

    // Parse the user object and extract the userId
    let userId;
    try {
        userId = JSON.parse(user)._id;
    } catch (error) {
        console.error('Failed to parse user from session storage.', error);
        return false;
    }

    // Check if event.likes is a valid array
    if (!Array.isArray(event.likes)) {
        console.error('Invalid event.likes structure.', event.likes);
        return false;
    }

    // Return true if the event's likes include the user's ID
    return event.likes.includes(userId);
}

export default isLiked;
