// const isAdmin = (event) => {
//     const userId = JSON.parse(sessionStorage.getItem('user'))._id;

//     return event.admin._id === userId;
// }

// export default isAdmin;


// const isAdmin = (event) => {
//     // Retrieve the user from session storage
//     const user = sessionStorage.getItem('user');
//     if (!userId) {
//         console.error('No user found in session storage.');
//         return false;
//     }

//     // Parse the user object and extract the userId
//     let userId;
//     try {
//         userId = JSON.parse(user)._id;
//     } catch (error) {
//         console.error('Failed to parse user from session storage.', error);
//         return false;
//     }

//     // Check if event and event.admin are valid objects
//     if (!event || !event.admin || !event.admin._id) {
//         console.error('Invalid event structure.', event);
//         return false;
//     }

//     // Return true if the event's admin ID matches the user's ID
//     return event.admin._id === userId;
// }

// export default isAdmin;

const isAdmin = (event) => {
    // Retrieve the user from session storage
    const user = sessionStorage.getItem('user');

    // Check if the user is null
    if (!user) {
        console.error('No user found in session storage.');
        return false;
    }

    // Declare userId outside the try-catch block
    let userId;
    try {
        // Parse the user object and extract the userId
        userId = JSON.parse(user)._id;
    } catch (error) {
        console.error('Failed to parse user from session storage.', error);
        return false;
    }

    // Check if event and event.admin are valid objects
    if (!event || !event.admin || !event.admin._id) {
        console.error('Invalid event structure.', event);
        return false;
    }

    // Return true if the event's admin ID matches the user's ID
    return event.admin._id === userId;
}

export default isAdmin;

