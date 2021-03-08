import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC8JcxF07AY2LSt1ljHaj5DrgifRgOSgEM",
    authDomain: "litelement-course.firebaseapp.com",
    projectId: "litelement-course",
    storageBucket: "litelement-course.appspot.com",
    messagingSenderId: "29614748657",
    appId: "1:29614748657:web:409474d81b369a58e60a50"
};


class Login {
    constructor() {
        this.firebaseInit = firebase.initializeApp(firebaseConfig);
        this.auth = this.firebaseInit.auth();
    }

    isLoggedInPromise() {
        return new Promise((resolve, reject) =>
            this.auth.onAuthStateChanged((user) => {
                if (user) {
                    return resolve(user);
                }

                return resolve(false);
            })
        );
    }

    async loginWithFacebook() {
        const provider = new firebase.auth.FacebookAuthProvider();
        // provider.addScope('pages_manage_instant_articles');
        // provider.addScope('pages_show_list');
        // provider.addScope('read_page_mailboxes');
        // provider.addScope('pages_manage_posts');
        // provider.addScope('pages_read_engagement');
        // provider.addScope('publish_to_groups');
        // provider.addScope('pages_read_user_content');

        try {
            const response = await firebase.auth().signInWithPopup(provider);

            this._saveDataStorage(response);

            return true;
        } catch (e) {
            return false;
        }
    }

    _saveDataStorage({ credential }) {
        sessionStorage.setItem('accessToken', JSON.stringify(credential.accessToken));
    }
}

export const instanceLogin = new Login();