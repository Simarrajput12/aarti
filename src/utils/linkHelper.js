import { Linking } from 'react-native';

export const openUrl = (url) => {
    Linking.canOpenURL(url)
        .then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + url);
            } else {
                return Linking.openURL(url);
            }
        })
        .catch(err => {
            console.error('An error occurred', err)
        });
}

export const openFacebookUrl = (USERNAME) => {
    const webUrl = `https://facebook.com/${USERNAME}`;
    // Use official fb scheme that deep-links to a webmodal if app is installed
    const appUrl = `fb://facewebmodal/f?href=${webUrl}`;
    Linking.canOpenURL(appUrl)
        .then(supported => {
            if (supported) {
                return Linking.openURL(appUrl);
            }
            return Linking.openURL(webUrl);
        })
        .catch(err => {
            console.error('An error occurred', err);
        });
}

export const openTwitterUrl = (USERNAME) => {
    const appUrl = `twitter://user?screen_name=${USERNAME}`;
    const webUrl = `https://twitter.com/${USERNAME}`;
    Linking.canOpenURL(appUrl)
        .then(supported => {
            if (supported) {
                return Linking.openURL(appUrl);
            }
            return Linking.openURL(webUrl);
        })
        .catch(err => {
            console.error('An error occurred', err);
        });
}



export const openInstagramUrl = (USERNAME) => {
    const appUrl = `instagram://user?username=${USERNAME}`;
    const webUrl = `http://instagram.com/_u/${USERNAME}/`;
    Linking.canOpenURL(appUrl)
        .then(supported => {
            if (supported) {
                return Linking.openURL(appUrl);
            }
            return Linking.openURL(webUrl);
        })
        .catch(err => {
            console.error('An error occurred', err);
        });
}
